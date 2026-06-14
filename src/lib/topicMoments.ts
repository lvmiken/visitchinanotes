export const topicMoments = [
  {
    id: "choose-route",
    label: "Choose The Right Route",
    description: "Use these reads when you are still comparing cities, pace, and how much to fit into a first trip.",
  },
  {
    id: "solve-basics",
    label: "Solve The Practical Basics",
    description: "Read these before arrival if payments, daily logistics, and confidence on the ground still feel unclear.",
  },
  {
    id: "book-transport",
    label: "Lock In Transport With Fewer Surprises",
    description: "These topics help once you are close to booking trains, flights, or city combinations.",
  },
] as const;

export const topicMomentMap = Object.fromEntries(
  topicMoments.map((moment) => [moment.id, moment]),
);
