export const guideStages = [
  {
    id: "choose-destination",
    label: "Choosing A Destination",
    description: "Best when you are still deciding which city or route fits your first trip.",
  },
  {
    id: "plan-stay",
    label: "Planning The Stay",
    description: "Best when you already picked a city and need to decide where to stay, how many days to go, or how to shape the stop.",
  },
  {
    id: "build-itinerary",
    label: "Building The Itinerary",
    description: "Best when you want a workable day-by-day structure instead of general inspiration.",
  },
  {
    id: "solve-logistics",
    label: "Solving Logistics",
    description: "Best when practical questions are shaping what the trip can realistically look like.",
  },
] as const;

export const guideStageMap = Object.fromEntries(
  guideStages.map((stage) => [stage.id, stage]),
) as Record<(typeof guideStages)[number]["id"], (typeof guideStages)[number]>;
