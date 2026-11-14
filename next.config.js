/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Immer relativ – verhindert kaputte Pfade, wenn ein Tool einen absoluten distDir setzt (Windows). */
  distDir: '.next',

  /**
   * GSC (09.11.2026): Indexierung wegen 404.
   * Bekannte Tippfehler-, Alias- und Großschreibungs-URLs → kanonische Seiten (301).
   */
  async redirects() {
    const permanent = true;
    return [
      // P1-5: zusammengeklebter Link
      { source: '/publikationenPublikationen', destination: '/publikationen', permanent },

      // Häufige Alias-/Tippfehler-Pfade
      { source: '/kontakt', destination: '/beratung-handsplus', permanent },
      { source: '/contact', destination: '/beratung-handsplus', permanent },
      { source: '/suche', destination: '/', permanent },
      { source: '/search', destination: '/', permanent },
      { source: '/aktuelles', destination: '/ueberwachungsaktionen', permanent },
      { source: '/news', destination: '/ueberwachungsaktionen', permanent },
      { source: '/blog', destination: '/ueberwachungsaktionen', permanent },
      { source: '/handsplus', destination: '/beratung-handsplus', permanent },
      { source: '/hands-plus', destination: '/beratung-handsplus', permanent },
      { source: '/beratung/handsplus', destination: '/beratung-handsplus', permanent },
      { source: '/beratung_handsplus', destination: '/beratung-handsplus', permanent },
      { source: '/beratung-hands-plus', destination: '/beratung-handsplus', permanent },
      { source: '/arbeitsschutz', destination: '/arbeitsschutz-erklaert', permanent },
      { source: '/bezirk', destination: '/bezirke', permanent },

      // Branchen-Aliasse (Navigator-/Suchbegriffe ohne kanonischen Slug)
      { source: '/branchen/logistik', destination: '/branchen/logistik-kep', permanent },
      { source: '/branchen/kep', destination: '/branchen/logistik-kep', permanent },
      { source: '/branchen/reinigung', destination: '/branchen/gebaeudereinigung', permanent },
      { source: '/branchen/gastro', destination: '/branchen/gastronomie', permanent },
      { source: '/branchen/bau', destination: '/branchen/bau-baustelle', permanent },
      { source: '/branchen/handwerk', destination: '/branchen', permanent },
      { source: '/branchen/buero', destination: '/branchen', permanent },

      // Bezirks-Detailpfade (nur Übersicht vorhanden)
      { source: '/bezirke/koeln', destination: '/bezirke', permanent },
      { source: '/bezirke/duesseldorf', destination: '/bezirke', permanent },
      { source: '/bezirke/duesseldorff', destination: '/bezirke', permanent },
      { source: '/bezirke/muenster', destination: '/bezirke', permanent },
      { source: '/bezirke/detmold', destination: '/bezirke', permanent },
      { source: '/bezirke/arnsberg', destination: '/bezirke', permanent },

      // Legacy .html
      { source: '/impressum.html', destination: '/impressum', permanent },
      { source: '/datenschutz.html', destination: '/datenschutz', permanent },
      { source: '/arbeitsschutzgesetz.html', destination: '/arbeitsschutzgesetz', permanent },
      { source: '/fachthemen.html', destination: '/fachthemen', permanent },
      { source: '/faq.html', destination: '/faq', permanent },
      { source: '/index.html', destination: '/', permanent },

      // Großschreibung (Linux/Vercel case-sensitive; Google/Menschen tippen oft Title Case)
      { source: '/FAQ', destination: '/faq', permanent },
      { source: '/Impressum', destination: '/impressum', permanent },
      { source: '/Datenschutz', destination: '/datenschutz', permanent },
      { source: '/Fachthemen', destination: '/fachthemen', permanent },
      { source: '/Branchen', destination: '/branchen', permanent },
      { source: '/Bezirke', destination: '/bezirke', permanent },
      { source: '/Beratung', destination: '/beratung', permanent },
      { source: '/Quellen', destination: '/quellen', permanent },
      { source: '/Publikationen', destination: '/publikationen', permanent },
      { source: '/Arbeitsschutzgesetz', destination: '/arbeitsschutzgesetz', permanent },
      { source: '/Arbeitsschutz', destination: '/arbeitsschutz-erklaert', permanent },
    ];
  },
};

module.exports = nextConfig;
