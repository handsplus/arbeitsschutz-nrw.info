import Link from 'next/link';
import dynamic from 'next/dynamic';
import { SiteSearchSkeleton } from '@/components/SiteSearchSkeleton';
import { SourceLink } from '@/components/SourceLink';

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
    title: 'Kontrollaktion Paketbranche: Teils gravierende Mängel im Arbeitsschutz',
    text: 'Von Mai bis August 2025 führte die Arbeitsschutzverwaltung eine landesweite Kontrollaktion in der Kurier-, Express- und Paketbranche (KEP) durch. Bei 57 Subunternehmen und 225 befragten Zustellerinnen und Zustellern wurden zum Teil gravierende Mängel festgestellt.',
    url: 'https://mags.nrw/kontrollaktion-der-paketbranche-teils-gravierende-maengel-im-arbeitsschutz',
    date: '2025',
  },
  {
    title: '16. Deutscher Gefahrstoffschutzpreis 2026',
    text: 'Das BMAS verleiht 2026 zum 16. Mal den Deutschen Gefahrstoffschutzpreis (10.000 €). Motto: „Sicher. Besser. Arbeiten.“ Bewerbungen bis 30. April 2026.',
    url: 'https://www.baua.de/DE/Themen/Chemikalien-Biostoffe/Gefahrstoffe/Gefahrstoffschutzpreis/Gefahrstoffschutzpreis',
    date: '2026',
  },
  {
    title: 'Praxishilfen Lungenkrebs-Früherkennung (LuKrFrühErkV)',
    text: 'Aktualisierte Handreichung und neues Musterformular für Anträge zur Genehmigung von Röntgeneinrichtungen zur Früherkennung von Lungenkrebs bei rauchenden Personen.',
    url: 'https://www.arbeitsschutz.nrw.de/genehmigungsantrag-fuer-den-betrieb-einer-roentgeneinrichtung-zur-frueherkennung-von-lungenkrebs',
    date: '2025',
  },
  {
    title: 'GDA-Befragung: Fortschritte beim Arbeitsschutz',
    text: 'Die aktuelle Betriebs- und Beschäftigtenbefragung der Gemeinsamen Deutschen Arbeitsschutzstrategie (GDA) zeigt: Der systematische Schutz von Sicherheit und Gesundheit hat in den vergangenen zehn Jahren deutliche Fortschritte gemacht.',
    url: 'https://www.gda-portal.de/SharedDocs/Meldungen/DE/25-06-24-Betriebs-und-Beschaeftigtenbefragung',
    date: '2025',
  },
  {
    title: 'DGUV warnt vor Betrugsversuch und gefälschten Schreiben',
    text: 'Viele Betriebe haben Schreiben mit gefälschtem Absender einer Berufsgenossenschaft, Unfallkasse oder der DGUV erhalten (z. B. Vertrieb Präventionsmodul, Datenüberprüfung). Die DGUV informiert über den Betrugsversuch und wie Sie echte Schreiben erkennen.',
    url: 'https://www.dguv.de/de/presse/pressemitteilungen/2025/index.jsp',
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
    text: 'Direkte Links zu den offiziellen Websites der Arbeitsschutzverwaltung NRW, KomNet und der Deutschen Gesetzlichen Unfallversicherung (DGUV).',
    href: '/quellen',
    source: null,
    sourceLabel: null,
    internal: true,
  },
];

export default function HomePage() {
  return (
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
            Übersichtliche Verweise statt eigener Fachaufarbeitung – die ausführlichen
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
            Brandschutz, SiGeKo und Schulungen. Unverbindliche Erstberatung ist möglich;
            Details und Leistungsumfang auf den verlinkten Seiten.
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
          Meldungen von Arbeitsschutzverwaltung NRW, Ministerium, Gemeinsamer Deutscher Arbeitsschutzstrategie (GDA) und Deutscher Gesetzlicher Unfallversicherung (DGUV). Details und weitere News auf den verlinkten offiziellen Seiten.
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
  );
}
