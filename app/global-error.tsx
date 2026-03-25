'use client';

/** Fängt Fehler im Root-Layout ab – benötigt eigenes html- und body-Element. */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body
        style={{
          margin: 0,
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          background: '#f5f6f8',
          color: '#1a1a1a',
          padding: '2rem 1.25rem',
          minHeight: '100vh',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', color: '#003366', marginBottom: '1rem' }}>
          Anwendungsfehler
        </h1>
        <p style={{ maxWidth: '50ch', lineHeight: 1.6, marginBottom: '1rem' }}>
          Die Seite konnte nicht aufgebaut werden. Bitte laden Sie die Startseite neu oder
          versuchen Sie es später erneut.
        </p>
        <p style={{ maxWidth: '50ch', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', color: '#4a4a4a' }}>
          Entwicklung: Bei anhaltenden Problemen Build-Cache löschen (Ordner{' '}
          <code>.next</code> entfernen, dann <code>npm run dev</code>).
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          <a href="/" style={{ color: '#003366', fontWeight: 600 }}>
            Zur Startseite
          </a>
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: '0.6rem 1.1rem',
            fontWeight: 600,
            fontSize: '1rem',
            background: '#003366',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Erneut versuchen
        </button>
      </body>
    </html>
  );
}
