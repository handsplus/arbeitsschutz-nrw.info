import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/publikationen',
  title: 'Publikationen',
  description:
    'Hinweis auf Broschüren, Faltblätter, Plakate und Berichte der Arbeitsschutzverwaltung NRW – direkt zur offiziellen Publikationsübersicht.',
  keywords: ['Publikationen Arbeitsschutz NRW', 'Broschüre Arbeitsschutz', 'Plakate Arbeitssicherheit'],
});

export default function PublikationenPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Publikationen</h1>
        <p className="page-intro">
          Broschüren, Faltblätter, Plakate und Berichte der Arbeitsschutzverwaltung
          Nordrhein-Westfalen. Die Liste wird auf der offiziellen Website fortlaufend
          ergänzt; aktuelle Hinweise finden Sie auch unter{' '}
          <a href="https://www.arbeitsschutz.nrw.de/aktuelles-presse" target="_blank" rel="noopener noreferrer">
            Aktuelles &amp; Presse
          </a>
          .
        </p>
      </div>

      <section className="content-section">
        <h2>Angebot der Arbeitsschutzverwaltung NRW</h2>
        <ul>
          <li>Broschüren und Faltblätter zu Arbeitsschutzthemen</li>
          <li>Plakate für den Betrieb (z. B. Erste Hilfe, Fluchtwege)</li>
          <li>Jahresberichte und Statistik der ASV NRW</li>
          <li>Aktuelles und Presse</li>
        </ul>
        <p>
          <a
            href="https://www.arbeitsschutz.nrw.de/fachthemen-publikationen/publikationen"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Zu den Publikationen auf arbeitsschutz.nrw.de →
          </a>
        </p>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section className="content-section">
        <HandsplusTeaser variant="general" idSuffix="publikationen" />
      </section>
    </div>
  );
}
