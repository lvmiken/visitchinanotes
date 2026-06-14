import type { CollectionEntry } from "astro:content";

type CityEntry = CollectionEntry<"cities">;

export function getCitySlug(city: CityEntry) {
  return city.id;
}

function normalizeCityValue(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

export function findCityEntry(cities: CityEntry[], value: string) {
  const normalizedValue = normalizeCityValue(value);

  return cities.find(
    (city) =>
      normalizeCityValue(getCitySlug(city)) === normalizedValue ||
      normalizeCityValue(city.data.name) === normalizedValue,
  );
}

export function uniqueCityEntries(cities: Array<CityEntry | undefined>) {
  const seen = new Set<string>();

  return cities.filter((city): city is CityEntry => {
    if (!city || seen.has(getCitySlug(city))) {
      return false;
    }

    seen.add(getCitySlug(city));
    return true;
  });
}
