import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';

export const metadata = { title: 'Anträge, Formulare & Hinweise' };

export default function AntraegeFormularePage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Anträge, Formulare & Hinweise</h1>
        <p className="page-intro">
          Die Arbeitsschutzverwaltung Nordrhein-Westfalen stellt Anträge, Formulare
          und Hinweise für Genehmigungen, Anzeigen und Meldungen bereit. Hier
          finden Sie eine Übersicht und den direkten Link zum offiziellen Bereich.
        </p>
      </div>

      <section className="content-section">
        <h2>Was Sie dort finden</h2>
        <ul>
          <li>Anträge und Formulare für Genehmigungen (z. B. nach Arbeitsschutz- oder Strahlenschutzrecht)</li>
          <li>Anzeigen und Meldungen an die Behörde</li>
          <li>Musterformulare und Hinweise zu Verfahren</li>
          <li>Zuständigkeiten und Ansprechpartner</li>
        </ul>
        <p>
          Alle aktuellen Formulare und Verfahrenshinweise werden ausschließlich auf
          der offiziellen Website der Arbeitsschutzverwaltung NRW bereitgestellt.
          Für verbindliche Auskünfte wenden Sie sich bitte an die dort genannten
          Stellen.
        </p>
        <p>
          <a
            href="https://www.arbeitsschutz.nrw.de/antraege-formulare-hinweise"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Zu Anträgen, Formularen & Hinweisen auf arbeitsschutz.nrw.de →
          </a>
        </p>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section className="content-section">
        <HandsplusTeaser variant="arbeitsschutz" idSuffix="antraege" />
      </section>
    </div>
  );
}
