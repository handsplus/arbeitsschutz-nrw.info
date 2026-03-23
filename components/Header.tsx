'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/arbeitsschutz-erklaert', label: 'Arbeitsschutz erklärt' },
  { href: '/fachthemen', label: 'Fachthemen' },
  { href: '/beratung', label: 'Beratung & Beschwerde' },
  { href: '/beratung-handsplus', label: 'Beratung durch Health and Safety +' },
  { href: '/antraege-formulare', label: 'Anträge & Formulare' },
  { href: '/faq', label: 'FAQ' },
  { href: '/quellen', label: 'Offizielle Quellen' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-text">Arbeitsschutz NRW</span>
          <span className="logo-badge">Informationsportal</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">{menuOpen ? 'Menü schließen' : 'Menü öffnen'}</span>
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>

        {menuOpen && (
          <div
            className="nav-overlay"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
        )}
        <nav id="main-nav" className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Hauptnavigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
