import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/ueberwachungsaktionen',
  title: 'Landesweite Überwachungsaktionen',
  description:
    'Schwerpunktaktionen der Arbeitsschutzverwaltung NRW (z. B. Fleischindustrie, Friseurhandwerk, Gebäudereinigung, Feiertagsarbeit) – mit Link zur offiziellen Übersicht.',
  keywords: ['Überwachungsaktion Arbeitsschutz NRW', 'Kontrollaktion Arbeitsschutz', 'ASV NRW Aktionen'],
});

const aktionen = [
  {
    title: 'Kurier-, Express- und Paketbranche (KEP)',
    text: 'Kontrollaktion Mai–August 2025: u. a. 57 Subunternehmen und 225 Zusteller geprüft – teils gravierende Mängel im Arbeitsschutz.',
    url: 'https://www.arbeitsschutz.nrw.de/kontrollaktion-der-paketbranche-teils-gravierende-maengel-im-arbeitsschutz',
  },
  {
    title: 'Gebäudereinigung',
    text: 'Aktionstage September 2025 gegen Schwarzarbeit und illegale Beschäftigung: 146 Betriebe geprüft, in über 80 % Mängel (u. a. Arbeits- und Gesundheitsschutz).',
    url: 'https://www.arbeitsschutz.nrw.de/gemeinsam-gegen-schwarzarbeit-und-illegale-beschaeftigung-der-gebaeudereinigung',
  },
  {
    title: 'Friseurbranche',
    text: 'Gemeinsame Kontrollaktion 2024: über 400 Salons und Barbershops geprüft – gravierende Mängel und illegale Beschäftigung festgestellt.',
    url: 'https://www.arbeitsschutz.nrw.de/kontrollen-der-friseurbranche-gravierende-maengel-und-illegale-beschaeftigung-aufgedeckt',
  },
  {
    title: 'Faire Arbeit in der Fleischindustrie',
    text: 'Landesweite Überwachung zur Einhaltung von Arbeitsschutz und fairen Arbeitsbedingungen in der Fleischindustrie.',
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

      <section className="content-section">
        <HandsplusTeaser variant="sigeko" idSuffix="ueberwachung" />
      </section>
    </div>
  );
}
