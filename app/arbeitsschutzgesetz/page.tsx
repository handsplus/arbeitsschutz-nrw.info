import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EmployerStickyCta } from '@/components/EmployerStickyCta';
import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/arbeitsschutzgesetz',
  title: 'Arbeitsschutzgesetz (ArbSchG) & Pflichten',
  description:
    'Arbeitsschutz NRW: Arbeitsschutzgesetz (ArbSchG), Arbeitgeberpflichten, Gefährdungsbeurteilung und Unterweisung – Verweise zum Gesetzestext und zur Arbeitsschutzverwaltung NRW.',
  keywords: [
    'Arbeitsschutz NRW',
    'Arbeitsschutzgesetz',
    'ArbSchG',
    'Gefährdungsbeurteilung',
    'Unterweisung',
    'Arbeitsschutzverwaltung NRW',
    'Pflichten Arbeitgeber',
  ],
});

const primarySources = [
  {
    title: 'Arbeitsschutzgesetz (ArbSchG) – Gesetz im Internet',
    href: 'https://www.gesetze-im-internet.de/arbschg/',
    note: 'Nichtamtliches Inhaltsverzeichnis und Paragraphen (Bundesministerium der Justiz und juris).',
  },
  {
    title: 'Arbeitsschutz erklärt (offiziell, ASV NRW)',
    href: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert',
    note: 'Verständliche Einführung der staatlichen Arbeitsschutzverwaltung NRW.',
  },
  {
    title: 'Arbeitsschutzverwaltung Nordrhein-Westfalen',
    href: 'https://www.arbeitsschutz.nrw.de/',
    note: 'Zentrale offizielle Website für Beratung, Fachthemen, Beschwerde und Anträge in NRW.',
  },
];

export default function ArbeitsschutzgesetzPage() {
  return (
    <>
      <EmployerStickyCta />
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Start', href: '/' },
            { label: 'ArbSchG & Pflichten' },
          ]}
        />
        <div className="page-head">
        <h1>Arbeitsschutzgesetz (ArbSchG) und Pflichten</h1>
        <p className="page-intro">
          Das <strong>Arbeitsschutzgesetz (ArbSchG)</strong> ist Bundesrecht und gilt in ganz Deutschland –
          auch in <strong>Nordrhein-Westfalen</strong>. Es legt u. a. die{' '}
          <strong>Grundpflichten der Arbeitgeberinnen und Arbeitgeber</strong> fest (Schutz von Sicherheit
          und Gesundheit der Beschäftigten). Dazu zählen typischerweise die{' '}
          <strong>Beurteilung der Arbeitsbedingungen</strong> (Gefährdungsbeurteilung),{' '}
          <strong>Unterweisungen</strong> und die Zusammenarbeit mit den zuständigen Stellen. Verbindliche
          Auslegung, Kontrolle im Einzelfall und behördliche Beratung liegen bei den{' '}
          <strong>offiziellen Stellen</strong>, nicht bei diesem Portal.
        </p>
      </div>

      <section className="content-section">
        <h2>Originalquellen und offizielle Informationen</h2>
        <p>
          Für den <strong>vollständigen Gesetzestext</strong> und für <strong>verbindliche Auskünfte</strong>{' '}
          nutzen Sie bitte direkt die folgenden Angebote. Diese Seite ist eine{' '}
          <strong>kurze Orientierung mit Verweisen</strong>.
        </p>
        <ul>
          {primarySources.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="external">
                {item.title}
              </a>{' '}
              – {item.note}
            </li>
          ))}
        </ul>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section className="content-section">
        <h2>Weitere Einstiege auf dieser Website</h2>
        <ul>
          <li>
            <Link href="/arbeitsschutz-erklaert">Arbeitsschutz erklärt</Link> – Akteure, GDA, Überblick
          </li>
          <li>
            <Link href="/fachthemen">Fachthemen A–Z</Link> – u. a. Gefährdungsbeurteilung, Unterweisung,
            Arbeitszeit
          </li>
          <li>
            <Link href="/faq">FAQ Arbeitsschutz</Link> – Kurzantworten mit Link zum offiziellen FAQ der ASV
            NRW
          </li>
          <li>
            <Link href="/beratung">Beratung & Beschwerde</Link> – Hotlines und Formulare der Behörde
          </li>
        </ul>
      </section>

      <section className="content-section">
        <HandsplusTeaser variant="arbeitsschutz" idSuffix="arbschg" />
      </section>
      </div>
    </>
  );
}
