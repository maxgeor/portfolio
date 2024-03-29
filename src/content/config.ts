import { z, reference, defineCollection } from 'astro:content';

const work = defineCollection({
  type: 'data',
  schema: z.object({
    type: z.enum(['client', 'project']),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.object({
      href: z.string(),
      target: z.enum(['_blank', '_self']).optional(),
    }).optional(),
    hasStudy: z.boolean().optional(),
    isDraft: z.boolean().optional(),
    isComingSoon: z.boolean().optional(),
    order: z.number()
  })
});

const study = defineCollection({
  type: 'content',
  schema: z.object({
    work: reference('work'),
    year: z.string(),
    tldr: z.string(),
    roles: z.object({
      long: z.array(z.string()),
      short: z.array(z.string()),
    }),
    tools: z.array(z.string()),
    sections: z.object({
      title: z.string(),
      subsections: z.object({
        title: z.string(),
      }).array().optional(),
    }).array(),
    image: z.string().optional(),
    teammates: z.object({
      name: z.string(),
      role: z.string(), 
      href: z.string()
    }).array().optional(),
    isComingSoon: z.boolean().optional(),
    isDraft: z.boolean().optional(),
    order: z.number()
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    isDraft: z.boolean().optional(),
  }),
});

export const collections = { work, study, writing };