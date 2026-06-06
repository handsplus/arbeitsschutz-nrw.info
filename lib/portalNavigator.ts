/**
 * Dual-Track NRW-Navigator: Routing-Logik für Persona-Auswahl und Arbeitgeber-Qualifizierung.
 * Keine Rechtsberatung – ehrliche Weiterleitung zu Behörde, KomNet oder H&S+.
 */

import type { HandsplusTeaserVariant } from '@/lib/handsplusLeistungen';

export type Persona = 'employer' | 'employee' | 'expert' | 'report';

export type EmployerSize = '1-9' | '10-49' | '50+';

export type EmployerBranch =
  | 'buero'
  | 'handwerk'
  | 'bau'
  | 'gastro'
  | 'logistik'
  | 'reinigung'
  | 'sonstiges';

export type EmployerTopic =
  | 'gefaehrdung'
  | 'unterweisung'
  | 'baustelle'
  | 'brandschutz'
  | 'elektro'
  | 'managementsystem'
  | 'sonstiges';

export type NavigatorLink = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

export type HandsplusRecommendation = {
  variant: HandsplusTeaserVariant;
  reason: string;
  specialtyUrl?: string;
  specialtyLabel?: string;
};

export type NavigatorResult = {
  headline: string;
  summary: string;
  officialLinks: NavigatorLink[];
  internalLinks?: NavigatorLink[];
  handsplus?: HandsplusRecommendation;
  disclaimer?: string;
};

export const personaOptions: {
  id: Persona;
  label: string;
  description: string;
}[] = [
  {
    id: 'employer',
    label: 'Ich bin Arbeitgeberin / Arbeitgeber',
    description: 'Pflichten, Gefährdungsbeurteilung, Betreuung im Betrieb',
  },
  {
    id: 'employee',
    label: 'Ich bin beschäftigt',
    description: 'Rechte, Beschwerde, Ansprechstellen – ohne Werbung',
  },
  {
    id: 'expert',
    label: 'Ich habe eine Fachfrage',
    description: 'KomNet, Fachthemen, offizielle Informationen',
  },
  {
    id: 'report',
    label: 'Ich will etwas melden',
    description: 'Arbeitsschutzbeschwerde oder gefährliche Produkte',
  },
];

export const employerSizeOptions: { id: EmployerSize; label: string; hint: string }[] = [
  { id: '1-9', label: '1–9 Beschäftigte', hint: 'Kleinstbetrieb / Kleinunternehmen' },
  { id: '10-49', label: '10–49 Beschäftigte', hint: 'KMU' },
  { id: '50+', label: '50 oder mehr', hint: 'Größerer Betrieb' },
];

export const employerBranchOptions: { id: EmployerBranch; label: string }[] = [
  { id: 'buero', label: 'Büro / Verwaltung / Dienstleistung' },
  { id: 'handwerk', label: 'Handwerk / Produktion' },
  { id: 'bau', label: 'Bau / Baustelle' },
  { id: 'gastro', label: 'Gastronomie / Hotel' },
  { id: 'logistik', label: 'Logistik / KEP / Transport' },
  { id: 'reinigung', label: 'Gebäudereinigung / Facility' },
  { id: 'sonstiges', label: 'Sonstige Branche' },
];

export const employerTopicOptions: { id: EmployerTopic; label: string }[] = [
  { id: 'gefaehrdung', label: 'Gefährdungsbeurteilung / FaSi' },
  { id: 'unterweisung', label: 'Unterweisung / Schulungen' },
  { id: 'baustelle', label: 'Baustelle / SiGeKo' },
  { id: 'brandschutz', label: 'Brandschutz' },
  { id: 'elektro', label: 'Elektrosicherheit / Prüfungen' },
  { id: 'managementsystem', label: 'Managementsystem (ISO 45001 o. Ä.)' },
  { id: 'sonstiges', label: 'Allgemeine Orientierung' },
];

export function getEmployeeResult(): NavigatorResult {
  return {
    headline: 'Ihre Ansprechstellen als Beschäftigte',
    summary:
      'Bei Fragen zu Sicherheit und Gesundheit am Arbeitsplatz oder bei unzumutbaren Bedingungen wenden Sie sich an die offiziellen Stellen. Dieses Portal ersetzt keine Behörde und keine Rechtsberatung.',
    officialLinks: [
      {
        label: 'Telefonische Erstberatung ASV NRW',
        href: 'tel:0234416927474',
        primary: true,
      },
      {
        label: 'Arbeitsschutzbeschwerde (Online-Formular)',
        href: 'https://www.arbeitsschutz.nrw.de/beratung-beschwerde/arbeitsschutzbeschwerde',
        external: true,
        primary: true,
      },
      {
        label: 'DGUV-Infoline (Unfall, Versicherung)',
        href: 'tel:08006050404',
        external: true,
      },
    ],
    internalLinks: [
      { label: 'Beratung & Beschwerde – Übersicht', href: '/beratung' },
      { label: 'FAQ Arbeitsschutz', href: '/faq' },
    ],
    disclaimer:
      'Arbeitsrechtliche Themen (Urlaub, Lohn, Kündigung) sind nicht Aufgabe der Arbeitsschutzverwaltung.',
  };
}

export function getExpertResult(): NavigatorResult {
  return {
    headline: 'Fachfragen – offizielle Expertinnen und Experten',
    summary:
      'Für konkrete Fachfragen zu Sicherheit und Gesundheit bei der Arbeit nutzen Sie KomNet oder die Fachthemen der Arbeitsschutzverwaltung NRW. Antworten dort sind qualitätsgesichert und kostenfrei.',
    officialLinks: [
      {
        label: 'KomNet – Frage stellen oder Dialoge durchsuchen',
        href: 'https://www.komnet.nrw.de/',
        external: true,
        primary: true,
      },
      {
        label: 'Fachthemen ASV NRW',
        href: 'https://www.arbeitsschutz.nrw.de/fachthemen-publikationen/fachthemen-von-z',
        external: true,
      },
      {
        label: 'DGUV – Themen A–Z',
        href: 'https://www.dguv.de/de/themen-a-z/index.jsp',
        external: true,
      },
    ],
    internalLinks: [
      { label: 'Fachthemen-Übersicht (Portal)', href: '/fachthemen' },
      { label: 'FAQ Arbeitsschutz', href: '/faq' },
    ],
  };
}

export function getReportResult(): NavigatorResult {
  return {
    headline: 'Meldung und Beschwerde',
    summary:
      'Je nach Anliegen reichen Sie eine Beschwerde bei der Arbeitsschutzverwaltung ein oder melden ein verdächtiges Produkt. Verbindliche Bearbeitung erfolgt nur über die offiziellen Formulare.',
    officialLinks: [
      {
        label: 'Arbeitsschutzbeschwerde online',
        href: 'https://www.arbeitsschutz.nrw.de/beratung-beschwerde/arbeitsschutzbeschwerde',
        external: true,
        primary: true,
      },
      {
        label: 'Gefährliche Produkte melden',
        href: 'https://www.arbeitsschutz.nrw.de/beratung-beschwerde/gefaehrliche-produkte-melden',
        external: true,
        primary: true,
      },
    ],
    internalLinks: [
      { label: 'Beratung & Beschwerde – Schritt für Schritt', href: '/beratung' },
      { label: 'Direkt zur Beschwerde-Sektion', href: '/beratung#beschwerde' },
    ],
  };
}

function needsExternalSupport(
  size: EmployerSize,
  topic: EmployerTopic,
  branch: EmployerBranch
): boolean {
  if (topic === 'baustelle' || branch === 'bau') return true;
  if (topic === 'brandschutz' || topic === 'elektro' || topic === 'managementsystem') return true;
  if (size === '50+') return true;
  if (size === '10-49' && (topic === 'gefaehrdung' || topic === 'unterweisung')) return true;
  if (branch === 'gastro' || branch === 'logistik' || branch === 'reinigung') return true;
  return false;
}

function resolveHandsplusVariant(
  topic: EmployerTopic,
  branch: EmployerBranch
): HandsplusRecommendation {
  if (topic === 'baustelle' || branch === 'bau') {
    return {
      variant: 'sigeko',
      reason:
        'Auf Baustellen ist SiGeKo-Pflicht und Koordination oft komplex – externe Unterstützung ist hier häufig sinnvoll.',
      specialtyUrl: 'https://sigeko.koeln',
      specialtyLabel: 'sigeko.koeln – SiGeKo Schwerpunkt',
    };
  }
  if (topic === 'brandschutz') {
    return {
      variant: 'brandschutz',
      reason: 'Brandschutzkonzepte und organisatorischer Brandschutz erfordern Fachkenntnis und Abstimmung mit Versicherern.',
      specialtyUrl: 'https://brandschutzkoeln.com',
      specialtyLabel: 'brandschutzkoeln.com',
    };
  }
  if (topic === 'elektro') {
    return {
      variant: 'elektrosicherheit',
      reason: 'Elektrosicherheit und Prüfpflichten (VEFK, DGUV V3) werden in Betrieben oft extern abgedeckt.',
    };
  }
  if (topic === 'managementsystem') {
    return {
      variant: 'managementsysteme',
      reason: 'Einführung und Pflege von Managementsystemen (z. B. ISO 45001) profitiert von erfahrener Begleitung.',
    };
  }
  if (topic === 'unterweisung') {
    return {
      variant: 'schulungen',
      reason: 'Regelmäßige, dokumentierte Unterweisungen lassen sich effizient mit externer Unterstützung planen.',
    };
  }
  return {
    variant: 'arbeitsschutz',
    reason:
      'Gefährdungsbeurteilung, FaSi-Betreuung und Arbeitsschutzorganisation sind Kernaufgaben – viele Betriebe Ihrer Größe nutzen externe Fachkräfte.',
    specialtyUrl: 'https://arbeitssicherheit.nrw',
    specialtyLabel: 'arbeitssicherheit.nrw',
  };
}

export function getEmployerResult(
  size: EmployerSize,
  branch: EmployerBranch,
  topic: EmployerTopic
): NavigatorResult {
  const showHandsplus = needsExternalSupport(size, topic, branch);
  const handsplus = showHandsplus ? resolveHandsplusVariant(topic, branch) : undefined;

  const officialLinks: NavigatorLink[] = [
    {
      label: 'Telefonische Erstberatung ASV NRW (kostenfrei)',
      href: 'tel:0234416927474',
      primary: true,
    },
    {
      label: 'KomNet – Fachfrage stellen',
      href: 'https://www.komnet.nrw.de/',
      external: true,
    },
  ];

  const internalLinks: NavigatorLink[] = [
    { label: 'Arbeitsschutzgesetz & Pflichten', href: '/arbeitsschutzgesetz' },
    { label: 'Arbeitsschutz erklärt', href: '/arbeitsschutz-erklaert' },
  ];

  if (topic === 'gefaehrdung' || topic === 'unterweisung') {
    internalLinks.unshift({ label: 'FAQ: Gefährdungsbeurteilung & Unterweisung', href: '/faq' });
  }
  if (topic === 'baustelle') {
    internalLinks.unshift({ label: 'Fachthemen: Baustellen', href: '/fachthemen' });
  }

  let headline = 'Ihre nächsten Schritte als Arbeitgeber';
  let summary =
    'Grundlage ist immer das Arbeitsschutzgesetz (ArbSchG). Verbindliche Auskünfte erteilt die Arbeitsschutzverwaltung NRW – dieses Portal leitet Sie weiter.';

  if (size === '1-9' && !showHandsplus) {
    headline = 'Kleiner Betrieb – Orientierung zuerst';
    summary =
      'In vielen Kleinstbetrieben lassen sich Pflichten zunächst über KomNet und die ASV-Erstberatung klären. Externe Betreuung ist je nach Gefährdung dennoch sinnvoll – z. B. bei Gefahrstoffen oder Baustellen.';
  } else if (showHandsplus) {
    headline = 'Typischer Weg für Betriebe Ihrer Situation';
    summary =
      'Zuerst informieren (Behörde, KomNet), dann im Betrieb umsetzen. Bei Ihrer Kombination aus Größe, Branche und Thema ist professionelle Begleitung durch ein Beratungsunternehmen oft üblich – optional und unverbindlich klärbar.';
  }

  return {
    headline,
    summary,
    officialLinks,
    internalLinks,
    handsplus,
    disclaimer:
      'Keine Einzelfallberatung durch dieses Portal. Für verbindliche Pflichten und Rechtsfragen: ASV NRW oder KomNet.',
  };
}
