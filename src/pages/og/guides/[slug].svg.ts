import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { getGuideSocialCard } from "../../../lib/socialImages";

interface Props {
  image: string;
}

export const getStaticPaths = (async () => {
  const guides = await getCollection("guides", ({ data }) => !data.draft);

  return guides.map((guide) => ({
    params: { slug: guide.slug },
    props: {
      image: getGuideSocialCard(guide),
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
