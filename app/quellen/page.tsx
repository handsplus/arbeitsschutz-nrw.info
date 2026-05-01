import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/quellen',
  title: 'Offizielle Quellen',
  description:
    'Direkte Links zur Arbeitsschutzverwaltung NRW, Aktuelles & Presse, LfGA NRW, KomNet und DGUV – für verbindliche Informationen und Anträge immer die Behördenwebsites nutzen.',
  keywords: [
    'arbeitsschutz.nrw.de',
    'LfGA NRW',
    'KomNet',
    'DGUV',
    'offizielle Quellen Arbeitsschutz',
  ],
});

const sources = [
  {
    title: 'Arbeitsschutzverwaltung Nordrhein-Westfalen',
    url: 'https://www.arbeitsschutz.nrw.de/',
    description:
      'Offizielle Website der staatlichen Arbeitsschutzverwaltung NRW: Arbeitsschutz, Fachthemen, Beratung, Beschwerde, Anträge, Karriere. Aktuelle Pressemitteilungen und Meldungen finden Sie unter „Aktuelles & Presse“ auf derselben Domain.',
  },
  {
    title: 'Aktuelles & Presse (Arbeitsschutz NRW)',
    url: 'https://www.arbeitsschutz.nrw.de/aktuelles-presse',
    description:
      'Chronologische Übersicht zu Kontrollaktionen, Gesetzesvorhaben (z. B. LfGA NRW), Gefahrstoffschutzpreis-Hinweisen und weiteren Meldungen der Arbeitsschutzverwaltung und des Ministeriums.',
  },
  {
    title: 'Landesamt für Gesundheit und Arbeitsschutz NRW (LfGA)',
    url: 'https://www.lfga.nrw.de/',
    description:
      'Landesoberbehörde u. a. für den staatlichen Arbeitsschutz und den öffentlichen Gesundheitsdienst in NRW (u. a. mit Standorten in Bochum und Düsseldorf). Zentrale Anlaufstelle im Zusammenhang mit Anträgen und Fachverfahren.',
  },
  {
    title: 'KomNet – Gut beraten. Gesund arbeiten.',
    url: 'https://www.komnet.nrw.de/',
    description:
      'Angebot des LfGA NRW: durchsuchbare Dialoge zu Sicherheit und Gesundheit bei der Arbeit sowie die Möglichkeit, eigene Fragen an Expertinnen und Experten zu stellen (kostenfrei).',
  },
  {
    title: 'Deutsche Gesetzliche Unfallversicherung (DGUV)',
    url: 'https://www.dguv.de/',
    description:
      'Spitzenverband der Berufsgenossenschaften und Unfallkassen. Informationen zu Prävention, Versicherungsschutz, Arbeitsunfällen, Berufskrankheiten, Rehabilitation sowie Infoline und Services für Unternehmen und Beschäftigte.',
  },
];

export default function QuellenPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Offizielle Quellen</h1>
        <p className="page-intro">
          Die Inhalte dieses Informationsportals beziehen sich auf die folgenden
          offiziellen Websites. Für verbindliche Auskünfte, Anträge und Beratung
          wenden Sie sich bitte direkt an diese Stellen. Schwerpunkte: Website der
          Arbeitsschutzverwaltung NRW (inkl. Aktuelles &amp; Presse), das Landesamt
          LfGA NRW, KomNet und die Deutsche Gesetzliche Unfallversicherung (DGUV).
        </p>
      </div>

      <section className="content-section">
        <h2>Offizielle Websites</h2>
        <div className="card-grid">
          {sources.map((source) => (
            <div key={source.url} className="card">
              <h3>{source.title}</h3>
              <p>{source.description}</p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                Website besuchen →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Hinweis</h2>
        <p>
          arbeitsschutz-nrw.info ist ein privates Informationsportal von
          Health and Safety + und nicht Teil der Arbeitsschutzverwaltung
          Nordrhein-Westfalen, des LfGA NRW, von KomNet oder der DGUV. Es ersetzt
          weder die offiziellen Websites noch die Beratungsangebote der zuständigen
          Stellen.
        </p>
      </section>
    </div>
  );
}
