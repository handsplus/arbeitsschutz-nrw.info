import type { MetadataRoute } from 'next';

const base = 'https://arbeitsschutz-nrw.info';

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'];
  priority: number;
};

const entries: Entry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/arbeitsschutz-erklaert', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/fachthemen', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/beratung', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/quellen', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/antraege-formulare', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/publikationen', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/ueberwachungsaktionen', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/beratung-handsplus', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/impressum', changeFrequency: 'yearly', priority: 0.35 },
  { path: '/datenschutz', changeFrequency: 'yearly', priority: 0.35 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return entries.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
