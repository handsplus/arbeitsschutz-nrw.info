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
  description:
    'Orientierung zum Arbeitsschutz in Nordrhein-Westfalen – Verweise auf Arbeitsschutzverwaltung NRW, KomNet und DGUV. Privates Informationsportal von Health and Safety +, ohne eigene Fachaufarbeitung.',
  keywords: 'Arbeitsschutz, NRW, Nordrhein-Westfalen, Sicherheit, Gesundheit, Arbeit, DGUV, Unfallversicherung, Health and Safety Plus',
  openGraph: {
    title: 'Arbeitsschutz NRW – Informationsportal',
    description:
      'Privates Informationsportal: Verweise zum Arbeitsschutz in NRW (Arbeitsschutzverwaltung NRW, KomNet, DGUV). Ein Angebot von Health and Safety +.',
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
          @media (min-width:768px){.nav-list{display:flex;flex-wrap:wrap;gap:0.25rem 1.5rem}}
          .nav-link{color:inherit;padding:.35rem 0}
          .menu-toggle{display:flex;flex-direction:column;justify-content:center;gap:5px;width:36px;height:36px;padding:0;background:transparent;border:none;color:inherit;cursor:pointer}
          .menu-toggle-bar{display:block;width:22px;height:2px;background:currentColor;border-radius:1px}
          .nav{position:fixed;top:0;right:0;bottom:0;width:min(280px,85vw);background:var(--color-surface);color:var(--color-text);padding:4rem 1.5rem 1.5rem;box-shadow:-4px 0 20px rgba(0,0,0,.12);transform:translateX(100%);transition:transform .2s ease;z-index:99}
          .nav-open{transform:translateX(0)}
          .nav-overlay{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:98}
          @media (min-width:768px){
            .menu-toggle{display:none!important}
            .nav-overlay{display:none!important}
            .nav{position:static!important;width:auto!important;padding:0!important;background:transparent!important;color:inherit!important;box-shadow:none!important;transform:none!important;transition:none}
            .nav-open{transform:none!important}
          }
          .main-content{min-height:calc(100vh - 120px);padding:1.5rem 0 3rem}
          .footer{background:var(--color-surface);border-top:1px solid var(--color-border);padding:2rem 0 1.5rem;font-size:.9rem}
          .footer-inner{display:grid;gap:1.5rem}
          @media (min-width:640px){.footer-inner{grid-template-columns:repeat(2,1fr)}}
          @media (min-width:1100px){.footer-inner{grid-template-columns:repeat(4,1fr)}}
          .footer-title{font-weight:600;margin:0 0 .5rem 0}
          .footer p,.footer ul{margin:0}
          .footer a{color:var(--color-primary)}
          .page-head h1{font-size:1.75rem;margin-bottom:.5rem}
          .page-head-with-search{display:grid;gap:1.5rem;align-items:start}
          @media (min-width:960px){.page-head-with-search{grid-template-columns:1fr minmax(260px,340px);gap:2rem}}
          .site-search{background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius);padding:1rem;box-shadow:var(--shadow-sm)}
          .site-search-form{position:relative}
          .site-search-input-wrap{position:relative}
          .site-search-input{width:100%;padding:.55rem 2.85rem .55rem .85rem;border:1px solid var(--color-border);border-radius:var(--radius);font:inherit}
          .page-intro{color:#4a4a4a;font-size:1.05rem;max-width:65ch}
          .content-section{margin-bottom:2rem}
          .content-section h2{font-size:1.375rem;padding-bottom:.35rem;border-bottom:2px solid var(--color-primary);margin-bottom:1rem}
          .card{background:var(--color-surface);border-radius:var(--radius);padding:1.25rem;box-shadow:0 1px 3px rgba(0,0,0,.06);border:1px solid var(--color-border)}
          .card h2,.card h3{margin-top:0;margin-bottom:.5rem;font-size:1.1rem}
          .card-grid{display:grid;gap:1.25rem;margin-top:1.5rem}
          @media (min-width:640px){.card-grid{grid-template-columns:repeat(2,1fr)}}
          @media (min-width:960px){.card-grid{grid-template-columns:repeat(3,1fr)}}
          .promo-banner{background:var(--color-primary);color:#fff;border-radius:var(--radius);margin-bottom:1.5rem;border:1px solid rgba(255,255,255,.12)}
          .promo-banner-inner{padding:1.25rem 1.5rem;max-width:100%}
          .promo-banner-text{max-width:65ch}
          .promo-banner-kicker{margin:0 0 .5rem;font-size:.75rem;font-weight:600;text-transform:uppercase;opacity:.8}
          .promo-banner-title{margin:0 0 .75rem;font-size:1.2rem;font-weight:700;line-height:1.35}
          .promo-banner-text{margin:0;font-size:.95rem;line-height:1.55;opacity:.95}
          .promo-banner-actions{display:flex;flex-wrap:wrap;align-items:center;gap:.65rem;margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.2)}
          @media (min-width:640px){.promo-banner-actions{flex-wrap:nowrap}}
          .promo-banner-icon-pair{display:flex;gap:.65rem;align-items:center}
          .promo-btn{display:inline-flex;padding:.55rem 1.1rem;font-weight:600;text-decoration:none;border-radius:var(--radius);font-size:.9rem}
          .promo-btn-primary{background:#fff;color:var(--color-primary)}
          .promo-btn-outline{border:2px solid rgba(255,255,255,.55);color:#fff}
          .promo-btn-icon-only{min-width:2.75rem;min-height:2.75rem;padding:.5rem}
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
