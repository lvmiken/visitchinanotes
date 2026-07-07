import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

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

function readFrontmatterDate(frontmatter, fieldName) {
  const pattern = new RegExp(`^${fieldName}:\\s*["']?([^"'\\r\\n]+)["']?\\s*$`, "m");
  const match = frontmatter.match(pattern);

  if (!match) {
    return undefined;
  }

  const parsedDate = new Date(match[1].trim());
  return Number.isNaN(parsedDate.getTime()) ? undefined : parsedDate;
}

async function buildCollectionLastmodMap() {
  const lastmodEntries = await Promise.all(
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

          if (!lastmod) {
            return undefined;
          }

          const slug = path.basename(entry.name, path.extname(entry.name));
          return [`${routeBase}${slug}/`, lastmod];
        }),
      );
    }),
  );

  return new Map(lastmodEntries.flat().filter(Boolean));
}

const sitemapLastmodByPath = await buildCollectionLastmodMap();

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
        const { pathname } = new URL(page);
        return !sitemapExcludedPathnames.has(pathname);
      },
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = sitemapLastmodByPath.get(pathname);

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

  adapter: cloudflare()
});