import type { MetadataRoute } from 'next';

const base = 'https://arbeitsschutz-nrw.info';

const paths = [
  '/',
  '/arbeitsschutz-erklaert',
  '/fachthemen',
  '/beratung',
  '/beratung-handsplus',
  '/antraege-formulare',
  '/faq',
  '/publikationen',
  '/ueberwachungsaktionen',
  '/quellen',
  '/impressum',
  '/datenschutz',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
