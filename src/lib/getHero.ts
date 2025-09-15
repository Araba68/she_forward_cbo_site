// src/lib/getHero.ts
import { contentfulClient } from './contentful';
import type { HeroFields } from '@/types/contentful';

export async function getHero(): Promise<HeroFields | null> {
  const entries = await contentfulClient.getEntries<HeroFields>({
    content_type: 'hero',
    limit: 1,
  });

  return entries.items[0]?.fields ?? null;
}
