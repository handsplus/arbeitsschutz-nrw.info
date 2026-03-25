'use client';

import Link from 'next/link';
import { useState } from 'react';

export type NavItem = { href: string; label: string };

export function HeaderNavClient({ items }: { items: readonly NavItem[] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          {items.map((item) => (
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
    </>
  );
}
