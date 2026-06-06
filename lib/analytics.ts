'use client';

/** DSGVO-freundliches Lead-Tracking – keine Cookies, nur bei Klick. */

export type LeadEvent =
  | 'lead_erstberatung'
  | 'lead_tel'
  | 'lead_mail'
  | 'lead_navigator'
  | 'lead_branche'
  | 'lead_sticky';

export function trackLead(event: LeadEvent, properties?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;

  void import('@vercel/analytics')
    .then(({ track }) => {
      track(event, properties);
    })
    .catch(() => {
      /* Analytics optional – kein Fehler für Nutzer */
    });
}

export function trackLeadClick(event: LeadEvent, properties?: Record<string, string>) {
  return () => trackLead(event, properties);
}
