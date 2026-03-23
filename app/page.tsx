import Link from 'next/link';
import { SourceLink } from '@/components/SourceLink';

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
      <div className="page-head">
        <h1>Arbeitsschutz in Nordrhein-Westfalen</h1>
        <p className="page-intro lead">
          Dieses Portal bündelt Informationen zum Arbeitsschutz in NRW und verweist
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
          . Es ersetzt diese nicht.
        </p>
        <p className="page-intro page-intro-mission">
          Mit diesem Angebot verfolgen wir von <Link href="/beratung-handsplus">Health and Safety +</Link> ein klares Ziel: Ihnen einen echten Mehrwert zu bieten – übersichtlich aufbereitete Informationen, direkte Wege zu den offiziellen Stellen und transparente Kommunikation.
        </p>
      </div>

      <div className="promo-banner">
        <p>
          <strong>Sie wünschen professionelle Unterstützung im Arbeitsschutz?</strong>{' '}
          Health and Safety + berät Unternehmen in NRW – Gefährdungsbeurteilung, Brandschutz, SiGeKo, Schulungen. Kostenlose Erstberatung.
        </p>
        <p className="promo-cta">
          <a href="/beratung-handsplus">Mehr zu Health and Safety +</a>
          {' · '}
          <a href="https://www.handsplus.de/" target="_blank" rel="noopener noreferrer">www.handsplus.de</a>
        </p>
      </div>

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
          Alle wichtigen Themen, Beratungsangebote und Links zu Anträgen, Formularen und Publikationen – strukturiert für Sie zusammengestellt.
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
