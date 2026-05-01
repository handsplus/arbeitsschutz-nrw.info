import { FaqStructuredData } from '@/components/FaqStructuredData';
import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';
import { portalFaqs } from '@/lib/faqContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/faq',
  title: 'FAQ Arbeitsschutz',
  description:
    'Kurzantworten zu Arbeitsschutz, Unterweisung, Beschwerde, Unfall, DGUV und Gefährdungsbeurteilung in NRW – mit Link zum offiziellen FAQ der Arbeitsschutzverwaltung NRW. Privates Informationsportal.',
  keywords: [
    'FAQ Arbeitsschutz',
    'Arbeitsschutz Fragen',
    'Unterweisung Arbeitsschutz',
    'Arbeitsschutzbeschwerde NRW',
    'Arbeitsunfall was tun',
  ],
});

export default function FAQPage() {
  return (
    <>
      <FaqStructuredData />
      <div className="container">
      <div className="page-head">
        <h1>FAQ Arbeitsschutz</h1>
        <p className="page-intro">
          Kurze Antworten auf häufige Fragen zum Arbeitsschutz. Ausführliche
          Informationen und das vollständige FAQ finden Sie auf der offiziellen
          Website der Arbeitsschutzverwaltung NRW.
        </p>
      </div>

      <section className="content-section">
        <h2>Häufige Fragen und Antworten</h2>
        <dl className="faq-list">
          {portalFaqs.map((item) => (
            <div key={item.q} className="faq-item">
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
        <p>
          <a
            href="https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/faq-arbeitsschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Vollständiges FAQ auf arbeitsschutz.nrw.de →
          </a>
          {' '}
          Weitere Informationen für Beschäftigte und Unternehmen (Unfallversicherung, Unfallanzeige):{' '}
          <a href="https://www.dguv.de/" target="_blank" rel="noopener noreferrer">
            dguv.de
          </a>
          .
        </p>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section className="content-section">
        <HandsplusTeaser variant="general" idSuffix="faq" />
      </section>
    </div>
    </>
  );
}
