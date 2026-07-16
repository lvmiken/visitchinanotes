import type { CollectionEntry } from "astro:content";

type CityEntry = CollectionEntry<"cities">;
const editorialCityOrder = ["sanya", "haikou"] as const;
const editorialCityPriority = new Map(editorialCityOrder.map((slug, index) => [slug, index]));

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

export function sortCitiesForEditorialDisplay(cities: CityEntry[]) {
  const originalIndex = new Map(cities.map((city, index) => [getCitySlug(city), index]));

  return [...cities].sort((left, right) => {
    const leftPriority = editorialCityPriority.get(getCitySlug(left)) ?? Number.MAX_SAFE_INTEGER;
    const rightPriority = editorialCityPriority.get(getCitySlug(right)) ?? Number.MAX_SAFE_INTEGER;

    if (leftPriority !== rightPriority) {
      return leftPriority - rightPriority;
    }

    return (originalIndex.get(getCitySlug(left)) ?? 0) - (originalIndex.get(getCitySlug(right)) ?? 0);
  });
}
