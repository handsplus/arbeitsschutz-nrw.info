import type { Metadata } from 'next';

export const SITE_URL = 'https://arbeitsschutz-nrw.info';

export function absUrl(path: string): string {
  if (!path || path === '/') return SITE_URL;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

const OG_IMAGE = {
  url: '/icon.png',
  width: 512,
  height: 512,
  alt: 'Arbeitsschutz NRW Informationsportal',
} as const;

const SITE_NAME_OG = 'Arbeitsschutz NRW – Informationsportal';

/** Einheitliche Meta-Tags pro Unterseite (Canonical, Open Graph, Twitter). */
export function pageMetadata(opts: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const url = absUrl(opts.path);
  const fullTitle = `${opts.title} | Arbeitsschutz NRW`;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords?.length ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      locale: 'de_DE',
      siteName: SITE_NAME_OG,
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description: opts.description,
    },
  };
}

/** Startseite: nutzt den Default-Titel aus dem Root-Layout. */
export function homeMetadata(description: string): Metadata {
  return {
    description,
    alternates: { canonical: SITE_URL },
    openGraph: {
      title: 'Arbeitsschutz NRW – Informationsportal (Links & Orientierung)',
      description,
      url: SITE_URL,
      locale: 'de_DE',
      siteName: SITE_NAME_OG,
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary',
      title: 'Arbeitsschutz NRW – Informationsportal',
      description,
    },
    keywords: [
      'Arbeitsschutz NRW',
      'Arbeitsschutz Nordrhein-Westfalen',
      'Arbeitsschutzverwaltung NRW',
      'KomNet',
      'LfGA NRW',
      'DGUV',
      'Informationsportal Arbeitsschutz',
    ],
  };
}
