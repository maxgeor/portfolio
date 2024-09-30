import { z, reference, defineCollection } from 'astro:content';

const work = defineCollection({
  type: 'data',
  schema: z.object({
    type: z.enum(['client', 'project']),
    title: z.string(),
    description: z.string(),
    roles: z.array(z.enum(['Product', 'Code', 'Brand'])),
    image: z.string(),
    link: z.object({
      href: z.string(),
      target: z.enum(['_blank', '_self']).optional(),
    }).optional(),
    studySlug: z.string().optional(),
    isDraft: z.boolean().optional(),
    isPrivate: z.boolean().optional(),
    isArchived: z.boolean().optional(),
    isComingSoon: z.boolean().optional(),
    order: z.number(),
    year: z.string(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string()
    })).optional(),
  })
});

const study = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.string(),
    work: reference('work'),
    tools: z.array(z.string()),
    images: z.object({
      sm: z.string(),
      lg: z.string(),
    }),
    teammates: z.object({
      name: z.string(),
      role: z.string(), 
      href: z.string()
    }).array().optional(),
    isComingSoon: z.boolean().optional(),
    isDraft: z.boolean().optional(),
    order: z.number(),
    content: z.array(z.object({
      id: z.string(),
      title: z.string(),
    })),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    preview: z.string(),
    isDraft: z.boolean().optional(),
  }),
});

export const collections = { work, study, writing };