import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const localised = z.object({ 'pt-PT': z.string().min(1), en: z.string().min(1) });

/**
 * The four truth tiers (docs/02 §3). Every capability named on a product page
 * comes from this collection, so a tier change is a one-line edit.
 *
 * Evidence rule: tiers `original` and `v2` require evidence — an authorised
 * screenshot or the founder's written confirmation. The build fails otherwise.
 */
export const tiers = ['original', 'v2', 'development', 'exploring'] as const;

const status = defineCollection({
  loader: file('src/content/status/events.json'),
  schema: z
    .object({
      product: z.enum(['events', 'beauty']),
      label: localised,
      detail: localised.optional(),
      tier: z.enum(tiers),
      evidence: z
        .object({
          kind: z.enum(['authorised-screenshot', 'founder-written']),
          reference: z.string().min(1),
          date: z.iso.date(),
        })
        .optional(),
      order: z.number().int(),
    })
    .refine((item) => !['original', 'v2'].includes(item.tier) || item.evidence, {
      message: 'Tiers "original" and "v2" require evidence (docs/02, tier-1 evidence rule).',
      path: ['evidence'],
    }),
});

const faq = defineCollection({
  loader: file('src/content/faq/events.json'),
  schema: z.object({
    product: z.enum(['events', 'beauty', 'programme']),
    question: localised,
    answer: localised,
    order: z.number().int(),
  }),
});

export const collections = { status, faq };
