/**
 * Branchen-Landingpages: Long-Tail SEO + Arbeitgeber-Conversion.
 * Keine Rechtsberatung – Orientierung + offizielle Quellen + optional H&S+.
 */

import type { HandsplusTeaserVariant } from '@/lib/handsplusLeistungen';

export type BrancheSlug =
  | 'logistik-kep'
  | 'gebaeudereinigung'
  | 'gastronomie'
  | 'bau-baustelle';

export type BranchePage = {
  slug: BrancheSlug;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  risks: string[];
  pflichten: string[];
  aktuell?: { title: string; url: string; text: string };
  officialLinks: { label: string; href: string }[];
  internalLinks: { label: string; href: string }[];
  handsplusVariant: HandsplusTeaserVariant;
  specialtyUrl?: string;
  specialtyLabel?: string;
};

export const branchenPages: BranchePage[] = [
  {
    slug: 'logistik-kep',
    title: 'Arbeitsschutz Logistik & KEP NRW',
    h1: 'Arbeitsschutz in Logistik, Kurier & Paketbranche (NRW)',
    metaDescription:
      'Arbeitsschutz Logistik und KEP in NRW: Kontrollaktionen, Pflichten, Gefährdungsbeurteilung – Verweise ASV NRW, KomNet. Betriebliche Umsetzung: Health and Safety +.',
    keywords: [
      'Arbeitsschutz Logistik NRW',
      'KEP Arbeitsschutz',
      'Paketbranche Arbeitsschutz',
      'Kurier Express Paket',
      'Gefährdungsbeurteilung Logistik',
    ],
    intro:
      'Die Kurier-, Express- und Paketbranche (KEP) steht in NRW unter verstärkter Aufmerksicht der Arbeitsschutzverwaltung. Betriebe sollten Gefährdungsbeurteilung, Arbeitszeiten, Unterweisungen und Subunternehmer-Themen systematisch abdecken.',
    risks: [
      'Zeitdruck, Arbeitszeit und Erschöpfung',
      'Be- und Entladung, Sturz- und Rückenbelastung',
      'Verkehrssicherheit und Fahrzeugnutzung',
      'Subunternehmer und dokumentierte Unterweisung',
    ],
    pflichten: [
      'Gefährdungsbeurteilung für Zustell- und Lagerprozesse',
      'Regelmäßige Unterweisung (auch Leiharbeit / Subunternehmen)',
      'Arbeitszeitliche Vorgaben einhalten und dokumentieren',
      'Bei Mängeln: KomNet oder ASV-Erstberatung nutzen',
    ],
    aktuell: {
      title: 'Kontrollaktion Paketbranche: gravierende Mängel',
      url: 'https://www.arbeitsschutz.nrw.de/kontrollaktion-der-paketbranche-teils-gravierende-maengel-im-arbeitsschutz',
      text: 'Landesweite Kontrolle 2025 – u. a. Subunternehmen und Zusteller befragt.',
    },
    officialLinks: [
      { label: 'ASV NRW Erstberatung: 0234 41692 7474', href: 'tel:0234416927474' },
      { label: 'KomNet – Fachfragen Logistik', href: 'https://www.komnet.nrw.de/' },
      { label: 'Überwachungsaktionen ASV NRW', href: 'https://www.arbeitsschutz.nrw.de/' },
    ],
    internalLinks: [
      { label: 'NRW-Navigator (Start)', href: '/#portal-navigator-title' },
      { label: 'Arbeitsschutzgesetz & Pflichten', href: '/arbeitsschutzgesetz' },
      { label: 'Überwachungsaktionen', href: '/ueberwachungsaktionen' },
    ],
    handsplusVariant: 'arbeitsschutz',
    specialtyUrl: 'https://arbeitssicherheit.nrw',
    specialtyLabel: 'arbeitssicherheit.nrw',
  },
  {
    slug: 'gebaeudereinigung',
    title: 'Arbeitsschutz Gebäudereinigung NRW',
    h1: 'Arbeitsschutz in der Gebäudereinigung (NRW)',
    metaDescription:
      'Arbeitsschutz Gebäudereinigung NRW: Aktionstage, Pflichten, Gefahrstoffe, Unterweisung – ASV NRW, KomNet. Externe Betreuung: Health and Safety +.',
    keywords: [
      'Arbeitsschutz Gebäudereinigung',
      'Reinigungsbranche NRW',
      'Gefahrstoffe Reinigung',
      'Schwarzarbeit Reinigung',
    ],
    intro:
      'Bei Aktionstagen gegen Schwarzarbeit und illegaler Beschäftigung in der Gebäudereinigung wurden in über 80 % der kontrollierten Betriebe Mängel festgestellt – vor allem im Arbeits- und Gesundheitsschutz.',
    risks: [
      'Chemikalien und Gefahrstoffe (Reinigungsmittel)',
      'Rückenbelastung, Stolpern und Rutschen',
      'Allein-Arbeit und Zeiterfassung',
      'Anmeldung und Unterweisung aller Beschäftigten',
    ],
    pflichten: [
      'Gefährdungsbeurteilung inkl. Gefahrstoffe und PSA',
      'Sicherheitsdatenblätter und Unterweisungen',
      'Sozialversicherungsanmeldungen korrekt führen',
      'Bei Beschwerden: ASV-Beschwerdeformular',
    ],
    aktuell: {
      title: 'Aktionstage Gebäudereinigung 2025',
      url: 'https://www.arbeitsschutz.nrw.de/gemeinsam-gegen-schwarzarbeit-und-illegale-beschaeftigung-der-gebaeudereinigung',
      text: '146 Betriebe geprüft – Mängel in ASi und Anmeldungen.',
    },
    officialLinks: [
      { label: 'ASV NRW Erstberatung', href: 'tel:0234416927474' },
      { label: 'KomNet – Gefahrstoffe / Reinigung', href: 'https://www.komnet.nrw.de/' },
      { label: 'Fachthemen Gefahrstoffe (ASV)', href: 'https://www.arbeitsschutz.nrw.de/fachthemen-publikationen/fachthemen-von-z' },
    ],
    internalLinks: [
      { label: 'NRW-Navigator', href: '/#portal-navigator-title' },
      { label: 'Fachthemen Gefahrstoffe', href: '/fachthemen' },
      { label: 'FAQ Unterweisung', href: '/faq' },
    ],
    handsplusVariant: 'arbeitsschutz',
  },
  {
    slug: 'gastronomie',
    title: 'Arbeitsschutz Gastronomie & Hotel NRW',
    h1: 'Arbeitsschutz in Gastronomie und Hotellerie (NRW)',
    metaDescription:
      'Arbeitsschutz Gastronomie NRW: Küche, Brandschutz, Unterweisung, Arbeitszeit – ASV NRW, KomNet. Beratung für Betriebe: Health and Safety +.',
    keywords: [
      'Arbeitsschutz Gastronomie NRW',
      'Hotel Arbeitsschutz',
      'Gefährdungsbeurteilung Gastronomie',
      'Brandschutz Gastronomie',
    ],
    intro:
      'Gastronomie und Hotellerie verbinden hohe Arbeitsintensität mit Brand-, Schnitt-, Rutsch- und Hitzegefahren. Gefährdungsbeurteilung, Unterweisung und organisatorischer Brandschutz sind zentrale Pflichten.',
    risks: [
      'Schnitt- und Brandverletzungen in der Küche',
      'Rutschgefahr, heiße Oberflächen und Dämpfe',
      'Arbeitszeit, Schicht und Saisonspitzen',
      'Jugendliche und Aushilfen (JArbSchG)',
    ],
    pflichten: [
      'Gefährdungsbeurteilung für Küche, Service, Lager',
      'Brandschutzordnung und Unterweisung',
      'Jugendarbeitsschutz bei Minijobs und Azubis',
      'Erste Hilfe und Dokumentation',
    ],
    officialLinks: [
      { label: 'ASV NRW Erstberatung', href: 'tel:0234416927474' },
      { label: 'KomNet – Gastronomie / Küche', href: 'https://www.komnet.nrw.de/' },
      { label: 'DGUV – Gastronomie', href: 'https://www.dguv.de/' },
    ],
    internalLinks: [
      { label: 'NRW-Navigator', href: '/#portal-navigator-title' },
      { label: 'Arbeitsschutz erklärt', href: '/arbeitsschutz-erklaert' },
      { label: 'Beratung H&S+', href: '/beratung-handsplus' },
    ],
    handsplusVariant: 'brandschutz',
    specialtyUrl: 'https://brandschutzkoeln.com',
    specialtyLabel: 'brandschutzkoeln.com',
  },
  {
    slug: 'bau-baustelle',
    title: 'Arbeitsschutz Bau & SiGeKo NRW',
    h1: 'Arbeitsschutz auf Baustellen und SiGeKo (NRW)',
    metaDescription:
      'Arbeitsschutz Baustelle NRW: SiGeKo, Absturzsicherung, Gefährdungsbeurteilung – ASV NRW, KomNet. SiGeKo-Betreuung: Health and Safety + / sigeko.koeln.',
    keywords: [
      'SiGeKo NRW',
      'Arbeitsschutz Baustelle',
      'Baustelle NRW Pflichten',
      'Absturzsicherung Baustelle',
      'Sicherheitskoordinator Bau',
    ],
    intro:
      'Auf Baustellen gelten besondere Regeln: SiGeKo-Pflicht, Absturzsicherung, Koordination mehrerer Gewerke. Bauherren, Unternehmer und Koordinatoren müssen Rollen und Dokumentation klar regeln.',
    risks: [
      'Absturz, einstürzende Gräben, Gerüste',
      'Kran-, Maschinen- und Lärmgefahren',
      'Mehrere Gewerke auf einer Baustelle',
      'SiGeKo-Pflicht und Baustelleneinrichtung',
    ],
    pflichten: [
      'SiGeKo nach RAB 30 / Baustellenregeln',
      'Gefährdungsbeurteilung je Tätigkeit und Gerüst',
      'Unterweisung aller Beschäftigten und Subunternehmer',
      'Koordination mit ASV bei Beschwerden',
    ],
    officialLinks: [
      { label: 'ASV NRW – Baustellen', href: 'https://www.arbeitsschutz.nrw.de/' },
      { label: 'KomNet – Baustelle / SiGeKo', href: 'https://www.komnet.nrw.de/' },
      { label: 'DGUV – Bau', href: 'https://www.dguv.de/' },
    ],
    internalLinks: [
      { label: 'NRW-Navigator', href: '/#portal-navigator-title' },
      { label: 'Fachthemen Baustellen', href: '/fachthemen' },
      { label: 'Überwachungsaktionen', href: '/ueberwachungsaktionen' },
    ],
    handsplusVariant: 'sigeko',
    specialtyUrl: 'https://sigeko.koeln',
    specialtyLabel: 'sigeko.koeln',
  },
];

export function getBrancheBySlug(slug: string): BranchePage | undefined {
  return branchenPages.find((b) => b.slug === slug);
}

export function getAllBrancheSlugs(): BrancheSlug[] {
  return branchenPages.map((b) => b.slug);
}
