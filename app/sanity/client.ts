import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'iwk5sx2w',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
