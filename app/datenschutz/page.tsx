import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/datenschutz',
  title: 'Datenschutz',
  description:
    'Datenschutzerklärung für arbeitsschutz-nrw.info: Verantwortliche Stelle Health and Safety +, Hosting, lokale Speicherung des Cookie-Hinweises, externe Links.',
  keywords: ['Datenschutz', 'DSGVO', 'arbeitsschutz-nrw.info'],
});

export default function DatenschutzPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Datenschutz</h1>
        <p className="page-intro">
          Informationen zur Verarbeitung personenbezogener Daten auf diesem
          Informationsportal (arbeitsschutz-nrw.info). Betreiber ist Health and
          Safety + (handsplus.de).
        </p>
      </div>

      <section className="content-section">
        <h2>Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
          der DSGVO ist der Betreiber des Portals: <strong>Health and Safety +</strong>.
          Kontakt:{' '}
          <a href="https://www.handsplus.de/kontakt" target="_blank" rel="noopener noreferrer">
            www.handsplus.de/kontakt
          </a>
          ,{' '}
          <a href="mailto:kontakt@handsplus.de">kontakt@handsplus.de</a>.
        </p>
      </section>

      <section className="content-section">
        <h2>Erhebung und Nutzung von Daten</h2>
        <p>
          Dieses Informationsportal kann weitgehend ohne Angabe personenbezogener
          Daten genutzt werden. Soweit auf unseren Seiten personenbezogene Daten
          (z. B. Name, E-Mail) erhoben werden, erfolgt dies nur im Rahmen der
          gesetzlichen Bestimmungen oder mit Ihrer Einwilligung. Eine
          Weitergabe an Dritte zu Werbezwecken erfolgt nicht.
        </p>
      </section>

      <section className="content-section">
        <h2>Cookie-Hinweis und lokale Speicherung</h2>
        <p>
          Beim ersten Besuch kann ein Hinweis zu Cookies eingeblendet werden.
          Ihre Auswahl (z. B. Akzeptieren oder Ablehnen) wird im Browser lokal
          gespeichert (technisch notwendig für die Anzeige des Hinweises), damit
          der Banner nicht bei jedem Seitenaufruf erneut erscheint. Es werden
          keine Analyse-Cookies zu Werbe- oder Profilierungszwecken gesetzt.
        </p>
      </section>

      <section className="content-section">
        <h2>Hosting und Zugriffsdaten</h2>
        <p>
          Beim Aufruf der Website können der Zugriffszeitpunkt, die aufgerufene
          URL, die IP-Adresse, der verwendete Browser bzw. Betriebssystem
          (sogenannte Zugriffs- oder Server-Logdaten) beim Hosting-Anbieter
          anfallen. Diese Daten dienen der technischen Bereitstellung und
          Sicherheit; eine Auswertung zu anderen Zwecken oder Weitergabe an
          Dritte erfolgt nur, soweit gesetzlich vorgesehen oder erforderlich.
        </p>
      </section>

      <section className="content-section">
        <h2>Externe Links</h2>
        <p>
          Auf dieser Website werden Links zu externen Seiten gesetzt (z. B.
          Arbeitsschutzverwaltung NRW, KomNet, DGUV, handsplus.de). Beim Aufruf
          dieser externen Seiten gelten die jeweiligen Datenschutzerklärungen der
          betreibenden Stellen. Wir haben keinen Einfluss auf deren
          Datenverarbeitung.
        </p>
      </section>

      <section className="content-section">
        <h2>Ihre Rechte</h2>
        <p>
          Sie haben gegenüber dem Verantwortlichen u. a. das Recht auf Auskunft,
          Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten sowie ein Recht auf Datenübertragbarkeit. Sie
          können sich bei einer Aufsichtsbehörde beschweren. Sofern die
          Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese
          jederzeit widerrufen.
        </p>
      </section>

      <section className="content-section">
        <h2>Änderungen</h2>
        <p>
          Diese Datenschutzerklärung kann bei Bedarf angepasst werden, um
          Änderungen der Website oder der rechtlichen Lage abzubilden. Die
          jeweils aktuelle Fassung finden Sie auf dieser Seite.
        </p>
      </section>
    </div>
  );
}
