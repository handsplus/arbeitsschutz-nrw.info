import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: {
    default: 'Arbeitsschutz NRW – Informationsportal',
    template: '%s | Arbeitsschutz NRW',
  },
  description: 'Übersicht und Informationen zum Arbeitsschutz in Nordrhein-Westfalen. Privates Informationsportal von Health and Safety + mit Verweisen auf Arbeitsschutzverwaltung NRW, KomNet und DGUV.',
  keywords: 'Arbeitsschutz, NRW, Nordrhein-Westfalen, Sicherheit, Gesundheit, Arbeit, DGUV, Unfallversicherung, Health and Safety Plus',
  openGraph: {
    title: 'Arbeitsschutz NRW – Informationsportal',
    description: 'Privates Informationsportal zum Arbeitsschutz in NRW mit Links zu Arbeitsschutzverwaltung NRW, KomNet und DGUV. Ein Angebot von Health and Safety +.',
  },
  metadataBase: new URL('https://arbeitsschutz-nrw.info'),
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root{--color-bg:#f5f6f8;--color-surface:#fff;--color-primary:#003366;--color-text:#1a1a1a;--color-border:#dde1e6;--font-sans:'Segoe UI',system-ui,sans-serif;--radius:8px;--max-width:1200px}
          *,.main-content{box-sizing:border-box}
          body{margin:0;font-family:var(--font-sans);font-size:1rem;line-height:1.6;color:var(--color-text);background:var(--color-bg)}
          .container{max-width:var(--max-width);margin:0 auto;padding:0 1.25rem}
          a{color:var(--color-primary)}
          .header{background:var(--color-primary);color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.08);position:sticky;top:0;z-index:100}
          .header-inner{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1.25rem}
          .logo{color:inherit;text-decoration:none;font-weight:600}
          .logo-badge{font-size:.7rem;font-weight:400;opacity:.9}
          .nav-list{list-style:none;margin:0;padding:0}
          @media (min-width:768px){.nav-list{display:flex;flex-wrap:wrap;gap:0 1.5rem}}
          .nav-link{color:inherit;padding:.35rem 0}
          .main-content{min-height:calc(100vh - 120px);padding:1.5rem 0 3rem}
          .footer{background:var(--color-surface);border-top:1px solid var(--color-border);padding:2rem 0 1.5rem;font-size:.9rem}
          .footer-inner{display:grid;gap:1.5rem}
          @media (min-width:640px){.footer-inner{grid-template-columns:repeat(2,1fr)}}
          @media (min-width:900px){.footer-inner{grid-template-columns:repeat(3,1fr)}}
          .footer-title{font-weight:600;margin:0 0 .5rem 0}
          .footer p,.footer ul{margin:0}
          .footer a{color:var(--color-primary)}
          .page-head h1{font-size:1.75rem;margin-bottom:.5rem}
          .page-intro{color:#4a4a4a;font-size:1.05rem;max-width:65ch}
          .content-section{margin-bottom:2rem}
          .content-section h2{font-size:1.375rem;padding-bottom:.35rem;border-bottom:2px solid var(--color-primary);margin-bottom:1rem}
          .card{background:var(--color-surface);border-radius:var(--radius);padding:1.25rem;box-shadow:0 1px 3px rgba(0,0,0,.06);border:1px solid var(--color-border)}
          .card h2,.card h3{margin-top:0;margin-bottom:.5rem;font-size:1.1rem}
          .card-grid{display:grid;gap:1.25rem;margin-top:1.5rem}
          @media (min-width:640px){.card-grid{grid-template-columns:repeat(2,1fr)}}
          @media (min-width:960px){.card-grid{grid-template-columns:repeat(3,1fr)}}
          .promo-banner{background:var(--color-primary);color:#fff;padding:1rem 1.25rem;border-radius:var(--radius);margin-bottom:1.5rem}
          .promo-banner a{color:#fff;font-weight:600}
          .schnellzugriff-section{background:var(--color-surface);padding:1.25rem;border-radius:var(--radius);border:1px solid var(--color-border)}
          .quick-links{list-style:none;margin:0;padding:0;display:grid;gap:.75rem}
          .news-item{background:var(--color-surface);padding:1.25rem;border-radius:var(--radius);border:1px solid var(--color-border);margin-bottom:1rem}
          .source-link{font-size:.85rem;color:var(--color-primary);margin-top:.5rem}
          .btn{display:inline-block;padding:.6rem 1.1rem;font-size:.95rem;font-weight:600;border-radius:var(--radius);text-decoration:none}
          .btn-primary{background:var(--color-primary);color:#fff}
          .btn-secondary{background:var(--color-surface);color:var(--color-primary);border:2px solid var(--color-primary)}
        ` }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
        <Header />
        <main id="main-content" className="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
