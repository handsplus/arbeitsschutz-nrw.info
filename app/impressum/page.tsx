import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Impressum' };

export default function ImpressumPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Impressum</h1>
      </div>

      <section className="content-section">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>Health and Safety +</strong>
          <br />
          Barcelona-Allee 12
          <br />
          51103 Köln
        </p>
        <p>
          E-Mail: <a href="mailto:kontakt@handsplus.de">kontakt@handsplus.de</a>
          <br />
          Telefon: <a href="tel:+4915228261619">0152 282 61619</a>
          <br />
          Kontakt: <a href="https://www.handsplus.de/kontakt" target="_blank" rel="noopener noreferrer">www.handsplus.de/kontakt</a>
        </p>
      </section>

      <section className="content-section">
        <h2>Anbieter dieses Portals</h2>
        <p>
          Das Informationsportal <strong>arbeitsschutz-nrw.info</strong> wird von
          Health and Safety + (handsplus.de) betrieben. Es dient der Orientierung
          zum Arbeitsschutz in NRW und verweist auf offizielle Quellen; eine eigene
          inhaltliche Aufarbeitung findet hier nicht statt. Zugleich weist es auf die
          Beratungsleistungen von Health and Safety + hin. Weitere
          Informationen zum Unternehmen und zu Leistungen:{' '}
          <a href="https://www.handsplus.de/" target="_blank" rel="noopener noreferrer">
            www.handsplus.de
          </a>
          .
        </p>
      </section>

      <section className="content-section">
        <h2>Hinweis zu offiziellen Stellen</h2>
        <p>
          Dieses Portal ist ein privates Informationsangebot und nicht die
          offizielle Website der Arbeitsschutzverwaltung Nordrhein-Westfalen, von
          KomNet oder der DGUV. Offizielle Behörden- und Beratungsangebote
          finden Sie unter{' '}
          <a href="https://www.arbeitsschutz.nrw.de/" target="_blank" rel="noopener noreferrer">
            arbeitsschutz.nrw.de
          </a>
          ,{' '}
          <a href="https://www.komnet.nrw.de/" target="_blank" rel="noopener noreferrer">
            komnet.nrw.de
          </a>{' '}
          und{' '}
          <a href="https://www.dguv.de/" target="_blank" rel="noopener noreferrer">
            dguv.de
          </a>
          .
        </p>
      </section>

      <section className="content-section">
        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine
          Gewähr übernommen. Verbindliche Auskünfte erteilen die zuständigen
          offiziellen Stellen.
        </p>
      </section>

      <section className="content-section">
        <h2>Haftung für Links</h2>
        <p>
          Dieses Angebot enthält Links zu externen Websites. Für die Inhalte
          der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
          Zum Zeitpunkt der Verlinkung wurden keine rechtswidrigen Inhalte
          festgestellt.
        </p>
      </section>
    </div>
  );
}
