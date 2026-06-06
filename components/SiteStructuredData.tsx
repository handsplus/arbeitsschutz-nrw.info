/**
 * Schema.org JSON-LD für Suchmaschinen und KI-Systeme.
 * Explizite Abgrenzung: Publisher ist Health and Safety +, nicht die ASV NRW.
 */

import { SITE_URL } from '@/lib/seo';

const PUBLISHER_ID = `${SITE_URL}/#publisher`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const graph = [
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: 'Arbeitsschutz NRW – NRW-Navigator',
    alternateName: ['arbeitsschutz-nrw.info', 'Arbeitsschutz Nordrhein-Westfalen Navigator'],
    description:
      'NRW-Navigator zum Arbeitsschutz: Orientierung zu ArbSchG, Gefährdungsbeurteilung, Unterweisung und offiziellen Stellen (ASV NRW, LfGA, KomNet, DGUV). Für Arbeitgeber optional mit Hinweis auf Health and Safety +.',
    inLanguage: 'de-DE',
    publisher: { '@id': PUBLISHER_ID },
  },
  {
    '@type': 'Organization',
    '@id': PUBLISHER_ID,
    name: 'Health and Safety +',
    alternateName: ['Handsplus', 'H&S+'],
    url: 'https://www.handsplus.de/',
    description:
      'Privates Beratungsunternehmen zu Arbeitsschutz, Brandschutz und Managementsystemen in NRW und bundesweit.',
    sameAs: ['https://www.handsplus.de/'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Barcelona-Allee 12',
      postalCode: '51103',
      addressLocality: 'Köln',
      addressCountry: 'DE',
    },
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': graph,
};

export function SiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
