import Link from 'next/link';

const officialLinks = [
  { href: 'https://www.arbeitsschutz.nrw.de/', label: 'Arbeitsschutzverwaltung NRW (offiziell)' },
  { href: 'https://www.komnet.nrw.de/', label: 'KomNet – Gut beraten. Gesund arbeiten. (offiziell)' },
  { href: 'https://www.dguv.de/', label: 'DGUV – Deutsche Gesetzliche Unfallversicherung (offiziell)' },
];

/** Weitere Angebote von Health and Safety + (verwandte Webauftritte) */
const relatedSites = [
  { href: 'https://sigeko.koeln', label: 'sigeko.koeln' },
  { href: 'https://arbeitssicherheit.nrw', label: 'arbeitssicherheit.nrw' },
  { href: 'https://brandschutzkoeln.com', label: 'brandschutzkoeln.com' },
  { href: 'https://arbeitssicherheitkoeln.de', label: 'arbeitssicherheitkoeln.de' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-provider">
          <p className="footer-title">Anbieter</p>
          <p>
            Betrieben von{' '}
            <a href="https://www.handsplus.de/" target="_blank" rel="noopener noreferrer">
              <strong>Health and Safety +</strong>
            </a>
            {' '}– Arbeitsschutz &amp; Brandschutz in NRW.{' '}
            <Link href="/beratung-handsplus">Beratung</Link>
            {' · '}
            <a href="https://www.handsplus.de/" target="_blank" rel="noopener noreferrer">
              www.handsplus.de
            </a>
          </p>
          <p className="footer-disclaimer-short">
            Privates Informationsangebot, nicht die offizielle Seite der Arbeitsschutzverwaltung NRW.
            Keine eigene Aufarbeitung von Fach- oder Rechtsfragen – Orientierung und Verweise auf die
            offiziellen Quellen.
          </p>
        </div>
        <div className="footer-pages">
          <p className="footer-title">Seiten</p>
          <ul>
            <li><Link href="/arbeitsschutz-erklaert">Arbeitsschutz erklärt</Link></li>
            <li><Link href="/fachthemen">Fachthemen</Link></li>
            <li><Link href="/beratung">Beratung & Beschwerde</Link></li>
            <li><Link href="/beratung-handsplus">Beratung durch Health and Safety +</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/antraege-formulare">Anträge & Formulare</Link></li>
            <li><Link href="/publikationen">Publikationen</Link></li>
            <li><Link href="/ueberwachungsaktionen">Überwachungsaktionen</Link></li>
            <li><Link href="/quellen">Offizielle Quellen</Link></li>
          </ul>
        </div>
        <div className="footer-sources">
          <p className="footer-title">Offizielle Quellen</p>
          <ul>
            {officialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-related">
          <p className="footer-title">Weitere Webangebote</p>
          <ul>
            {relatedSites.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer-related-note">
            Angebote von Health and Safety + – keine offiziellen Behördenangebote.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-legal">
            <Link href="/impressum">Impressum</Link>
            <span className="footer-sep"> · </span>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} arbeitsschutz-nrw.info – Ein Angebot von{' '}
            <a href="https://www.handsplus.de/" target="_blank" rel="noopener noreferrer">
              Health and Safety +
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
