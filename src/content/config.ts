import { string } from "astro/zod";
import { defineCollection, z } from "astro:content";

const project = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    projectTimeframe: z.string().optional(),
    client: z.array(z.string()).optional(),
    topic: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { project };
