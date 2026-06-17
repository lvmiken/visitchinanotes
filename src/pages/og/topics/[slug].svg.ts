import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { getTopicSocialCard } from "../../../lib/socialImages";

interface Props {
  image: string;
}

export const getStaticPaths = (async () => {
  const topics = await getCollection("topics", ({ data }) => !data.draft);

  return topics.map((topic) => ({
    params: { slug: topic.slug },
    props: {
      image: getTopicSocialCard(topic),
    },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  new Response((props as Props).image, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
