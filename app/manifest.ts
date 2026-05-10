import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arbeitsschutz NRW – Informationsportal',
    short_name: 'Arbeitsschutz NRW',
    description:
      'Arbeitsschutz NRW: ArbSchG, Gefährdungsbeurteilung, Unterweisung – Verweise zu ASV NRW, LfGA, KomNet, DGUV.',
    start_url: '/',
    display: 'browser',
    background_color: '#f5f6f8',
    theme_color: '#003366',
    lang: 'de',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
