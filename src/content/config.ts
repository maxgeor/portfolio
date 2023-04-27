import { z, defineCollection } from 'astro:content';

const workCollection = defineCollection({
  schema: z.object({
    type: z.string(),
    year: z.number(),
    title: z.string(),
    description: z.string(),
    roles: z.array(z.string()),
    link: z.string().optional(),
    image: z.string().optional(),
    company: z.string().optional(),
    tools: z.array(z.string()).optional(),
    collaborators: z.object({ name: z.string(), role: z.string(), href: z.string()}).array().optional(),
    titleTightness: z.string().optional(),
  }),
});
const writingCollection = defineCollection({ 
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  'work': workCollection,
  'writing': writingCollection,
};