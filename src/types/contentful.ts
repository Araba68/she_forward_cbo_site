// src/types/contentful.ts
import type { Asset } from 'contentful';

export interface HeroFields {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundColor?: string;
  heroImage?: Asset;
}
