import Link from 'next/link';
import { HeaderNavClient } from '@/components/HeaderNavClient';

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/arbeitsschutz-erklaert', label: 'Arbeitsschutz erklärt' },
  { href: '/fachthemen', label: 'Fachthemen' },
  { href: '/beratung', label: 'Beratung & Beschwerde' },
  { href: '/beratung-handsplus', label: 'Beratung durch Health and Safety +' },
  { href: '/antraege-formulare', label: 'Anträge & Formulare' },
  { href: '/faq', label: 'FAQ' },
  { href: '/quellen', label: 'Offizielle Quellen' },
] as const;

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span className="logo-text">Arbeitsschutz NRW</span>
          <span className="logo-badge">Informationsportal</span>
        </Link>
        <HeaderNavClient items={navItems} />
      </div>
    </header>
  );
}
