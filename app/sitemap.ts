import type { MetadataRoute } from 'next';
import { getAllBrancheSlugs } from '@/lib/branchenContent';

const BASE = 'https://arbeitsschutz-nrw.info';

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/branchen', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/bezirke', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/arbeitsschutz-erklaert', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/arbeitsschutzgesetz', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/fachthemen', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/beratung', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/quellen', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/antraege-formulare', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/publikationen', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/ueberwachungsaktionen', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/beratung-handsplus', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/impressum', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const branchen = getAllBrancheSlugs().map((slug) => ({
    url: `${BASE}/branchen/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  }));

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  return [...staticEntries, ...branchen];
}
