import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { branchenPages } from '@/lib/branchenContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/branchen',
  title: 'Arbeitsschutz nach Branche (NRW)',
  description:
    'Branchen-Guides: Logistik/KEP, Gebäudereinigung, Gastronomie, Bau/SiGeKo – Pflichten, Risiken, ASV NRW. Privates Portal von Health and Safety +.',
  keywords: [
    'Arbeitsschutz Branchen NRW',
    'KEP Arbeitsschutz',
    'Gebäudereinigung Arbeitsschutz',
    'SiGeKo NRW',
  ],
});

export default function BranchenIndexPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Branchen' }]} />
      <div className="page-head">
        <h1>Arbeitsschutz nach Branche (NRW)</h1>
        <p className="page-intro">
          Kurz-Guides für Risikobranchen mit typischen Gefährdungen, Pflichten und
          offiziellen Anlaufstellen. Für die Umsetzung im Betrieb:{' '}
          <Link href="/#portal-navigator-title">NRW-Navigator</Link> oder{' '}
          <Link href="/beratung-handsplus">Erstberatung H&amp;S+</Link>.
        </p>
      </div>

      <div className="card-grid">
        {branchenPages.map((b) => (
          <div key={b.slug} className="card">
            <h2>{b.title}</h2>
            <p>{b.intro.slice(0, 160)}…</p>
            <Link href={`/branchen/${b.slug}`} className="external">
              Branchen-Guide lesen →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
