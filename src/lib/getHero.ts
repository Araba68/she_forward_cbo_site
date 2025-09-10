import { contentfulClient } from './contentful';

// This function fetches the first entry of your 'hero' content type from Contentful
export async function getHero() {
  const entries = await contentfulClient.getEntries({ content_type: 'hero', limit: 1 });
 
  return entries.items[0]?.fields;
}