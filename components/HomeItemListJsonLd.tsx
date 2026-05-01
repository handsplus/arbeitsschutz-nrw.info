import { SITE_URL } from '@/lib/seo';

const items = [
  { name: 'Arbeitsschutz erklärt', url: `${SITE_URL}/arbeitsschutz-erklaert`, desc: 'Grundlagen, Akteure, GDA' },
  { name: 'Fachthemen A–Z', url: `${SITE_URL}/fachthemen`, desc: 'Themen und Verweise' },
  { name: 'Beratung & Beschwerde', url: `${SITE_URL}/beratung`, desc: 'Hotlines, Formulare, KomNet' },
  { name: 'Anträge & Formulare', url: `${SITE_URL}/antraege-formulare`, desc: 'ASV NRW' },
  { name: 'FAQ Arbeitsschutz', url: `${SITE_URL}/faq`, desc: 'Kurzantworten' },
  { name: 'Publikationen', url: `${SITE_URL}/publikationen`, desc: 'Hinweis auf Broschüren' },
  { name: 'Überwachungsaktionen', url: `${SITE_URL}/ueberwachungsaktionen`, desc: 'Schwerpunkte NRW' },
  { name: 'Offizielle Quellen', url: `${SITE_URL}/quellen`, desc: 'ASV, LfGA, KomNet, DGUV' },
] as const;

export function HomeItemListJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wichtige Bereiche des Informationsportals',
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      description: item.desc,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
