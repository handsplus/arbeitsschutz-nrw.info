import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden (404)',
  robots: { index: false, follow: true },
};

const helpfulLinks = [
  { href: '/', label: 'NRW-Navigator (Start)' },
  { href: '/branchen', label: 'Branchen-Guides' },
  { href: '/bezirke', label: 'Bezirke & Zuständigkeit' },
  { href: '/beratung', label: 'Beratung & Beschwerde' },
  { href: '/faq', label: 'FAQ' },
  { href: '/quellen', label: 'Offizielle Quellen' },
] as const;

export default function NotFound() {
  return (
    <div className="page-head">
      <h1>Seite nicht gefunden</h1>
      <p className="page-intro">
        Unter dieser Adresse gibt es keine Seite. Nutzen Sie den NRW-Navigator oder einen der
        Einstiege unten – oder die Suche im Kopfbereich.
      </p>
      <ul>
        {helpfulLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <p>
        Offizielle Arbeitsschutzverwaltung NRW:{' '}
        <a href="https://www.arbeitsschutz.nrw.de/" target="_blank" rel="noopener noreferrer">
          arbeitsschutz.nrw.de
        </a>
      </p>
    </div>
  );
}
