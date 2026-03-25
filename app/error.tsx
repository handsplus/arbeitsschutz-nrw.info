'use client';

import { useEffect } from 'react';

/**
 * Fehlergrenze für Seiten unterhalb des Root-Layouts (Next.js App Router).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container error-boundary">
      <h1 className="error-boundary-title">Seite konnte nicht geladen werden</h1>
      <p className="error-boundary-text">
        Es ist ein technischer Fehler aufgetreten. Bitte laden Sie die Seite neu oder
        versuchen Sie es später erneut. Bei anhaltenden Problemen den Build-Cache löschen
        (Ordner <code>.next</code> entfernen, dann <code>npm run dev</code>).
      </p>
      <button type="button" className="btn btn-primary error-boundary-btn" onClick={() => reset()}>
        Erneut versuchen
      </button>
    </div>
  );
}
