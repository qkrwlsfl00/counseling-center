import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export { apiVersion, dataset, projectId };

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to true if you want to use the edge CDN
});
