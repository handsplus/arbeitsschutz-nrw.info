import Link from 'next/link';
import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';

export const metadata = { title: 'Beratung & Beschwerde' };

export default function BeratungPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Beratung & Beschwerde</h1>
        <p className="page-intro">
          In diesem Bereich finden Sie die wichtigsten Unterstützungsangebote aus
          dem Arbeitsschutz und der Produktsicherheit. Die eigentliche Beratung,
          Beschwerdeannahme und Meldungen erfolgen über die offiziellen Dienste
          der Arbeitsschutzverwaltung NRW, KomNet und der Deutschen Gesetzlichen
          Unfallversicherung (DGUV).
        </p>
      </div>

      <section className="content-section">
        <h2>Serviceangebote im Überblick</h2>
        <p>
          Je nach Anliegen haben Sie verschiedene Möglichkeiten: Arbeitsschutzverwaltung
          NRW (telefonische Beratung, Online-Beschwerde), KomNet (Fragen an
          Expertinnen und Experten), DGUV (Infoline zu Unfallversicherung und
          Prävention), Meldung gefährlicher Produkte, Mobbing-Beratung.
        </p>
        <p>
          <strong>Betriebliche Betreuung durch ein Beratungsunternehmen:</strong>{' '}
          Sie suchen professionelle Unterstützung z. B. bei Gefährdungsbeurteilung,
          Brandschutz oder SiGeKo?{' '}
          <Link href="/beratung-handsplus">Health and Safety + berät Unternehmen in NRW</Link>{' '}
          – mit kostenloser Erstberatung.
        </p>
      </section>

      <section className="content-section">
        <h2>Infoline der Gesetzlichen Unfallversicherung (DGUV)</h2>
        <p>
          Unter der <strong>kostenfreien Nummer 0800 6050404</strong> erreichen
          Sie die Infoline der Deutschen Gesetzlichen Unfallversicherung. Dort
          erhalten Sie Auskünfte zu Versicherungsschutz, Arbeitsunfällen,
          Wegeunfällen, Berufskrankheiten, Unfallanzeige, Prävention und zur
          zuständigen Berufsgenossenschaft bzw. Unfallkasse.
        </p>
        <p>
          <a href="https://www.dguv.de/" target="_blank" rel="noopener noreferrer" className="external">
            DGUV – Deutsche Gesetzliche Unfallversicherung →
          </a>
        </p>
        <SourceLink href="https://www.dguv.de/" label="DGUV" />
      </section>

      <section className="content-section">
        <h2>Arbeitsschutzberatung</h2>
        <p>
          Sie haben eine Frage zu Sicherheit und Gesundheit am Arbeitsplatz oder
          müssen eine Meldung an die Arbeitsschutzverwaltung machen? Die
          Arbeitsschutzverwaltung NRW bietet eine <strong>telefonische
          Erstberatung</strong> und informiert über weitere Ansprechpartner
          (z. B. nach Bezirken oder Themen).
        </p>
        <p>
          <strong>Servicehotline (Erstberatung):</strong>{' '}
          <a href="tel:0234416927474">0234 41692 7474</a>
          {' '}
          (Montag bis Donnerstag 9:00–15:00 Uhr, Freitag 9:00–14:00 Uhr). Die
          aktuellen Zeiten und Themen finden Sie auf der offiziellen Seite zur
          telefonischen Erstberatung.
        </p>
        <p>
          <a
            href="https://www.arbeitsschutz.nrw.de/telefonische-erstberatung"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Telefonische Erstberatung – Informationen und Kontakt →
          </a>
          {' · '}
          <a
            href="https://www.arbeitsschutz.nrw.de/beratung-und-beschwerde/arbeitsschutzberatung"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Arbeitsschutzberatung – Übersicht →
          </a>
        </p>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section id="beschwerde" className="content-section">
        <h2>Arbeitsschutzbeschwerde</h2>
        <p>
          Sie möchten sich über <strong>unzumutbare Arbeitsbedingungen</strong>{' '}
          oder Verstöße gegen Arbeitsschutzvorschriften beschweren? Dann können
          Sie das <strong>Online-Formular</strong> der Arbeitsschutzverwaltung
          NRW nutzen. Ihre Angaben werden vertraulich behandelt.
        </p>
        <p className="notice">
          <strong>Hinweis:</strong> Themen des Arbeitsrechts (z. B.
          Arbeitsverträge, Urlaubsansprüche, Entgeltfortzahlung im Krankheitsfall)
          fallen nicht in die Zuständigkeit der Arbeitsschutzverwaltung
          Nordrhein-Westfalen. Dafür gibt es andere Beratungsstellen (z. B. auf
          der offiziellen Seite unter „Weitere Beratungsangebote“).
        </p>
        <p>
          <strong>Arbeitsschutztelefon (Beschwerden):</strong>{' '}
          <a href="tel:02118553311">0211 855 3311</a>
          {' '}
          (Montag bis Freitag 8:00–18:00 Uhr). Beschwerden können Sie auch über
          das Online-Formular einreichen; beides ist nach Angaben der Behörde
          anonym nutzbar.
        </p>
        <p>
          <a
            href="https://www.arbeitsschutz.nrw.de/beratung-beschwerde/arbeitsschutzbeschwerde"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Arbeitsschutzbeschwerde – Informationen und Online-Formular →
          </a>
        </p>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section className="content-section">
        <h2>Mobbing am Arbeitsplatz</h2>
        <p>
          Bei Konflikten und Mobbing am Arbeitsplatz bietet die
          Arbeitsschutzverwaltung NRW Informationen und Beratungsmöglichkeiten.
          Psychische Belastungen wie Mobbing können Gegenstand von
          Gefährdungsbeurteilungen und Arbeitsschutzmaßnahmen sein.
        </p>
        <p>
          <strong>MobbingLine NRW:</strong>{' '}
          <a href="tel:02118371911">0211 837 1911</a>
          {' '}
          (Montag bis Donnerstag 16:00–20:00 Uhr) – vertrauliche Erstberatung für
          Betroffene und Arbeitgeber.
        </p>
        <p>
          <a
            href="https://www.arbeitsschutz.nrw.de/beratung-beschwerde/arbeitsschutzberatung/mobbingline"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            MobbingLine NRW – Informationen →
          </a>
          {' · '}
          <a
            href="https://www.arbeitsschutz.nrw.de/beratung-und-beschwerde/arbeitsschutzberatung"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Arbeitsschutzberatung – Übersicht →
          </a>
        </p>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section className="content-section">
        <h2>KomNet – Fragen an Expertinnen und Experten</h2>
        <p>
          Bei <strong>KomNet</strong> können Sie Ihre Fragen zur Sicherheit und
          Gesundheit bei der Arbeit stellen und erhalten qualitätsgesicherte,
          praxisnahe Antworten von Fachleuten. Zusätzlich können Sie in tausenden
          bereits beantworteten Dialogen recherchieren. Das Angebot ist
          kostenfrei; für einige Funktionen ist eine Registrierung nötig.
        </p>
        <p>
          <a href="https://www.komnet.nrw.de/" target="_blank" rel="noopener noreferrer" className="external">
            KomNet – Gut beraten. Gesund arbeiten. →
          </a>
        </p>
        <SourceLink href="https://www.komnet.nrw.de/" label="KomNet NRW" />
      </section>

      <section id="produkte" className="content-section">
        <h2>Gefährliche Produkte melden</h2>
        <p>
          Der Schutzhelm fühlt sich verdächtig dünn an oder der Akkuschrauber
          qualmt plötzlich? Wenn Sie den Verdacht haben, dass ein Produkt nicht
          sicher ist, sollten Sie:
        </p>
        <ol>
          <li><strong>Zunächst den Produktverantwortlichen</strong> (Hersteller, Händler) informieren.</li>
          <li><strong>Danach die Marktüberwachung</strong> der Arbeitsschutzverwaltung NRW einschalten – dort können Sie unsichere Produkte melden.</li>
        </ol>
        <p>
          Die genauen Verfahren, Ansprechpartner und Meldemöglichkeiten (auch für
          Wirtschaftsakteure) finden Sie auf der offiziellen Website.
        </p>
        <p>
          <a
            href="https://www.arbeitsschutz.nrw.de/beratung-beschwerde/gefaehrliche-produkte-melden"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Gefährliche Produkte melden – Arbeitsschutzverwaltung NRW →
          </a>
        </p>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section className="content-section">
        <h2>Weitere Beratungsangebote</h2>
        <p>
          Auf der offiziellen Website finden Sie weitere Kontaktadressen – z. B.
          zu Themen des Arbeitsrechts (Tarifverträge, Minijobs), zur
          Produktsicherheit oder zu anderen von Land und Bund geförderten
          Beratungsangeboten für Beschäftigte, Privatpersonen und Unternehmen.
        </p>
        <p>
          <a
            href="https://www.arbeitsschutz.nrw.de/beratung-beschwerde/weitere-beratungsangebote"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Weitere Beratungsangebote auf arbeitsschutz.nrw.de →
          </a>
        </p>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section className="content-section">
        <HandsplusTeaser variant="general" idSuffix="beratung" />
      </section>
    </div>
  );
}
