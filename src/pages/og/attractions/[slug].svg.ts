import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { getAttractionSocialCard } from "../../../lib/socialImages";

interface Props {
  image: string;
}

export const getStaticPaths = (async () => {
  const attractions = await getCollection("attractions", ({ data }) => !data.draft);

  return attractions.map((attraction) => ({
    params: { slug: attraction.slug },
    props: {
      image: getAttractionSocialCard(attraction),
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
