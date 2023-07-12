import { z, defineCollection } from 'astro:content';

const workCollection = defineCollection({
  schema: z.object({
    type: z.string(),
    year: z.number().or(z.string()),
    title: z.string(),
    tldr: z.array(z.string()),
    sections: z.array(z.string()),
    roles: z.array(z.string()),
    link: z.string().optional(),
    company: z.string().optional(),
    tools: z.array(z.string()).optional(),
    collaborators: z.object({ name: z.string(), role: z.string(), href: z.string()}).array().optional(),
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