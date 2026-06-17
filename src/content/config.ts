import { defineCollection, z } from "astro:content";

const faqSchema = z.array(
  z.object({
    question: z.string(),
    answer: z.string(),
  }),
);

const planningPrioritySchema = z.array(
  z.object({
    title: z.string(),
    description: z.string(),
  }),
);

const guideStageEnum = z.enum([
  "choose-destination",
  "plan-stay",
  "build-itinerary",
  "solve-logistics",
]);

const topicMomentEnum = z.enum([
  "choose-route",
  "solve-basics",
  "book-transport",
]);

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    city: z.string(),
    guideStage: guideStageEnum,
    tripLength: z.string().optional(),
    whoItsFor: z.array(z.string()).default([]),
    keyTakeaways: z.array(z.string()).default([]),
    relatedTopicSlugs: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    author: z.string(),
    draft: z.boolean().default(false),
    faq: faqSchema.default([]),
  }),
});

const cities = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    country: z.string().default("China"),
    intro: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    idealFor: z.array(z.string()).default([]),
    suggestedStay: z.string(),
    tripPace: z.string(),
    pairWith: z.array(z.string()).default([]),
    bestMonths: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    planningPriorities: planningPrioritySchema.default([]),
    transportNote: z.string(),
    homepageGroups: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    featuredGuideSlugs: z.array(z.string()).default([]),
    featuredTopicSlugs: z.array(z.string()).default([]),
    featuredAttractionSlugs: z.array(z.string()).default([]),
  }),
});

const topics = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    planningMoment: topicMomentEnum,
    whenToRead: z.string(),
    affectsCities: z.array(z.string()).default([]),
    featuredCitySlugs: z.array(z.string()).default([]),
    keyTakeaways: z.array(z.string()).default([]),
    beforeYouBookChecklist: z.array(z.string()).default([]),
    relatedGuideSlugs: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    author: z.string(),
    draft: z.boolean().default(false),
    faq: faqSchema.default([]),
  }),
});

const attractions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    city: z.string(),
    whoItsFor: z.array(z.string()).default([]),
    keyTakeaways: z.array(z.string()).default([]),
    beforeYouGoChecklist: z.array(z.string()).default([]),
    relatedTopicSlugs: z.array(z.string()).default([]),
    relatedGuideSlugs: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    author: z.string(),
    draft: z.boolean().default(false),
    faq: faqSchema.default([]),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    entityType: z.enum(["person", "organization"]).default("person"),
    role: z.string(),
    shortBio: z.string(),
    fullBio: z.string(),
    expertise: z.array(z.string()).default([]),
    reviewProcess: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

export const collections = {
  guides,
  cities,
  topics,
  attractions,
  authors,
};
