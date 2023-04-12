import { z, defineCollection } from 'astro:content';

const caseStudyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    link: z.string().optional(),
    image: z.string().optional(),
    type: z.string(),
    roles: z.array(z.string()),
    collaborators: z.object({ name: z.string(), role: z.string(), link: z.string()}).array().optional(),
    tools: z.array(z.string()).optional(),
    tldr: z.string(),
  }),
});
const writingCollection = defineCollection({ 
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  'studies': caseStudyCollection,
  'writing': writingCollection,
};