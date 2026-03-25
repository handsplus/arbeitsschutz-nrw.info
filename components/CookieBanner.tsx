'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) setVisible(true);
  }, []);

  const choose = (value: 'accept' | 'decline') => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Hinweis zur lokalen Speicherung">
      <p className="cookie-banner-text">
        Wir setzen keine Analyse-Cookies. Ihre Auswahl zu diesem Hinweis wird lokal
        im Browser gespeichert (keine Werbe- oder Profilierung).{' '}
        <Link href="/datenschutz">Mehr in der Datenschutzerklärung</Link>.
      </p>
      <div className="cookie-banner-buttons">
        <button type="button" className="cookie-btn cookie-btn-decline" onClick={() => choose('decline')}>
          Ablehnen
        </button>
        <button type="button" className="cookie-btn cookie-btn-accept" onClick={() => choose('accept')}>
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
