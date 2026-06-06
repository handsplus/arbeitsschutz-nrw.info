import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { bezirkeNrw, zentraleAsv } from '@/lib/bezirkeContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/bezirke',
  title: 'Bezirke & Zuständigkeit NRW',
  description:
    'Arbeitsschutz NRW: Bezirksregierungen, zentrale Erstberatung und Beschwerde – Orientierung zur Zuständigkeit in Nordrhein-Westfalen.',
  keywords: [
    'Arbeitsschutz Bezirk NRW',
    'Bezirksregierung Arbeitsschutz',
    'Arbeitsschutzbeschwerde NRW Zuständigkeit',
  ],
});

export default function BezirkePage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Bezirke NRW' }]} />
      <div className="page-head">
        <h1>Bezirke &amp; Zuständigkeit in NRW</h1>
        <p className="page-intro">
          Der Vollzug des Arbeitsschutzes liegt bei den{' '}
          <strong>Bezirksregierungen</strong>. Für die Erstorientierung und
          Beschwerden steht die zentrale Erstberatung der Arbeitsschutzverwaltung
          NRW zur Verfügung — sie verweist bei Bedarf an den zuständigen Bezirk.
        </p>
      </div>

      <section className="content-section zentrale-asv-card card">
        <h2>Zentrale Erstberatung (landesweit)</h2>
        <p>
          <strong>{zentraleAsv.label}</strong>
          <br />
          Telefon:{' '}
          <a href={zentraleAsv.telHref} className="tel-link">
            {zentraleAsv.phone}
          </a>
        </p>
        <p>
          <a href={zentraleAsv.url} target="_blank" rel="noopener noreferrer" className="external">
            Arbeitsschutzberatung (offiziell) →
          </a>
          {' · '}
          <a
            href={zentraleAsv.beschwerdeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Beschwerde online →
          </a>
        </p>
        <p className="section-note">
          Intern: <Link href="/beratung">Beratung &amp; Beschwerde – Übersicht</Link>
        </p>
      </section>

      <section className="content-section">
        <h2>Bezirksregierungen (Arbeitsschutzdezernate)</h2>
        <p className="section-lead">
          Die folgenden Links führen zu den Arbeitsschutz-Themen der jeweiligen
          Bezirksregierung. Zuständigkeit richtet sich nach Betriebsort — im
          Zweifel zuerst die zentrale Erstberatung anrufen.
        </p>
        <div className="bezirk-grid">
          {bezirkeNrw.map((b) => (
            <div key={b.name} className="card bezirk-card">
              <h3>{b.name}</h3>
              <p className="bezirk-region">{b.region}</p>
              {b.phone && (
                <p>
                  Zentrale: <a href={`tel:${b.phone.replace(/\s/g, '')}`}>{b.phone}</a>
                </p>
              )}
              <a href={b.asvUrl} target="_blank" rel="noopener noreferrer" className="external">
                Arbeitsschutz beim Bezirk →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="employer-cta-compact">
          <strong>Arbeitgeber:</strong> Pflichten nach Branche prüfen —{' '}
          <Link href="/branchen">Branchen-Guides</Link>
          {' · '}
          <Link href="/#portal-navigator-title">NRW-Navigator</Link>
        </div>
      </section>
    </div>
  );
}
