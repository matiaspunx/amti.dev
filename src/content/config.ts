import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    isDraft: z.boolean().default(false),
    sordOrder: z.number().optional(),
    author: z.string().optional(),
    image: z
      .object({
        src: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    footnote: z.string().optional(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url().optional(),
    image: z.string().optional(),
    rrss: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authors,
};
