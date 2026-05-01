import Link from 'next/link';
import { HandsplusTeaser } from '@/components/HandsplusTeaser';
import { SourceLink } from '@/components/SourceLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/arbeitsschutz-erklaert',
  title: 'Arbeitsschutz erklärt',
  description:
    'Grundlagen: Was ist Arbeitsschutz, Akteure in Deutschland, GDA, Arbeitsschutzverwaltung NRW, DGUV – mit Verweisen auf arbeitsschutz.nrw.de. Privates Orientierungsportal.',
  keywords: ['Arbeitsschutz Grundlagen', 'GDA', 'Arbeitsschutzverwaltung NRW', 'DGUV', 'ArbSchG'],
});

const blocks = [
  {
    title: 'Was ist Arbeitsschutz?',
    content: (
      <>
        <p>
          Arbeitsschutz bezieht sich auf alle Maßnahmen, die darauf abzielen, die
          Sicherheit und Gesundheit am Arbeitsplatz zu gewährleisten. Grundlage
          ist das <strong>Arbeitsschutzgesetz (ArbSchG)</strong>. Darin steht:
          Jede Arbeitgeberin und jeder Arbeitgeber ist verpflichtet, die
          Sicherheit und Gesundheit der Beschäftigten zu schützen. Das heißt,
          dafür zu sorgen, dass keine Unfälle auf der Arbeit passieren und durch
          die Arbeit keine Gefährdungen für die Gesundheit entstehen.
        </p>
      </>
    ),
    link: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert',
    linkLabel: 'Arbeitsschutz erklärt (offiziell)',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
  },
  {
    title: 'Arbeitsschutz in Deutschland',
    content: (
      <>
        <p>
          In Deutschland wird der Arbeitsschutz von <strong>Bund, Ländern und
          Unfallversicherungsträgern</strong> gemeinsam getragen. Die Überwachung
          des betrieblichen Arbeitsschutzes und die Beratung von Arbeitgeberinnen
          und Arbeitgebern bei der Erfüllung ihrer Pflichten sind Aufgaben der
          staatlichen Arbeitsschutzbehörden nach dem Arbeitsschutzgesetz (ArbSchG).
        </p>
        <p>Wichtige Akteure:</p>
        <ul>
          <li>Staatliche Arbeitsschutzbehörden (Länder)</li>
          <li>Berufsgenossenschaften und Unfallkassen – Spitzenverband: <a href="https://www.dguv.de/" target="_blank" rel="noopener noreferrer">Deutsche Gesetzliche Unfallversicherung (DGUV)</a></li>
          <li>Bundesministerium für Arbeit und Soziales (BMAS), Bundesanstalt für Arbeitsschutz und Arbeitsmedizin (BAuA)</li>
        </ul>
      </>
    ),
    link: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/arbeitsschutz-deutschland',
    linkLabel: 'Arbeitsschutz in Deutschland (offiziell)',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
  },
  {
    title: 'Gemeinsame Deutsche Arbeitsschutzstrategie (GDA)',
    content: (
      <>
        <p>
          Die <strong>GDA</strong> ist eine von Bund, Ländern und
          Unfallversicherungsträgern gemeinsam getragene Strategie zur Stärkung
          des betrieblichen Arbeitsschutzes in Deutschland. Sie ist im
          Arbeitsschutzgesetz und im Sozialgesetzbuch VII verankert. Ziele sind
          u. a. ein einheitliches Vorgehen, gemeinsame Schwerpunkte und die
          Verbesserung von Sicherheit und Gesundheit bei der Arbeit.
        </p>
      </>
    ),
    link: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/arbeitsschutz-deutschland/gemeinsame-deutsche-arbeitsschutzstrategie-gda',
    linkLabel: 'GDA (offiziell)',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
  },
  {
    title: 'Die staatliche Arbeitsschutzverwaltung NRW',
    content: (
      <>
        <p>
          Die Arbeitsschutzverwaltung in Nordrhein-Westfalen geht mit den
          Veränderungen in der Arbeitswelt mit und unterstützt Unternehmen und
          Beschäftigte bei Sicherheit und Gesundheit am Arbeitsplatz. Zu ihr
          gehören:
        </p>
        <ul>
          <li><strong>Ministerium für Arbeit, Gesundheit und Soziales (MAGS NRW)</strong> – politische Steuerung, Gesetze, Aktionen</li>
          <li><strong>Arbeitsschutzdezernate der Bezirksregierungen</strong> – Vollzug, Beratung, Überwachung in den Regionen</li>
          <li><strong>Landesamt für Gesundheit und Arbeitsschutz NRW (LAGAS)</strong> – u. a. Fachaufgaben, KomNet, Strahlenschutz</li>
        </ul>
      </>
    ),
    link: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/die-arbeitsschutzverwaltung-nrw',
    linkLabel: 'Arbeitsschutzverwaltung NRW (offiziell)',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
  },
  {
    title: 'Berufsgenossenschaften und Unfallkassen (DGUV)',
    content: (
      <>
        <p>
          Die <strong>gesetzliche Unfallversicherung</strong> wird von den
          Berufsgenossenschaften (für die gewerbliche Wirtschaft) und den
          Unfallkassen (u. a. für den öffentlichen Dienst, Schulen, Kitas)
          getragen. Ihr Spitzenverband ist die{' '}
          <strong>Deutsche Gesetzliche Unfallversicherung (DGUV)</strong>. Die
          Träger beraten Unternehmen in Sachen Prävention, sind für
          Arbeitsunfälle, Wegeunfälle und Berufskrankheiten zuständig und
          leisten Rehabilitation und Entschädigung.
        </p>
        <p>
          <strong>Infoline der DGUV (kostenfrei):</strong>{' '}
          <a href="tel:08006050404">0800 6050404</a> – für allgemeine Fragen zu
          Versicherung, Unfallanzeige, Prävention und Ansprechpartnern.
        </p>
      </>
    ),
    link: 'https://www.dguv.de/',
    linkLabel: 'DGUV – Deutsche Gesetzliche Unfallversicherung',
    sourceLabel: 'DGUV',
  },
  {
    title: 'Landesweite Überwachungsaktionen',
    content: (
      <>
        <p>
          Politische Anlässe oder besondere Problemstellungen können es
          notwendig machen, dass die Arbeitsschutzverwaltung kurzfristig und
          zielgerichtet handelt. Sie führt dann landesweit zeitlich begrenzte
          Überwachungsaktionen durch – unter anderem in Risikobranchen (z. B.
          Fleischindustrie, Friseurbranche, Gebäudereinigung, Sonn- und
          Feiertagsarbeit).
        </p>
        <p>
          <Link href="/ueberwachungsaktionen">Überblick Überwachungsaktionen auf diesem Portal →</Link>
        </p>
      </>
    ),
    link: 'https://www.arbeitsschutz.nrw.de/arbeitsschutz-erklaert/landesweite-ueberwachungsaktionen',
    linkLabel: 'Landesweite Überwachungsaktionen (offiziell)',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
  },
];

export default function ArbeitsschutzErklaertPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Arbeitsschutz erklärt</h1>
        <p className="page-intro">
          Wie funktioniert der Arbeitsschutz in Deutschland? Was sind die
          Aufgaben der Arbeitsschutzverwaltung NRW? Hier finden Sie eine
          strukturierte Übersicht. Alle Details und offiziellen Texte stehen auf
          den verlinkten Seiten der Arbeitsschutzverwaltung NRW.
        </p>
      </div>

      {blocks.map((block) => (
        <section key={block.title} className="content-section">
          <h2>{block.title}</h2>
          {block.content}
          <p>
            <a href={block.link} target="_blank" rel="noopener noreferrer" className="external">
              {block.linkLabel}
            </a>
          </p>
          <SourceLink href="https://www.arbeitsschutz.nrw.de/" label={block.sourceLabel} />
        </section>
      ))}

      <section className="content-section">
        <HandsplusTeaser variant="arbeitsschutz" idSuffix="erklaert" />
      </section>

      <section className="content-section">
        <h2>Weitere Themen</h2>
        <ul>
          <li><Link href="/faq">FAQ Arbeitsschutz</Link> – häufige Fragen und Antworten</li>
          <li><Link href="/beratung">Beratung & Beschwerde</Link> – Ansprechstellen und Kontakt</li>
          <li><a href="https://www.dguv.de/de/versicherung/index.jsp" target="_blank" rel="noopener noreferrer">Versicherungsschutz, Arbeitsunfälle, Berufskrankheiten (DGUV)</a></li>
          <li><a href="https://www.arbeitsschutz.nrw.de/karriere/karriereeinstieg-bei-der-arbeitsschutzverwaltung" target="_blank" rel="noopener noreferrer">Karriereeinstieg bei der Arbeitsschutzverwaltung</a></li>
        </ul>
      </section>
    </div>
  );
}
