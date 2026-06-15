import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://visitchinanotes.com",
  output: "static",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare()
});