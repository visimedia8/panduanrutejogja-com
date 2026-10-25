import { defineCollection, z } from 'astro:content';

const panduanCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['trans-jogja', 'kereta-bandara', 'tiket-wisata']),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().default('Tim Redaksi PanduanRuteJogja.com'),
    featuredImage: z.string(),
    imageAlt: z.string(),
    halteList: z.array(z.object({
      name: z.string(),
      location: z.string().optional(),
      transit: z.string().optional()
    })).optional(),
    operationalHours: z.string(),
    fare: z.string(),
    routeType: z.string(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    }))
  })
});

export const collections = {
  panduan: panduanCollection
};
