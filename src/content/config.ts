import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Round grouping: posts sharing a `series` slug form a round, ordered by `order`.
    series: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { blog };
