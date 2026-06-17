import type { CollectionEntry } from "astro:content";

export const topicClusters = [
  {
    id: "route-planning",
    slug: "route-planning",
    title: "Route Planning",
    description: "Use this topic hub when you are still shaping the route, deciding how many cities to include, and choosing hotel areas that keep the trip workable.",
    whenToUse: "Best before hotels and intercity moves are fully locked in.",
    topicSlugs: ["where-to-start", "plan-your-trip", "choosing-hotel-location"],
  },
  {
    id: "arrival-basics",
    slug: "arrival-basics",
    title: "Arrival Basics",
    description: "Use this topic hub before departure so entry rules, internet setup, and airport-to-city expectations are solved before the first day begins.",
    whenToUse: "Best before flights, arrival-day planning, and the first hotel are finalized.",
    topicSlugs: ["china-visa-basics", "esim-and-internet", "airport-to-city"],
  },
  {
    id: "payments-and-daily-use",
    slug: "payments-and-daily-use",
    title: "Payments And Daily Use",
    description: "Use this topic hub when you want the everyday side of the trip to feel easier, from paying for things to moving around cities once you are on the ground.",
    whenToUse: "Best before arrival or before choosing city bases that depend on easy local movement.",
    topicSlugs: ["alipay-wechat-pay", "metro-taxi-ridehailing"],
  },
  {
    id: "transport-and-reservations",
    slug: "transport-and-reservations",
    title: "Transport And Reservations",
    description: "Use this topic hub when trains, flights, timed entries, and booking decisions start shaping the route more than the sightseeing list itself.",
    whenToUse: "Best once the city shortlist is clear and the route is close to being booked.",
    topicSlugs: ["high-speed-rail", "book-high-speed-train", "train-vs-flight", "attraction-reservations"],
  },
] as const;

export const topicClusterMap = Object.fromEntries(
  topicClusters.map((cluster) => [cluster.id, cluster]),
) as Record<(typeof topicClusters)[number]["id"], (typeof topicClusters)[number]>;

export function getTopicClusterBySlug(slug: string) {
  return topicClusters.find((cluster) => cluster.slug === slug);
}

export function getTopicClusterForTopicSlug(slug: string) {
  return topicClusters.find((cluster) => cluster.topicSlugs.includes(slug));
}

export function getTopicsForCluster(
  cluster: (typeof topicClusters)[number],
  topics: CollectionEntry<"topics">[],
) {
  return cluster.topicSlugs
    .map((slug) => topics.find((topic) => topic.slug === slug))
    .filter(Boolean);
}
