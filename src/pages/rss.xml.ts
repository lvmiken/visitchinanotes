import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteDescription, siteName } from "../lib/site";

export async function GET(context) {
  const [guides, places, topics] = await Promise.all([
    getCollection("guides", ({ data }) => !data.draft),
    getCollection("places", ({ data }) => !data.draft),
    getCollection("topics", ({ data }) => !data.draft),
  ]);

  const items = [...guides, ...places, ...topics]
    .sort((left, right) => {
      const leftDate = left.data.updatedDate ?? left.data.publishDate;
      const rightDate = right.data.updatedDate ?? right.data.publishDate;
      return rightDate.getTime() - leftDate.getTime();
    })
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.updatedDate ?? entry.data.publishDate,
      link:
        entry.collection === "guides"
          ? `/guides/${entry.slug}/`
          : entry.collection === "places"
            ? `/places/${entry.slug}/`
            : `/topics/${entry.slug}/`,
      categories: [entry.collection, ...(entry.data.tags ?? [])],
    }));

  return rss({
    title: siteName,
    description: siteDescription,
    site: context.site ?? "https://visitchinanotes.com",
    items,
    customData: "<language>en</language>",
  });
}
