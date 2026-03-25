import type { MetadataRoute } from 'next';

const base = 'https://arbeitsschutz-nrw.info';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  };
}
