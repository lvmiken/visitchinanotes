import type { CollectionEntry } from "astro:content";

export const topicClusters = [
  {
    id: "route-planning",
    slug: "route-planning",
    title: "Route Planning",
    description: "Use this topic hub when you are still shaping the route, deciding how many cities to include, and choosing hotel areas that keep the trip workable.",
    whenToUse: "Best before hotels and intercity moves are fully locked in.",
    topicSlugs: [
      "where-to-start",
      "best-time-to-visit-china",
      "plan-your-trip",
      "choosing-hotel-location",
      "best-china-itinerary-10-days",
      "a-10-day-china-bullet-train-itinerary-that-actually-works",
      "is-your-10-day-china-itinerary-realistic-or-too-exhausting",
      "shanxi-for-first-time-visitors",
      "first-shanxi-route-pingyao-yingxian-hanging-temple-datong",
      "wuhan-breakfast-culture-how-to-do-guozao",
      "wuhan-or-chengdu-which-food-city-fits-your-trip",
      "how-to-plan-a-south-china-route-with-hong-kong-macau-and-one-mainland-stop",
      "hainan-for-first-time-visitors",
      "hainan-with-kids-when-an-island-break-helps-more-than-another-city-stop",
      "sanya-or-phuket-which-beach-trip-fits-better-if-china-is-still-the-main-event",
      "sanya-or-bali-which-island-stop-makes-more-sense-when-china-is-the-main-trip",
      "yalong-bay-haitang-bay-or-dadonghai-where-to-base-a-first-sanya-stay",
      "sanya-haikou-or-wanning-which-hainan-base-fits-your-trip",
      "cycling-around-hainan-full-loop-or-a-shorter-coastal-slice",
      "wuzhizhou-island-diving-in-sanya-worth-the-boat-ride-or-too-packaged",
      "riyue-bay-in-wanning-what-a-first-surf-lesson-actually-feels-like",
      "qilou-old-street-in-haikou-real-stop-or-just-arrival-filler",
      "mission-hills-haikou-real-stop-for-non-golf-travelers-or-easy-to-skip",
      "atlantis-sanya-without-staying-there-real-day-out-or-hotel-hype",
      "should-you-split-hainan-between-sanya-and-wanning-or-keep-one-base",
      "how-to-find-night-markets-in-china",
      "dragon-boat-festival-in-china-worth-planning-around-or-too-crowded",
      "where-to-watch-dragon-boat-races-in-china-without-warping-your-whole-trip",
      "what-is-zongzi-and-which-kind-should-you-actually-try-in-china",
      "tiger-leaping-gorge-or-shangri-la-first",
      "tiger-leaping-gorge-hiking-for-first-time-visitors",
      "how-to-travel-between-lijiang-tiger-leaping-gorge-and-shangri-la-without-breaking-the-trip",
      "shangri-la-or-lijiang-in-june-where-a-summer-yunnan-trip-feels-better",
      "a-cooler-5-to-7-day-yunnan-route-for-june-lijiang-tiger-leaping-gorge-and-shangri-la",
      "zhangjiajie-and-fenghuang-can-you-really-do-both-well-on-one-trip",
      "digital-dunhuang-museum-experience-worth-it",
      "quanzhou-shaoxing-or-guiyang-which-city-fits-you",
    ],
  },
  {
    id: "arrival-basics",
    slug: "arrival-basics",
    title: "Arrival Basics",
    description: "Use this topic hub before departure so entry rules, internet setup, app readiness, and airport-to-city expectations are solved before the first day begins.",
    whenToUse: "Best before flights, arrival-day planning, and the first hotel are finalized.",
    topicSlugs: [
      "china-visa-basics",
      "can-you-enter-china-visa-free-multiple-times",
      "can-you-re-enter-china-visa-free-after-visiting-hong-kong",
      "after-macau-can-you-re-enter-mainland-china-visa-free",
      "hainan-visa-free-entry-clearly-explained",
      "can-you-travel-to-mainland-china-from-hainan-on-a-hainan-visa-free-entry",
      "china-digital-arrival-card-step-by-step",
      "traveling-in-china-as-a-vegan-what-to-prepare",
      "traveling-in-china-with-diabetes-what-to-prepare",
      "esim-and-internet",
      "best-esim-for-china",
      "do-you-need-a-vpn-in-china",
      "apple-maps-in-china-does-it-work-well-enough-for-travelers",
      "what-apps-you-need-for-a-china-trip",
      "airport-to-city",
      "sanya-phoenix-or-haikou-meilan-which-hainan-arrival-makes-more-sense",
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
      "a-10-day-china-bullet-train-itinerary-that-actually-works",
      "china-bullet-train-first-class-or-second-class",
      "how-much-luggage-can-you-bring-on-china-high-speed-rail",
      "how-to-ride-china-high-speed-rail",
      "train-vs-flight",
      "chinas-240-hour-transit-policy-which-airports-and-cities-actually-qualify",
      "how-to-book-a-china-240-hour-transit-itinerary-that-actually-qualifies",
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
