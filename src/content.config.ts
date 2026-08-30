import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const directories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/directories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    date_published: z.coerce.date().optional(),
    date_modified: z.coerce.date().optional(),
  }),
});

export const collections = { directories };
