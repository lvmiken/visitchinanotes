import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { getPlaceSocialCard } from "../../../lib/socialImages";

interface Props {
  image: string;
}

export const getStaticPaths = (async () => {
  const places = await getCollection("places", ({ data }) => !data.draft);

  return places.map((place) => ({
    params: { slug: place.slug },
    props: {
      image: getPlaceSocialCard(place),
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
