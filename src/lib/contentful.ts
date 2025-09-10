import { createClient } from 'contentful';

// This client lets you talk to Contentful using your credentials from .env.local
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});