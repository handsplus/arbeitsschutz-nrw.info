import { SourceLink } from '@/components/SourceLink';

export const metadata = { title: 'Landesweite Überwachungsaktionen' };

const aktionen = [
  {
    title: 'Faire Arbeit in der Fleischindustrie',
    text: 'Landesweite Überwachung zur Einhaltung von Arbeitsschutz und fairen Arbeitsbedingungen in der Fleischindustrie.',
    url: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/landesweite-ueberwachungsaktionen',
  },
  {
    title: 'Friseurbranche',
    text: 'Schwerpunktaktionen in Friseurbetrieben zu Sicherheit und Gesundheit (z. B. Gefahrstoffe, Hautschutz, Arbeitszeiten).',
    url: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/landesweite-ueberwachungsaktionen',
  },
  {
    title: 'Gebäudereinigung',
    text: 'Überwachung und Beratung in der Gebäudereinigungsbranche zu Arbeitsschutz und Arbeitsbedingungen.',
    url: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/landesweite-ueberwachungsaktionen',
  },
  {
    title: 'Sonn- und Feiertagsarbeit',
    text: 'Kontrollen und Aufklärung zu den Voraussetzungen und Regelungen für Sonn- und Feiertagsarbeit.',
    url: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/landesweite-ueberwachungsaktionen',
  },
];

export default function UeberwachungsaktionenPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Landesweite Überwachungsaktionen</h1>
        <p className="page-intro">
          Politische Anlässe oder besondere Problemstellungen im Arbeitsschutz können
          es notwendig machen, dass die staatliche Arbeitsschutzverwaltung kurzfristig
          und zielgerichtet handelt. Sie führt dann landesweit zeitlich begrenzte
          Überwachungsaktionen durch – unter anderem in Risikobranchen.
        </p>
      </div>

      <section className="content-section">
        <h2>Beispiele für Überwachungsaktionen</h2>
        <p>
          Die folgenden Themen sind oder waren Schwerpunkte landesweiter Aktionen.
          Aktuelle Schwerpunkte, Ergebnisse und Berichte finden Sie auf der
          offiziellen Website.
        </p>
        <ul className="action-list">
          {aktionen.map((item) => (
            <li key={item.title} className="card card-inline">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="external">
                Mehr auf arbeitsschutz.nrw.de →
              </a>
            </li>
          ))}
        </ul>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/landesweite-ueberwachungsaktionen" label="Arbeitsschutzverwaltung NRW – Landesweite Überwachungsaktionen" />
      </section>
    </div>
  );
}
