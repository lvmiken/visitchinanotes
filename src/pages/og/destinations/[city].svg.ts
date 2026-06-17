import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { getCitySlug } from "../../../lib/cityEntries";
import { getCitySocialCard } from "../../../lib/socialImages";

interface Props {
  image: string;
}

export const getStaticPaths = (async () => {
  const cities = await getCollection("cities");

  return cities.map((city) => ({
    params: { city: getCitySlug(city) },
    props: {
      image: getCitySocialCard(city),
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
