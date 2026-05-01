import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arbeitsschutz NRW – Informationsportal',
    short_name: 'Arbeitsschutz NRW',
    description:
      'Privates Informationsportal: Verweise zu Arbeitsschutz NRW, LfGA, KomNet und DGUV. Betreiber: Health and Safety +.',
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
