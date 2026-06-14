import type { CollectionEntry } from "astro:content";

type AuthorEntry = CollectionEntry<"authors">;

function normalizeAuthorValue(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
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
