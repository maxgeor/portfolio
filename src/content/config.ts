import { z, defineCollection } from 'astro:content';

const caseStudyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.array(z.string()),
    company: z.string().optional(),
    roles: z.array(z.string()),
    collaborators: z.array(z.string()).optional(),
    tldr: z.string().optional(),
  }),
});
const writingCollection = defineCollection({ 
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  'case-studies': caseStudyCollection,
  'writing': writingCollection,
};