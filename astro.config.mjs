import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const sitemapExcludedPathnames = new Set([
  "/authors/",
  "/authors/editorial-team/",
  "/contribute/",
  "/disclaimer/",
  "/editorial-policy/",
  "/plan-help/",
  "/privacy/",
  "/search/",
]);

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const contentCollections = [
  { directory: path.join(projectRoot, "src", "content", "guides"), routeBase: "/guides/" },
  { directory: path.join(projectRoot, "src", "content", "topics"), routeBase: "/topics/" },
  { directory: path.join(projectRoot, "src", "content", "places"), routeBase: "/places/" },
];

const frontmatterPattern = /^---\r?\n([\s\S]*?)\r?\n---/;

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function readFrontmatterDate(frontmatter, fieldName) {
  const pattern = new RegExp(`^${fieldName}:\\s*["']?([^"'\\r\\n]+)["']?\\s*$`, "m");
  const match = frontmatter.match(pattern);

  if (!match) {
    return undefined;
  }

  const parsedDate = new Date(match[1].trim());
  return Number.isNaN(parsedDate.getTime()) ? undefined : parsedDate;
}

function readFrontmatterBoolean(frontmatter, fieldName) {
  const pattern = new RegExp(`^${fieldName}:\\s*(true|false)\\s*$`, "mi");
  const match = frontmatter.match(pattern);

  if (!match) {
    return undefined;
  }

  return match[1].toLowerCase() === "true";
}

async function buildCollectionMetadataMap() {
  const metadataEntries = await Promise.all(
    contentCollections.map(async ({ directory, routeBase }) => {
      const dirEntries = await fs.readdir(directory, { withFileTypes: true });
      const contentFiles = dirEntries.filter(
        (entry) => entry.isFile() && [".md", ".mdx"].includes(path.extname(entry.name)),
      );

      return Promise.all(
        contentFiles.map(async (entry) => {
          const filePath = path.join(directory, entry.name);
          const fileContent = await fs.readFile(filePath, "utf8");
          const frontmatterMatch = fileContent.match(frontmatterPattern);

          if (!frontmatterMatch) {
            return undefined;
          }

          const frontmatter = frontmatterMatch[1];
          const lastmod = readFrontmatterDate(frontmatter, "updatedDate") ??
            readFrontmatterDate(frontmatter, "publishDate");
          const noindex = readFrontmatterBoolean(frontmatter, "noindex") ?? false;

          const slug = path.basename(entry.name, path.extname(entry.name));
          return [
            normalizePathname(`${routeBase}${slug}/`),
            {
              lastmod,
              noindex,
            },
          ];
        }),
      );
    }),
  );

  return new Map(metadataEntries.flat().filter(Boolean));
}

const sitemapMetadataByPath = await buildCollectionMetadataMap();

export default defineConfig({
  site: "https://visitchinanotes.com",
  output: "static",
  legacy: {
    collections: true,
  },
  integrations: [
    mdx(),
    sitemap({
      filter(page) {
        const pathname = normalizePathname(new URL(page).pathname);
        if (sitemapExcludedPathnames.has(pathname)) {
          return false;
        }

        const metadata = sitemapMetadataByPath.get(pathname);
        return !(metadata?.noindex ?? false);
      },
      serialize(item) {
        const pathname = normalizePathname(new URL(item.url).pathname);
        const lastmod = sitemapMetadataByPath.get(pathname)?.lastmod;

        if (!lastmod) {
          return item;
        }

        return {
          ...item,
          lastmod,
        };
      },
    }),
  ],
});
