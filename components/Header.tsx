import Link from 'next/link';
import { HeaderNavClient } from '@/components/HeaderNavClient';

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/arbeitsschutz-erklaert', label: 'Arbeitsschutz erklärt' },
  { href: '/arbeitsschutzgesetz', label: 'ArbSchG & Pflichten' },
  { href: '/fachthemen', label: 'Fachthemen' },
  { href: '/branchen', label: 'Branchen' },
  { href: '/bezirke', label: 'Bezirke NRW' },
  { href: '/beratung', label: 'Beratung & Beschwerde' },
  { href: '/beratung-handsplus', label: 'Beratung H&S+' },
  { href: '/antraege-formulare', label: 'Anträge & Formulare' },
  { href: '/faq', label: 'FAQ' },
  { href: '/quellen', label: 'Offizielle Quellen' },
] as const;

export function Header() {
  return (
    <header className="header">
      <div className="header-disclaimer" role="note">
        <div className="header-disclaimer-inner">
          Privates Informationsportal · nicht die Arbeitsschutzverwaltung NRW · Betreiber:{' '}
          <a href="https://www.handsplus.de/" target="_blank" rel="noopener noreferrer">
            Health and Safety +
          </a>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span className="logo-text">Arbeitsschutz NRW</span>
          <span className="logo-badge">NRW-Navigator · H&amp;S+</span>
        </Link>
        <HeaderNavClient items={navItems} />
      </div>
    </header>
  );
}
