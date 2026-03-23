import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Beratung durch Health and Safety +' };

export default function BeratungHandsplusPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Beratung durch Health and Safety +</h1>
        <p className="page-intro">
          Dieses Informationsportal wird von <strong>Health and Safety +</strong> betrieben.
          Wir unterstützen Unternehmen in NRW und bundesweit in den Bereichen
          Arbeitsschutz, Brandschutz und Managementsysteme – mit kostenloser
          und unverbindlicher Erstberatung.
        </p>
      </div>

      <section className="content-section handsplus-cta">
        <div className="card handsplus-card">
          <h2>Ihre Ansprechpartner: Health and Safety +</h2>
          <p>
            <strong>Arbeitsschutz, Brandschutz und Managementsysteme</strong> –
            professionelle Betreuung gemäß ASiG, DGUV Vorschrift 2 und BauO NRW.
            Von der Gefährdungsbeurteilung über Brandschutzkonzepte bis zu
            Schulungen und SiGeKo auf der Baustelle. Schwerpunkt: Köln und NRW.
          </p>
          <ul>
            <li>Fachkraft für Arbeitssicherheit · Brandschutzbeauftragte · SiGeKo</li>
            <li>Gefährdungsbeurteilung, Unterweisungen, technische Prüfungen</li>
            <li>Managementsysteme (ISO 45001, AMS)</li>
          </ul>
          <div className="handsplus-buttons">
            <a
              href="mailto:kontakt@handsplus.de?subject=Kostenlose%20Erstberatung"
              className="btn btn-primary"
            >
              Kostenlose Erstberatung anfragen
            </a>
            <a
              href="tel:+4915228261619"
              className="btn btn-secondary"
            >
              Jetzt anrufen: 0152 282 61619
            </a>
          </div>
          <p className="handsplus-web">
            <a href="https://www.handsplus.de/" target="_blank" rel="noopener noreferrer">
              www.handsplus.de
            </a>
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Hinweis</h2>
        <p>
          Die offiziellen Beratungs- und Beschwerdeangebote der
          Arbeitsschutzverwaltung NRW, von KomNet und der DGUV bleiben
          unberührt. Health and Safety + ist ein privates Beratungsunternehmen und nicht
          Teil der Behörden.
        </p>
      </section>
    </div>
  );
}
