import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const sitemapExcludedPathnames = new Set([
  "/authors/",
  "/authors/editorial-team/",
  "/contribute/",
  "/editorial-policy/",
  "/plan-help/",
  "/privacy/",
]);

export default defineConfig({
  site: "https://visitchinanotes.com",
  output: "static",
  integrations: [
    mdx(),
    sitemap({
      filter(page) {
        const { pathname } = new URL(page);
        return !sitemapExcludedPathnames.has(pathname);
      },
    }),
  ],
});
