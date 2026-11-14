/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Immer relativ – verhindert kaputte Pfade, wenn ein Tool einen absoluten distDir setzt (Windows). */
  distDir: '.next',
  async redirects() {
    return [
      // P1-5: zusammengeklebter Link
      {
        source: '/publikationenPublikationen',
        destination: '/publikationen',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
