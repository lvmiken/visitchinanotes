import type { CollectionEntry } from "astro:content";

export const topicClusters = [
  {
    id: "route-planning",
    slug: "route-planning",
    title: "Route Planning",
    description: "Use this topic hub when you are still shaping the route, deciding how many cities to include, and choosing hotel areas that keep the trip workable.",
    whenToUse: "Best before hotels and intercity moves are fully locked in.",
    topicSlugs: ["where-to-start", "best-time-to-visit-china", "plan-your-trip", "choosing-hotel-location"],
  },
  {
    id: "arrival-basics",
    slug: "arrival-basics",
    title: "Arrival Basics",
    description: "Use this topic hub before departure so entry rules, internet setup, app readiness, and airport-to-city expectations are solved before the first day begins.",
    whenToUse: "Best before flights, arrival-day planning, and the first hotel are finalized.",
    topicSlugs: [
      "china-visa-basics",
      "esim-and-internet",
      "best-esim-for-china",
      "do-you-need-a-vpn-in-china",
      "what-apps-you-need-for-a-china-trip",
      "airport-to-city",
    ],
  },
  {
    id: "payments-and-daily-use",
    slug: "payments-and-daily-use",
    title: "Payments And Daily Use",
    description: "Use this topic hub when you want the everyday side of the trip to feel easier, from building a dependable payment stack to moving around cities once you are on the ground.",
    whenToUse: "Best before arrival or before choosing city bases that depend on easy local movement.",
    topicSlugs: [
      "how-to-pay-in-china",
      "alipay-wechat-pay",
      "can-tourists-use-alipay-in-china",
      "can-tourists-use-wechat-pay-in-china",
      "metro-taxi-ridehailing",
      "how-to-use-didi-in-china",
    ],
  },
  {
    id: "transport-and-reservations",
    slug: "transport-and-reservations",
    title: "Transport And Reservations",
    description: "Use this topic hub when trains, flights, station days, and timed-entry bookings start shaping the route more than the sightseeing list itself.",
    whenToUse: "Best once the city shortlist is clear and the route is close to being booked.",
    topicSlugs: [
      "high-speed-rail",
      "12306-for-foreigners",
      "book-high-speed-train",
      "how-to-ride-china-high-speed-rail",
      "train-vs-flight",
      "attraction-reservations",
      "how-to-book-forbidden-city-tickets",
      "how-to-book-terracotta-warriors-tickets",
    ],
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
