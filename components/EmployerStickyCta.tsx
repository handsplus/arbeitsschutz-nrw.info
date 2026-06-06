'use client';

import Link from 'next/link';
import { trackLeadClick } from '@/lib/analytics';

/** Dezente, fixierte Leiste für Arbeitgeber-Seiten – nur Conversion-relevante CTAs */
export function EmployerStickyCta() {
  return (
    <aside className="employer-sticky-cta" aria-label="Schnellkontakt für Arbeitgeber">
      <div className="employer-sticky-inner container">
        <p className="employer-sticky-text">
          <strong>Arbeitgeber:</strong> Pflichten klären oder umsetzen lassen
        </p>
        <div className="employer-sticky-actions">
          <Link
            href="/#portal-navigator-title"
            className="employer-sticky-link"
            onClick={trackLeadClick('lead_sticky', { action: 'navigator' })}
          >
            NRW-Navigator
          </Link>
          <Link
            href="/beratung-handsplus"
            className="employer-sticky-btn"
            onClick={trackLeadClick('lead_sticky', { action: 'erstberatung' })}
          >
            Erstberatung
          </Link>
          <a
            href="tel:+4915228261619"
            className="employer-sticky-link employer-sticky-tel"
            onClick={trackLeadClick('lead_sticky', { action: 'tel' })}
          >
            Anrufen
          </a>
        </div>
      </div>
    </aside>
  );
}
