import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { HomeItemListJsonLd } from '@/components/HomeItemListJsonLd';
import { SiteSearchSkeleton } from '@/components/SiteSearchSkeleton';
import { SourceLink } from '@/components/SourceLink';
import { homeMetadata } from '@/lib/seo';

export const metadata: Metadata = homeMetadata(
  'Orientierung zum Arbeitsschutz in Nordrhein-Westfalen: Schnellzugriff, aktuelle Meldungen und Verweise zu Arbeitsschutzverwaltung NRW, LfGA, KomNet und DGUV. Privates Informationsportal von Health and Safety + – keine Behörde.'
);

const SiteSearch = dynamic(
  () => import('@/components/SiteSearch').then((m) => ({ default: m.SiteSearch })),
  { loading: () => <SiteSearchSkeleton />, ssr: false }
);

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 6-10 7L2 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const aktuelles = [
  {
    title: 'NRW: Bundesratsinitiative zum Abbau unnötiger Bürokratie im Arbeitsschutz',
    text: 'Das Land Nordrhein-Westfalen hat eine Initiative in den Bundesrat eingebracht, die u. a. Änderungen bei Arbeitsschutzausschüssen, Aufzugsprüfungen und digitaler Dokumentation vorsieht. Hintergrund ist die Entlastung von Verwaltung und Wirtschaft bei gleichzeitigem Fokus auf den Schutz der Beschäftigten.',
    url: 'https://www.land.nrw/pressemitteilung/nordrhein-westfalen-startet-bundesratsinitiative-fuer-den-abbau-von-unnoetiger',
    date: '2025',
  },
  {
    title: 'Kontrollaktion Paketbranche: Teils gravierende Mängel im Arbeitsschutz',
    text: 'Von Mai bis August 2025 führte die Arbeitsschutzverwaltung eine landesweite Kontrollaktion in der Kurier-, Express- und Paketbranche (KEP) durch. Dabei wurden u. a. 57 Subunternehmen kontrolliert und 225 Zustellerinnen und Zusteller befragt; es wurden zum Teil gravierende Mängel festgestellt.',
    url: 'https://www.arbeitsschutz.nrw.de/kontrollaktion-der-paketbranche-teils-gravierende-maengel-im-arbeitsschutz',
    date: '2025',
  },
  {
    title: '16. Deutscher Gefahrstoffschutzpreis',
    text: 'Das BMAS zeichnet 2026 vorbildliche Aktivitäten zum Schutz vor Gefahrstoffen aus (10.000 Euro, Motto „Sicher. Besser. Arbeiten.“). Nach Angaben der BAuA endete die Bewerbungsfrist am 30. April 2026; die Preisverleihung ist für den 30. September 2026 vorgesehen.',
    url: 'https://www.baua.de/DE/Themen/Chemikalien-Biostoffe/Gefahrstoffe/Gefahrstoffschutzpreis/Gefahrstoffschutzpreis',
    date: '2026',
  },
  {
    title: 'Lungenscreening / Lungenkrebs-Früherkennung in NRW',
    text: 'Einführung des Lungenscreenings für stärker rauchende Personen im Alter von 50 bis 75 Jahren: Die Arbeitsschutzverwaltung informiert über Genehmigungsanträge für medizinische Einrichtungen und verweist auf Antragsunterlagen und Zuständigkeiten beim LfGA NRW.',
    url: 'https://www.arbeitsschutz.nrw.de/antraege-zur-genehmigung-von-lungenscreening-koennen-gestellt-werden',
    date: '2025',
  },
  {
    title: 'GDA-Befragung: Fortschritte beim Arbeitsschutz',
    text: 'Die Betriebs- und Beschäftigtenbefragung der Gemeinsamen Deutschen Arbeitsschutzstrategie (GDA) liefert Daten dazu, wie sich Sicherheit und Gesundheit bei der Arbeit in den zurückliegenden Jahren entwickelt haben.',
    url: 'https://www.gda-portal.de/SharedDocs/Meldungen/DE/25-06-24-Betriebs-und-Beschaeftigtenbefragung',
    date: '2025',
  },
  {
    title: 'DGUV: Hinweise zu Betrugsversuchen und gefälschten Schreiben',
    text: 'Die DGUV und die Unfallversicherungsträger weisen wiederholt auf gefälschte Schreiben hin (z. B. angebliche „Präventionsmodule“ oder Datenabfragen). Auf der Presse-Übersicht der DGUV finden Sie aktuelle Warnhinweise und Orientierung.',
    url: 'https://www.dguv.de/de/presse/index.jsp',
    date: '2025',
  },
];

const schnellzugriff = [
  { label: 'Ich bin Arbeitgeberin / Arbeitgeber', href: '/arbeitsschutz-erklaert', summary: 'Pflichten, Gefährdungsbeurteilung, Beratung' },
  { label: 'Ich bin Beschäftigte oder Beschäftigter', href: '/beratung', summary: 'Beschwerde, Rechte, Ansprechstellen' },
  { label: 'Ich habe eine konkrete Fachfrage', href: '/fachthemen', summary: 'Themen A–Z, KomNet-Experten' },
  { label: 'Ich will etwas melden', href: '/beratung#beschwerde', summary: 'Arbeitsschutzbeschwerde, gefährliche Produkte' },
];

const services = [
  {
    title: 'Arbeitsschutz erklärt',
    text: 'Wie funktioniert der Arbeitsschutz in Deutschland? Welche Aufgaben hat die Arbeitsschutzverwaltung NRW? Was ist die GDA? Übersicht zu Akteuren, Gesetzen und Landesweiten Überwachungsaktionen.',
    href: '/arbeitsschutz-erklaert',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Fachthemen von A–Z',
    text: 'Alle wichtigen Fachinformationen: Arbeitszeit, Mutterschutz, Gefahrstoffe, Gefährdungsbeurteilung, Bildschirmarbeit, Baustellen, Jugendarbeitsschutz und viele weitere Themen mit Verweisen auf offizielle Informationen und KomNet.',
    href: '/fachthemen',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Beratung & Beschwerde',
    text: 'Telefonische Erstberatung, Arbeitsschutzbeschwerde (Online-Formular), Meldung gefährlicher Produkte, Mobbing am Arbeitsplatz und weitere Beratungsangebote – mit direkten Links zu den offiziellen Diensten.',
    href: '/beratung',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Anträge, Formulare & Hinweise',
    text: 'Übersicht der Anträge und Formulare der Arbeitsschutzverwaltung NRW (Genehmigungen, Anzeigen, Musterformulare). Direkt zum offiziellen Bereich.',
    href: '/antraege-formulare',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Publikationen',
    text: 'Broschüren, Faltblätter, Plakate und Jahresberichte der Arbeitsschutzverwaltung. Alle aktuellen Publikationen finden Sie auf der offiziellen Website.',
    href: '/publikationen',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Landesweite Überwachungsaktionen',
    text: 'Informationen zu Schwerpunktaktionen in Risikobranchen: z. B. faire Arbeit in der Fleischindustrie, Friseurbranche, Gebäudereinigung, Sonn- und Feiertagsarbeit.',
    href: '/ueberwachungsaktionen',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'KomNet – Fragen an Expertinnen und Experten',
    text: 'Durchsuchen Sie tausende qualitätsgesicherte Dialoge zu Sicherheit und Gesundheit bei der Arbeit oder stellen Sie selbst eine Frage an die KomNet-Expertinnen und -Experten (kostenfrei).',
    href: 'https://www.komnet.nrw.de/',
    source: 'https://www.komnet.nrw.de/',
    sourceLabel: 'KomNet NRW',
    internal: false,
  },
  {
    title: 'Gefährliche Produkte melden',
    text: 'Verdacht auf unsichere Produkte? Zuerst den Produktverantwortlichen informieren, dann die Marktüberwachung. Schritt-für-Schritt-Infos und Links zum Meldeverfahren.',
    href: '/beratung#produkte',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'FAQ Arbeitsschutz',
    text: 'Häufige Fragen: Was ist eine Unterweisung? Wen spreche ich an? Was tun bei Arbeitsunfall? Antworten und Link zum offiziellen FAQ.',
    href: '/faq',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Gesetzliche Unfallversicherung (DGUV)',
    text: 'Berufsgenossenschaften und Unfallkassen: Prävention, Versicherungsschutz, Arbeitsunfälle, Berufskrankheiten, Unfallanzeige. Infoline der DGUV: 0800 6050404 (kostenfrei).',
    href: 'https://www.dguv.de/',
    source: 'https://www.dguv.de/',
    sourceLabel: 'DGUV',
    internal: false,
  },
  {
    title: 'Beratung durch Health and Safety +',
    text: 'Professionelle Betreuung in Arbeitsschutz, Brandschutz und Managementsystemen – Köln & NRW. Kostenlose Erstberatung. Dieses Portal wird von Health and Safety + betrieben.',
    href: '/beratung-handsplus',
    source: null,
    sourceLabel: null,
    internal: true,
  },
  {
    title: 'Offizielle Quellen',
    text: 'Direkte Links zur Arbeitsschutzverwaltung NRW (inkl. Aktuelles & Presse), zum LfGA NRW, zu KomNet und zur DGUV.',
    href: '/quellen',
    source: null,
    sourceLabel: null,
    internal: true,
  },
];

export default function HomePage() {
  return (
    <>
      <HomeItemListJsonLd />
      <div className="container">
      <div className="page-head page-head-with-search">
        <div className="page-head-main">
          <h1>Arbeitsschutz in Nordrhein-Westfalen</h1>
          <p className="page-intro lead">
            Dieses Portal hilft beim Einstieg zum Thema Arbeitsschutz in NRW: Es verweist
            auf die offiziellen Angebote der{' '}
            <a href="https://www.arbeitsschutz.nrw.de/" target="_blank" rel="noopener noreferrer">
              Arbeitsschutzverwaltung Nordrhein-Westfalen
            </a>
            , von{' '}
            <a href="https://www.komnet.nrw.de/" target="_blank" rel="noopener noreferrer">
              KomNet
            </a>{' '}
            (Landesamt für Gesundheit und Arbeitsschutz NRW) und der{' '}
            <a href="https://www.dguv.de/" target="_blank" rel="noopener noreferrer">
              Deutschen Gesetzlichen Unfallversicherung (DGUV)
            </a>
            . Hier werden keine Inhalte der Behörden ersetzt und keine Einzelfälle oder
            Rechtsfragen bearbeitet – dafür sind die verlinkten Stellen zuständig.
          </p>
          <p className="page-intro page-intro-mission">
            Betrieben von <Link href="/beratung-handsplus">Health and Safety +</Link>:
            Übersichtliche Verweise statt eigener Fachbearbeitung – die ausführlichen
            Informationen und Beratungsangebote finden Sie auf den verlinkten Seiten.
          </p>
        </div>
        <aside className="page-head-aside" aria-label="Suche im Informationsportal">
          <SiteSearch />
        </aside>
      </div>

      <aside className="promo-banner" aria-labelledby="promo-hs-title">
        <div className="promo-banner-inner">
          <p className="promo-banner-kicker">Beratung · Health and Safety +</p>
          <h2 id="promo-hs-title" className="promo-banner-title">
            Unternehmerische Unterstützung im Arbeitsschutz gesucht?
          </h2>
          <p className="promo-banner-text">
            Health and Safety + ist in NRW tätig – u. a. zu Gefährdungsbeurteilung,
            Brandschutz, SiGeKo, Elektrosicherheit, Schulungen und Managementsystemen
            (z. B. ISO 45001). Unverbindliche Erstberatung ist möglich; Details auf
            handsplus.de und unter „Beratung H&amp;S+“ in diesem Portal.
          </p>
          <div className="promo-banner-actions">
            <Link href="/beratung-handsplus" className="promo-btn promo-btn-primary">
              Mehr zu Health and Safety +
            </Link>
            <a
              href="https://www.handsplus.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="promo-btn promo-btn-outline"
            >
              www.handsplus.de
            </a>
            <div className="promo-banner-icon-pair">
              <a
                href="mailto:kontakt@handsplus.de"
                className="promo-btn promo-btn-outline promo-btn-icon-only"
                aria-label="E-Mail an kontakt@handsplus.de"
                title="kontakt@handsplus.de"
              >
                <IconMail className="promo-btn-icon" />
              </a>
              <a
                href="tel:+4915228261619"
                className="promo-btn promo-btn-outline promo-btn-icon-only"
                aria-label="Anrufen: 0152 282 61619"
                title="0152 282 61619"
              >
                <IconPhone className="promo-btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      <section className="content-section schnellzugriff-section">
        <h2>Schnellzugriff: Was suchen Sie?</h2>
        <ul className="quick-links">
          {schnellzugriff.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              <span className="quick-desc"> – {item.summary}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-section">
        <h2>Aktuelles aus Arbeitsschutz, GDA und DGUV</h2>
        <p className="section-lead">
          Auswahl aktueller Meldungen von Land NRW, Arbeitsschutzverwaltung NRW, BAuA/BMAS, GDA und DGUV. Eine laufend aktualisierte Übersicht der Arbeitsschutzverwaltung:{' '}
          <a href="https://www.arbeitsschutz.nrw.de/aktuelles-presse" target="_blank" rel="noopener noreferrer">
            Aktuelles &amp; Presse auf arbeitsschutz.nrw.de
          </a>
          .
        </p>
        <ul className="news-list">
          {aktuelles.map((item) => (
            <li key={item.url} className="news-item">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-title">
                {item.title}
              </a>
              <p className="news-text">{item.text}</p>
              <span className="news-meta">Quelle: offizielle Meldung · </span>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-link">
                Weiterlesen →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-section">
        <h2>Informationen und Dienste im Überblick</h2>
        <p className="section-lead">
          Themenfelder und Verweise zu Anträgen, Formularen und Publikationen – zum
          Orientieren und Weiterklicken; die vertiefenden Informationen stehen auf den
          jeweiligen offiziellen Seiten.
        </p>
        <div className="card-grid card-grid-large">
          {services.map((item) => (
            <div key={item.href + item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.internal ? (
                <Link href={item.href} className="external">
                  Mehr erfahren →
                </Link>
              ) : (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="external">
                  Zur offiziellen Seite →
                </a>
              )}
              {item.source && item.sourceLabel && (
                <SourceLink href={item.source} label={item.sourceLabel} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
