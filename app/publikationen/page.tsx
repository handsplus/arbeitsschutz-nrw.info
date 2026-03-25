import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';

export const metadata = { title: 'Publikationen' };

export default function PublikationenPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Publikationen</h1>
        <p className="page-intro">
          Broschüren, Faltblätter, Plakate und Berichte der Arbeitsschutzverwaltung
          Nordrhein-Westfalen. Alle aktuellen Publikationen werden auf der
          offiziellen Website bereitgestellt.
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
