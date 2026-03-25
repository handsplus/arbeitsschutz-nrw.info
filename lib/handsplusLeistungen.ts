/**
 * Kurztexte und Ziele für dezente H&S+-Hinweise (orientiert an www.handsplus.de/leistungen).
 * Nicht behördlich – privates Beratungsangebot.
 */

export type HandsplusTeaserVariant =
  | 'arbeitsschutz'
  | 'brandschutz'
  | 'sigeko'
  | 'elektrosicherheit'
  | 'schulungen'
  | 'managementsysteme'
  | 'general';

export type HandsplusTeaserCopy = {
  kicker: string;
  title: string;
  body: string;
  externalHref: string;
  externalLabel: string;
};

export const handsplusTeasers: Record<HandsplusTeaserVariant, HandsplusTeaserCopy> = {
  arbeitsschutz: {
    kicker: 'Health and Safety +',
    title: 'Arbeitsschutz im Betrieb umsetzen',
    body:
      'Grund- und betriebsspezifische Betreuung nach ASiG und DGUV Vorschrift 2: z. B. Gefährdungsbeurteilung, Fachkraft für Arbeitssicherheit, Unterweisungen und Dokumentation – für Unternehmen in Köln, NRW und darüber hinaus.',
    externalHref: 'https://www.handsplus.de/arbeitsschutz',
    externalLabel: 'Leistungen Arbeitsschutz',
  },
  brandschutz: {
    kicker: 'Health and Safety +',
    title: 'Brandschutz beraten lassen',
    body:
      'Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz – z. B. Konzepte, Brandschutzordnungen, Abstimmung mit Feuerversicherern; Bezug zu BauO NRW und Vorgaben der Versicherer.',
    externalHref: 'https://www.handsplus.de/brandschutz',
    externalLabel: 'Leistungen Brandschutz',
  },
  sigeko: {
    kicker: 'Health and Safety +',
    title: 'SiGeKo für Baustellen',
    body:
      'Sicherheits- und Gesundheitsschutzkoordination nach den Regeln zum Arbeitsschutz auf Baustellen (u. a. RAB 30) – für Bauherren, Gewerke und Projekte in der Region.',
    externalHref: 'https://www.handsplus.de/sigeko',
    externalLabel: 'Leistungen SiGeKo',
  },
  elektrosicherheit: {
    kicker: 'Health and Safety +',
    title: 'Elektrosicherheit & Prüfungen',
    body:
      'Externe verantwortliche Elektrofachkraft (VEFK) nach DIN VDE sowie Elektroprüfungen zum Schutz von Beschäftigten und Betrieb – komplementär zu Ihren Arbeitsschutzprozessen.',
    externalHref: 'https://www.handsplus.de/elektrosicherheit',
    externalLabel: 'Leistungen Elektrosicherheit',
  },
  schulungen: {
    kicker: 'Health and Safety +',
    title: 'Schulungen & Unterweisungen',
    body:
      'Maßgeschneiderte Schulungen und Weiterbildungen zu Arbeitsschutz und Brandschutz – zeitlich flexibel, online oder vor Ort, abgestimmt auf Ihre Betriebe und Rollen.',
    externalHref: 'https://www.handsplus.de/schulungen',
    externalLabel: 'Leistungen Schulungen',
  },
  managementsysteme: {
    kicker: 'Health and Safety +',
    title: 'Managementsysteme',
    body:
      'Einführung, Pflege und Optimierung von Managementsystemen – u. a. ISO 9001, ISO 45001, AMS VBG, AMS BAU; inhaltlich mit Arbeitsschutz und Prävention verzahnt.',
    externalHref: 'https://www.handsplus.de/managementsysteme',
    externalLabel: 'Leistungen Managementsysteme',
  },
  general: {
    kicker: 'Health and Safety +',
    title: 'Professionelle Betreuung für Unternehmen',
    body:
      'Arbeitsschutz, Brandschutz, SiGeKo, Elektrosicherheit, Schulungen und Managementsysteme – mit kostenloser Erstberatung. Schwerpunkt Köln und NRW; Ansprechpartner für Gewerbe, Industrie, Büros, Hotels und Baustellen.',
    externalHref: 'https://www.handsplus.de/leistungen',
    externalLabel: 'Alle Leistungen auf handsplus.de',
  },
};

/** Für die Übersichtsseite „Beratung H&S+“ */
export const handsplusServiceLinks: {
  title: string;
  href: string;
  short: string;
}[] = [
  {
    title: 'Arbeitsschutz',
    href: 'https://www.handsplus.de/arbeitsschutz',
    short: 'Betreuung nach ASiG und DGUV Vorschrift 2',
  },
  {
    title: 'Brandschutz',
    href: 'https://www.handsplus.de/brandschutz',
    short: 'Baulich, anlagentechnisch, organisatorisch',
  },
  {
    title: 'SiGeKo',
    href: 'https://www.handsplus.de/sigeko',
    short: 'Koordination auf Baustellen (RAB 30)',
  },
  {
    title: 'Elektrosicherheit',
    href: 'https://www.handsplus.de/elektrosicherheit',
    short: 'VEFK, Elektroprüfungen (DIN VDE)',
  },
  {
    title: 'Schulungen',
    href: 'https://www.handsplus.de/schulungen',
    short: 'Individuell, online oder vor Ort',
  },
  {
    title: 'Managementsysteme',
    href: 'https://www.handsplus.de/managementsysteme',
    short: 'ISO 9001/45001, AMS VBG, AMS BAU',
  },
];
