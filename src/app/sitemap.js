import { client } from '../sanity/client';
import { SITE_URL } from '../lib/site';

const staticRoutes = [
  '',
  '/about',
  '/therapists',
  '/programs',
  '/assessments',
  '/booking',
  '/notice',
  '/news',
  '/resource',
];

export default async function sitemap() {
  const now = new Date();
  const entries = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/booking' ? 0.9 : 0.8,
  }));

  try {
    const documents = await client.fetch(`
      *[_type in ["notice", "newsBoard", "resourceBoard"]] {
        _id,
        _type,
        _updatedAt
      }
    `);
    const routeByType = {
      notice: 'notice',
      newsBoard: 'news',
      resourceBoard: 'resource',
    };

    entries.push(
      ...documents.map((document) => ({
        url: `${SITE_URL}/${routeByType[document._type]}/${document._id}`,
        lastModified: new Date(document._updatedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      })),
    );
  } catch (error) {
    console.error('Sanity fetch error while generating sitemap:', error.message);
  }

  return entries;
}
