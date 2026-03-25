/**
 * Durchsuchbarer Index für die Portalsuche (nur Verweise zu internen/verlinkten Zielen).
 * Keine Volltextsuche über Fließtext – Orientierung an Begriffen und Seitentiteln.
 */

export type SiteSearchItem = {
  id: string;
  title: string;
  href: string;
  hint: string;
  /** Synonyme und Suchbegriffe (Kleinbuchstaben reichen) */
  keywords: string[];
  external?: boolean;
};

export const siteSearchIndex: SiteSearchItem[] = [
  {
    id: 'start',
    title: 'Startseite',
    href: '/',
    hint: 'Überblick',
    keywords: ['start', 'home', 'ueberblick', 'portal'],
  },
  {
    id: 'erklaert',
    title: 'Arbeitsschutz erklärt',
    href: '/arbeitsschutz-erklaert',
    hint: 'Grundlagen, Akteure, GDA',
    keywords: [
      'arbeitsschutz',
      'erklaert',
      'grundlagen',
      'gda',
      'gesetz',
      'asv',
      'arbeitsschutzverwaltung',
      'pflicht',
      'arbeitgeber',
    ],
  },
  {
    id: 'fachthemen',
    title: 'Fachthemen von A–Z',
    href: '/fachthemen',
    hint: 'Themen, Fachinfos',
    keywords: [
      'fachthema',
      'fachthemen',
      'thema',
      'a-z',
      'arbeitszeit',
      'mutterschutz',
      'gefahrstoff',
      'gefaehrstoff',
      'gefährdungsbeurteilung',
      'gbu',
      'bildschirm',
      'baustelle',
      'jugend',
      'komnet',
      'experte',
    ],
  },
  {
    id: 'beratung',
    title: 'Beratung & Beschwerde',
    href: '/beratung',
    hint: 'Behördenangebote',
    keywords: [
      'beratung',
      'beschwerde',
      'beschwerden',
      'telefon',
      'meldung',
      'recht',
      'beschaeftigte',
      'arbeitnehmer',
      'mobbing',
    ],
  },
  {
    id: 'beschwerde',
    title: 'Arbeitsschutzbeschwerde (Hinweis)',
    href: '/beratung#beschwerde',
    hint: 'Abschnitt Beschwerde',
    keywords: ['beschwerde', 'formular', 'melden', 'anzeigen'],
  },
  {
    id: 'produkte',
    title: 'Gefährliche Produkte melden',
    href: '/beratung#produkte',
    hint: 'Produktüberwachung',
    keywords: ['produkt', 'produkte', 'gefahr', 'marktueberwachung', 'melden'],
  },
  {
    id: 'antraege',
    title: 'Anträge & Formulare',
    href: '/antraege-formulare',
    hint: 'Formulare der ASV NRW',
    keywords: ['antrag', 'antraege', 'formular', 'genehmigung', 'anzeige', 'muster'],
  },
  {
    id: 'publikationen',
    title: 'Publikationen',
    href: '/publikationen',
    hint: 'Broschüren, Faltblätter',
    keywords: ['broschuere', 'broschüre', 'publikation', 'plakat', 'jahresbericht'],
  },
  {
    id: 'ueberwachung',
    title: 'Landesweite Überwachungsaktionen',
    href: '/ueberwachungsaktionen',
    hint: 'Schwerpunktaktionen',
    keywords: [
      'ueberwachung',
      'überwachung',
      'kontrolle',
      'aktion',
      'branche',
      'fleisch',
      'friseur',
      'reinigung',
    ],
  },
  {
    id: 'faq',
    title: 'FAQ Arbeitsschutz',
    href: '/faq',
    hint: 'Häufige Fragen',
    keywords: ['faq', 'frage', 'fragen', 'unterweisung', 'unfall'],
  },
  {
    id: 'quellen',
    title: 'Offizielle Quellen',
    href: '/quellen',
    hint: 'Links ASV, KomNet, DGUV',
    keywords: ['quelle', 'quellen', 'link', 'offiziell', 'asv'],
  },
  {
    id: 'handsplus',
    title: 'Beratung durch Health and Safety +',
    href: '/beratung-handsplus',
    hint: 'Privates Beratungsunternehmen',
    keywords: [
      'handsplus',
      'health',
      'safety',
      'koeln',
      'köln',
      'erstberatung',
      'sigecko',
      'sigeko',
      'brandschutz',
      'unternehmen',
    ],
  },
  {
    id: 'komnet',
    title: 'KomNet – Fragen an Expertinnen und Experten',
    href: 'https://www.komnet.nrw.de/',
    hint: 'Externes Angebot LAGA NRW',
    keywords: ['komnet', 'experte', 'experten', 'frage', 'dialog'],
    external: true,
  },
  {
    id: 'dguv',
    title: 'DGUV – Deutsche Gesetzliche Unfallversicherung',
    href: 'https://www.dguv.de/',
    hint: 'Extern: Unfallversicherung',
    keywords: [
      'dguv',
      'unfallversicherung',
      'bg',
      'berufsgenossenschaft',
      'unfallkasse',
      'praevention',
      'prävention',
    ],
    external: true,
  },
  {
    id: 'asv-nrw',
    title: 'Arbeitsschutzverwaltung NRW (Website)',
    href: 'https://www.arbeitsschutz.nrw.de/',
    hint: 'Offizielle Behörde',
    keywords: ['arbeitsschutz.nrw', 'behoerde', 'behörde', 'nrw', 'asv'],
    external: true,
  },
  {
    id: 'impressum',
    title: 'Impressum',
    href: '/impressum',
    hint: 'Anbieterangaben',
    keywords: ['impressum', 'anbieter', 'kontakt'],
  },
  {
    id: 'datenschutz',
    title: 'Datenschutz',
    href: '/datenschutz',
    hint: 'Datenschutzerklärung',
    keywords: ['datenschutz', 'dsgvo', 'cookies'],
  },
];

/** Vereinheitlicht Umlaute für einfaches Matching */
export function normalizeSearchText(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss');
}

export function filterSearchItems(query: string, items: SiteSearchItem[], limit = 8): SiteSearchItem[] {
  const q = normalizeSearchText(query);
  if (!q) {
    return items.slice(0, limit);
  }

  const scored = items
    .map((item) => {
      const hay = normalizeSearchText(
        [item.title, item.hint, ...item.keywords].join(' ')
      );
      if (!hay.includes(q)) {
        return { item, score: 0 };
      }
      const titleN = normalizeSearchText(item.title);
      let score = 1;
      if (titleN.startsWith(q)) score += 4;
      else if (titleN.includes(q)) score += 2;
      item.keywords.forEach((kw) => {
        const k = normalizeSearchText(kw);
        if (k.startsWith(q)) score += 3;
        else if (k.includes(q)) score += 1;
      });
      return { item, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.map((x) => x.item).slice(0, limit);
}
