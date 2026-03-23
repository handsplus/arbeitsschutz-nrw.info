import Link from 'next/link';

const officialLinks = [
  { href: 'https://www.arbeitsschutz.nrw.de/', label: 'Arbeitsschutzverwaltung NRW (offiziell)' },
  { href: 'https://www.komnet.nrw.de/', label: 'KomNet – Gut beraten. Gesund arbeiten. (offiziell)' },
  { href: 'https://www.dguv.de/', label: 'DGUV – Deutsche Gesetzliche Unfallversicherung (offiziell)' },
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
            Privates Informationsangebot, nicht die offizielle Seite der Arbeitsschutzverwaltung NRW. Inhalte verweisen auf die offiziellen Quellen.
          </p>
        </div>
        <div className="footer-pages">
          <p className="footer-title">Seiten</p>
          <ul>
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
