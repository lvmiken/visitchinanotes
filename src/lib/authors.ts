import type { CollectionEntry } from "astro:content";

type AuthorEntry = CollectionEntry<"authors">;
type PublishableEntry =
  | CollectionEntry<"guides">
  | CollectionEntry<"topics">
  | CollectionEntry<"places">;

function normalizeAuthorValue(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function isGenericEditorialTeam(value: string) {
  return normalizeAuthorValue(value) === "editorialteam";
}

export function slugifyAuthorValue(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getAuthorSlug(author: AuthorEntry) {
  return slugifyAuthorValue(author.id);
}

export function findAuthorEntry(authors: AuthorEntry[], value: string) {
  const normalizedValue = normalizeAuthorValue(value);

  return authors.find(
    (author) =>
      normalizeAuthorValue(author.data.name) === normalizedValue ||
      normalizeAuthorValue(getAuthorSlug(author)) === normalizedValue,
  );
}

function getCityDeskSlug(city: string) {
  return `${slugifyAuthorValue(city)}-desk`;
}

function entrySlugMatches(entry: PublishableEntry, pattern: RegExp) {
  return pattern.test(entry.slug);
}

function resolveAuthorSlugForEntry(entry: PublishableEntry) {
  if ("city" in entry.data) {
    return getCityDeskSlug(entry.data.city);
  }

  if (entry.data.affectsCities.length === 1) {
    return getCityDeskSlug(entry.data.affectsCities[0]);
  }

  if (entrySlugMatches(entry, /(visa|transit|entry|passport|immigration)/i)) {
    return "entry-and-visa-desk";
  }

  if (entrySlugMatches(entry, /(kids|family|young-kids|toddler|child)/i)) {
    return "family-travel-desk";
  }

  if (entry.data.planningMoment === "book-transport") {
    return "transport-and-payments-desk";
  }

  if (
    entry.data.planningMoment === "solve-basics" &&
    /(alipay|wechat|payment|esim|internet|vpn|apps|didi|airport|arrival|metro|taxi|rail|train)/i.test(entry.slug)
  ) {
    return "transport-and-payments-desk";
  }

  if (entry.data.planningMoment === "solve-basics") {
    return "travel-readiness-desk";
  }

  if (entry.data.planningMoment === "choose-route") {
    return "route-planning-desk";
  }

  return "editorial-team";
}

export function resolveAuthorEntry(authors: AuthorEntry[], entry: PublishableEntry) {
  if (!isGenericEditorialTeam(entry.data.author)) {
    return findAuthorEntry(authors, entry.data.author);
  }

  const resolvedSlug = resolveAuthorSlugForEntry(entry);

  return authors.find((author) => getAuthorSlug(author) === resolvedSlug) ?? findAuthorEntry(authors, entry.data.author);
}
