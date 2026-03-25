import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';

export const metadata = { title: 'FAQ Arbeitsschutz' };

const faqs = [
  {
    q: 'Was ist Arbeitsschutz?',
    a: 'Arbeitsschutz umfasst alle Maßnahmen, die die Sicherheit und Gesundheit der Beschäftigten am Arbeitsplatz schützen. Grundlage ist das Arbeitsschutzgesetz (ArbSchG). Arbeitgeberinnen und Arbeitgeber sind verpflichtet, Gefährdungen zu beurteilen und geeignete Maßnahmen zu treffen.',
  },
  {
    q: 'Was ist eine Unterweisung?',
    a: 'Die Unterweisung ist eine Pflicht des Arbeitgebers: Beschäftigte müssen über die bei ihrer Arbeit auftretenden Gefahren und die getroffenen Schutzmaßnahmen unterwiesen werden – bei der Einstellung, bei Änderungen und mindestens einmal jährlich.',
  },
  {
    q: 'Wen kann ich bei Fragen zum Arbeitsschutz ansprechen?',
    a: 'Im Betrieb: Arbeitgeber, Sicherheitsbeauftragte, Fachkraft für Arbeitssicherheit, Betriebsarzt bzw. Betriebsärztin. Außerbetrieblich: die Arbeitsschutzverwaltung (Beratung, Beschwerde). Die Arbeitsschutzverwaltung NRW bietet telefonische Erstberatung und ein Online-Formular für Beschwerden.',
  },
  {
    q: 'Was mache ich bei einem Arbeitsunfall?',
    a: 'Erste Hilfe leisten, Verletzte versorgen, Unfallstelle absichern. Der Arbeitsunfall muss dem Arbeitgeber gemeldet werden; bei schweren Unfällen sind auch die Unfallversicherungsträger und ggf. die Arbeitsschutzbehörde zu informieren. Der Arbeitgeber hat Meldepflichten gegenüber der Berufsgenossenschaft bzw. Unfallkasse. Auskünfte und Hilfe: Infoline der DGUV 0800 6050404 (kostenfrei) sowie dguv.de (Unfallanzeige, Leistungen).',
  },
  {
    q: 'Bei wem bin ich unfallversichert? Wer ist zuständig?',
    a: 'Beschäftigte sind in der gesetzlichen Unfallversicherung versichert (Arbeitsunfälle, Wegeunfälle, Berufskrankheiten). Zuständig sind die Berufsgenossenschaften (gewerbliche Wirtschaft) bzw. Unfallkassen (z. B. öffentlicher Dienst, Bildung). Die Deutsche Gesetzliche Unfallversicherung (DGUV) ist der Spitzenverband und bietet unter 0800 6050404 und auf dguv.de Orientierung zur zuständigen Stelle.',
  },
  {
    q: 'Was ist die Gefährdungsbeurteilung?',
    a: 'Die Gefährdungsbeurteilung ist die systematische Ermittlung und Bewertung aller relevanten Gefährdungen für die Beschäftigten. Auf dieser Grundlage müssen geeignete Maßnahmen festgelegt und umgesetzt werden. Sie ist Pflicht für jeden Arbeitgeber.',
  },
  {
    q: 'Wo kann ich mich beschweren (Arbeitsschutz)?',
    a: 'Bei unzumutbaren Arbeitsbedingungen oder Verstößen gegen Arbeitsschutzvorschriften können Sie eine Arbeitsschutzbeschwerde einreichen – über das Online-Formular der Arbeitsschutzverwaltung NRW. Themen des Arbeitsrechts (z. B. Urlaub, Lohn) fallen nicht in deren Zuständigkeit.',
  },
];

export default function FAQPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>FAQ Arbeitsschutz</h1>
        <p className="page-intro">
          Kurze Antworten auf häufige Fragen zum Arbeitsschutz. Ausführliche
          Informationen und das vollständige FAQ finden Sie auf der offiziellen
          Website der Arbeitsschutzverwaltung NRW.
        </p>
      </div>

      <section className="content-section">
        <h2>Häufige Fragen und Antworten</h2>
        <dl className="faq-list">
          {faqs.map((item) => (
            <div key={item.q} className="faq-item">
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
        <p>
          <a
            href="https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/faq-arbeitsschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Vollständiges FAQ auf arbeitsschutz.nrw.de →
          </a>
          {' '}
          Weitere Informationen für Beschäftigte und Unternehmen (Unfallversicherung, Unfallanzeige):{' '}
          <a href="https://www.dguv.de/" target="_blank" rel="noopener noreferrer">
            dguv.de
          </a>
          .
        </p>
        <SourceLink href="https://www.arbeitsschutz.nrw.de/" label="Arbeitsschutzverwaltung NRW" />
      </section>

      <section className="content-section">
        <HandsplusTeaser variant="general" idSuffix="faq" />
      </section>
    </div>
  );
}
