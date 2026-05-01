import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/fachthemen',
  title: 'Fachthemen von A–Z',
  description:
    'Themenbereiche vom Arbeitsschutz in NRW: Arbeitszeit, Gefahrstoffe, Baustellen, Mutterschutz, KomNet und DGUV – Verweise auf die offiziellen Fachthemen der Arbeitsschutzverwaltung NRW.',
  keywords: [
    'Fachthemen Arbeitsschutz',
    'Arbeitsschutz NRW Themen',
    'KomNet',
    'Gefährdungsbeurteilung',
    'Baustelle Arbeitsschutz',
  ],
});

const kategorien = [
  {
    title: 'Anlagen, Betrieb & Produkte',
    topics: [
      'Anlagen- und Betriebssicherheit',
      'Druckbehälter, Aufzüge, Explosionsschutz',
      'Sichere Benutzung von Arbeitsmitteln',
      'Prüfungen (Prüffristen, prüfende Personen)',
      'Persönliche Schutzausrüstung (PSA)',
      'Produktsicherheit, Maschinenverordnung',
      'Sprengstoffe, Pyrotechnik',
    ],
    desc: 'Technische Sicherheit, Arbeitsmittel, Prüfpflichten und sichere Produkte.',
    komnet: 'https://www.komnet.nrw.de/',
  },
  {
    title: 'Gefahrstoffe & Chemikalien',
    topics: [
      'Gefahrstoffverordnung, Chemikaliensicherheit',
      'Einstufung, Kennzeichnung, Sicherheitsdatenblatt',
      'Lagerung von Gefahrstoffen',
      'Schutzmaßnahmen, Grenzwerte',
      'Biostoffe, Biostoffverordnung',
    ],
    desc: 'Umgang mit Gefahrstoffen, Schutzmaßnahmen, Biostoffe am Arbeitsplatz.',
    komnet: 'https://www.komnet.nrw.de/',
  },
  {
    title: 'Arbeitszeit & Arbeitsbedingungen',
    topics: [
      'Arbeitszeit, Pausen, Ruhezeiten',
      'Nachtarbeit, Schichtarbeit',
      'Sonn- und Feiertagsarbeit',
      'Sozialvorschriften im Straßenverkehr, Fahrtenschreiber',
      'Psychische Belastung, Mobbing',
    ],
    desc: 'Arbeitszeitrecht, Ruhepausen, besondere Arbeitsformen und psychische Belastungen.',
    komnet: 'https://www.komnet.nrw.de/',
  },
  {
    title: 'Arbeitsplatz & Gesundheit',
    topics: [
      'Arbeitsstätten, Arbeitsplatzgestaltung',
      'Bildschirmarbeit, Homeoffice, Telearbeit',
      'Baustellen, Gerüste, Absturzsicherung',
      'Raumklima, Lüftung, Brandschutz',
      'Ergonomie, Heben und Tragen',
      'Lärm, physikalische Belastungen',
      'Strahlenschutz (ionisierend, nichtionisierend)',
    ],
    desc: 'Gestaltung von Arbeitsplätzen, Gesundheitsschutz, Ergonomie und Umgebungsbedingungen.',
    komnet: 'https://www.komnet.nrw.de/',
  },
  {
    title: 'Betriebliche Organisation',
    topics: [
      'Gefährdungsbeurteilung',
      'Arbeitsschutzorganisation, Arbeitsschutzmanagement',
      'Fachkraft für Arbeitssicherheit, Betriebsarzt',
      'Sicherheitsbeauftragte, Unterweisung',
      'Erste Hilfe, Brandschutzbeauftragte',
      'Arbeitnehmerbeteiligung',
    ],
    desc: 'Gefährdungsbeurteilung, Organisation des Arbeitsschutzes im Betrieb, Beauftragte.',
    komnet: 'https://www.komnet.nrw.de/',
  },
  {
    title: 'Besonders schutzbedürftige Personengruppen',
    topics: [
      'Jugendarbeitsschutz, Auszubildende',
      'Mutterschutz (werdende und stillende Mütter)',
      'Beschäftigte mit Behinderung',
      'Ältere Beschäftigte, demografischer Wandel',
    ],
    desc: 'Besondere Regelungen für Jugendliche, Schwangere, stillende Mütter und andere Personengruppen.',
    komnet: 'https://www.komnet.nrw.de/',
  },
  {
    title: 'Gesundheit & Vorsorge',
    topics: [
      'Arbeitsmedizinische Vorsorge',
      'Impfungen, Erste Hilfe',
      'Berufskrankheiten',
    ],
    desc: 'Vorsorgeuntersuchungen, arbeitsmedizinische Betreuung, Berufskrankheiten.',
    komnet: 'https://www.komnet.nrw.de/',
  },
  {
    title: 'Weitere Themen',
    topics: [
      'Arbeitsschutz im digitalen Wandel',
      'Arbeitsunfälle, Unfallmeldung',
      'Heimarbeit',
      'Transportsicherheit, Gefahrgut',
    ],
    desc: 'Weitere Fachthemen der Arbeitsschutzverwaltung und KomNet.',
    komnet: 'https://www.komnet.nrw.de/',
  },
];

const fachthemenAZ = [
  'Anlagen- und Betriebssicherheit', 'Arbeitsmedizinische Vorsorge', 'Arbeitsstätten', 'Arbeitszeit',
  'Baustellen', 'Berufskrankheiten', 'Biostoffverordnung', 'Chemikaliensicherheit', 'Gefahrstoffverordnung',
  'Gefährdungsbeurteilung', 'Heimarbeit', 'Homeoffice', 'Jugendarbeitsschutz', 'Mutterschutz',
  'Persönliche Schutzausrüstung (PSA)', 'Physikalische Belastungen', 'Produktsicherheit', 'Psychische Belastung',
  'Strahlenschutz', 'Transportsicherheit',
];

export default function FachthemenPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Fachthemen von A–Z</h1>
        <p className="page-intro">
          Hier finden Sie Fachinformationen zum Arbeitsschutz nach Themenbereichen
          strukturiert. Die vollständigen Inhalte, Rechtsauskünfte und Merkblätter
          bieten die Arbeitsschutzverwaltung NRW und KomNet. Bei KomNet können
          Sie zudem eigene Fragen an Expertinnen und Experten stellen.
        </p>
      </div>

      <section className="content-section">
        <h2>Nach Kategorien</h2>
        <p className="section-lead">
          Die folgenden Kategorien orientieren sich an den Themenbereichen von
          KomNet und der Arbeitsschutzverwaltung NRW. Klicken Sie auf die Links,
          um auf den offiziellen Seiten zu suchen oder sich beraten zu lassen.
        </p>
        <div className="topic-categories">
          {kategorien.map((kat) => (
            <div key={kat.title} className="card topic-card">
              <h3>{kat.title}</h3>
              <p className="topic-desc">{kat.desc}</p>
              <ul>
                {kat.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a href={kat.komnet} target="_blank" rel="noopener noreferrer" className="external">
                Themen bei KomNet durchsuchen →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Fachthemen alphabetisch (Auswahl)</h2>
        <p>
          Eine Auswahl wichtiger Stichworte. Ausführliche Informationen zu jedem
          Thema finden Sie auf der offiziellen Website und bei KomNet.
        </p>
        <ul className="topic-az">
          {fachthemenAZ.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/fachthemen-publikationen/fachthemen-von-z" label="Arbeitsschutzverwaltung NRW – Fachthemen" />
      </section>

      <section className="content-section">
        <h2>KomNet – Fragen stellen & Dialoge nutzen</h2>
        <p>
          Unter <strong>KomNet</strong> (Landesamt für Gesundheit und
          Arbeitsschutz NRW) können Sie tausende qualitätsgesicherte Dialoge zu
          Sicherheit und Gesundheit bei der Arbeit durchsuchen oder selbst eine
          Frage stellen. Die Antworten kommen von Expertinnen und Experten aus
          Arbeitsschutz und Arbeitsmedizin. Das Angebot ist kostenfrei.
        </p>
        <p>
          <a href="https://www.komnet.nrw.de/" target="_blank" rel="noopener noreferrer" className="external">
            KomNet – Gut beraten. Gesund arbeiten. →
          </a>
        </p>
        <SourceLink href="https://www.komnet.nrw.de/" label="KomNet NRW" />
      </section>

      <section className="content-section">
        <h2>Prävention & Unfallversicherung (DGUV)</h2>
        <p>
          Die <strong>Deutsche Gesetzliche Unfallversicherung (DGUV)</strong> und
          ihre Mitglieder (Berufsgenossenschaften, Unfallkassen) bieten
          umfangreiche Informationen zu Prävention, DGUV-Vorschriften und
          Regelwerk, Arbeitsunfällen, Berufskrankheiten und Rehabilitation.
          Themen A–Z, Kampagnen und Publikationen finden Sie auf dguv.de.
        </p>
        <p>
          <a href="https://www.dguv.de/de/praevention/index.jsp" target="_blank" rel="noopener noreferrer" className="external">
            DGUV – Prävention →
          </a>
          {' · '}
          <a href="https://www.dguv.de/de/themen-a-z/index.jsp" target="_blank" rel="noopener noreferrer" className="external">
            DGUV – Themen A–Z →
          </a>
        </p>
        <SourceLink href="https://www.dguv.de/" label="DGUV" />
      </section>

      <section className="content-section">
        <HandsplusTeaser variant="schulungen" idSuffix="fachthemen" />
      </section>
    </div>
  );
}
