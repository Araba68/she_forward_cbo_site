import { Entry, EntrySkeletonType, Asset } from 'contentful';
import { contentfulClient } from './contentful';

// Skeleton type for the Hero entry
export interface HeroSkeleton extends EntrySkeletonType {
  fields: {
    title: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundColor?: string;
    heroImage?: Asset;
  };
  contentTypeId: 'hero';
}

export type HeroEntry = Entry<HeroSkeleton>;

export async function getHero(): Promise<HeroSkeleton['fields'] | null> {
  const entries = await contentfulClient.getEntries<HeroSkeleton>({
    content_type: 'hero',
    limit: 1,
  });

  return entries.items[0]?.fields || null;
}
