import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EmployerStickyCta } from '@/components/EmployerStickyCta';
import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';
import { branchenPages, getAllBrancheSlugs, getBrancheBySlug } from '@/lib/branchenContent';
import { pageMetadata } from '@/lib/seo';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllBrancheSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const page = getBrancheBySlug(params.slug);
  if (!page) return {};
  return pageMetadata({
    path: `/branchen/${page.slug}`,
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords,
  });
}

export default function BranchePage({ params }: Props) {
  const page = getBrancheBySlug(params.slug);
  if (!page) notFound();

  return (
    <>
      <EmployerStickyCta />
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Start', href: '/' },
            { label: 'Branchen', href: '/branchen' },
            { label: page.title },
          ]}
        />
        <div className="page-head">
          <h1>{page.h1}</h1>
          <p className="page-intro">{page.intro}</p>
        </div>

        {page.aktuell && (
          <section className="content-section branche-aktuell">
            <h2>Aktuell aus der Arbeitsschutzverwaltung</h2>
            <p className="news-text">{page.aktuell.text}</p>
            <a
              href={page.aktuell.url}
              target="_blank"
              rel="noopener noreferrer"
              className="external"
            >
              {page.aktuell.title} →
            </a>
          </section>
        )}

        <section className="content-section">
          <h2>Typische Gefährdungen</h2>
          <ul>
            {page.risks.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        <section className="content-section">
          <h2>Pflichten im Überblick (Arbeitgeber)</h2>
          <ul>
            {page.pflichten.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="section-note">
            Verbindliche Einzelfallauskünfte:{' '}
            <a href="tel:0234416927474">ASV NRW 0234 41692 7474</a> oder{' '}
            <a href="https://www.komnet.nrw.de/" target="_blank" rel="noopener noreferrer">
              KomNet
            </a>
            .
          </p>
        </section>

        <section className="content-section">
          <h2>Offizielle Anlaufstellen</h2>
          <ul className="link-action-list">
            {page.officialLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="external"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
        </section>

        <section className="content-section">
          <h2>Weiter auf diesem Portal</h2>
          <ul>
            {page.internalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        {page.specialtyUrl && page.specialtyLabel && (
          <section className="content-section">
            <p className="specialty-link-card">
              Spezial-Angebot H&amp;S+:{' '}
              <a href={page.specialtyUrl} target="_blank" rel="noopener noreferrer">
                {page.specialtyLabel} ↗
              </a>
            </p>
          </section>
        )}

        <section className="content-section">
          <HandsplusTeaser variant={page.handsplusVariant} idSuffix={page.slug} />
        </section>
      </div>
    </>
  );
}