import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { HomeItemListJsonLd } from '@/components/HomeItemListJsonLd';
import { SiteSearchSkeleton } from '@/components/SiteSearchSkeleton';
import { SourceLink } from '@/components/SourceLink';
import { aktuelles, services } from '@/lib/homeContent';
import { homeMetadata } from '@/lib/seo';

export const metadata: Metadata = homeMetadata(
  'Arbeitsschutz NRW-Navigator: In 30 Sekunden zur richtigen Stelle – ASV NRW, KomNet, DGUV. Privates Portal von Health and Safety +.'
);

const SiteSearch = dynamic(
  () => import('@/components/SiteSearch').then((m) => ({ default: m.SiteSearch })),
  { loading: () => <SiteSearchSkeleton />, ssr: false }
);

const PortalNavigator = dynamic(
  () => import('@/components/PortalNavigator').then((m) => ({ default: m.PortalNavigator })),
  { loading: () => (
    <section className="portal-navigator portal-navigator-skeleton" aria-busy="true">
      <p className="portal-navigator-lead">Navigator wird geladen …</p>
    </section>
  ), ssr: false }
);

export default function HomePage() {
  return (
    <>
      <HomeItemListJsonLd />
      <div className="container">
        <div className="page-head page-head-with-search">
          <div className="page-head-main">
            <h1>Arbeitsschutz NRW – Ihr Navigator</h1>
            <p className="page-intro lead">
              In wenigen Schritten zur passenden Anlaufstelle: Behörde, KomNet oder DGUV.
              Für Arbeitgeber optional mit Hinweis auf betriebliche Umsetzung — betrieben von{' '}
              <Link href="/beratung-handsplus">Health and Safety +</Link>,{' '}
              <strong>nicht</strong> von der Arbeitsschutzverwaltung NRW.
            </p>
            <div className="home-trust-strip">
              <span>Offizielle Quellen zuerst</span>
              <span>Keine Rechtsberatung</span>
              <span>Kostenlose Erstberatung für Betriebe</span>
            </div>
          </div>
          <aside className="page-head-aside" aria-label="Suche im Informationsportal">
            <SiteSearch />
          </aside>
        </div>

        <PortalNavigator />

        <section className="content-section branchen-quick-section">
          <h2>Branchen-Guides für Arbeitgeber</h2>
          <p className="section-lead">
            Risikobranchen mit Pflichten, offiziellen Links und optionaler Umsetzungshilfe durch H&amp;S+.
          </p>
          <div className="branchen-quick-grid">
            <Link href="/branchen/logistik-kep" className="branchen-quick-card">
              <span className="branchen-quick-title">Logistik &amp; KEP</span>
              <span className="branchen-quick-desc">Paketbranche, Kontrollaktionen</span>
            </Link>
            <Link href="/branchen/gebaeudereinigung" className="branchen-quick-card">
              <span className="branchen-quick-title">Gebäudereinigung</span>
              <span className="branchen-quick-desc">Gefahrstoffe, Unterweisung</span>
            </Link>
            <Link href="/branchen/gastronomie" className="branchen-quick-card">
              <span className="branchen-quick-title">Gastronomie &amp; Hotel</span>
              <span className="branchen-quick-desc">Küche, Brandschutz</span>
            </Link>
            <Link href="/branchen/bau-baustelle" className="branchen-quick-card">
              <span className="branchen-quick-title">Bau &amp; SiGeKo</span>
              <span className="branchen-quick-desc">Baustelle, Koordination</span>
            </Link>
          </div>
          <p>
            <Link href="/branchen">Alle Branchen-Guides →</Link>
            {' · '}
            <Link href="/bezirke">Bezirke &amp; Zuständigkeit NRW →</Link>
          </p>
        </section>

        <section className="content-section">
          <h2>Aktuelles – mit Betriebsbezug</h2>
          <p className="section-lead">
            Auswahl aktueller Meldungen mit kurzer Einordnung für Betriebe. Vollständige
            Übersicht:{' '}
            <a
              href="https://www.arbeitsschutz.nrw.de/aktuelles-presse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aktuelles &amp; Presse auf arbeitsschutz.nrw.de
            </a>
            .
          </p>
          <ul className="news-list">
            {aktuelles.map((item) => (
              <li key={item.url} className="news-item">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-title"
                >
                  {item.title}
                </a>
                <p className="news-text">{item.text}</p>
                <p className="news-betrieb">
                  <span className="news-betrieb-label">Für Betriebe</span>
                  {item.betrieb}
                </p>
                {item.branche && (
                  item.brancheHref ? (
                    <Link href={item.brancheHref} className="news-branche-tag news-branche-tag-link">
                      {item.branche} – Guide →
                    </Link>
                  ) : (
                    <span className="news-branche-tag">{item.branche}</span>
                  )
                )}
                <p className="news-meta-row">
                  <span className="news-meta">Quelle: offizielle Meldung · {item.date} · </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-link"
                  >
                    Weiterlesen →
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-section">
          <h2>Informationen und Dienste im Überblick</h2>
          <p className="section-lead">
            Vertiefende Informationen stehen auf den jeweiligen offiziellen Seiten — dieses
            Portal strukturiert den Einstieg.
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
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external"
                  >
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
