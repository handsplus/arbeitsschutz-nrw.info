/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Immer relativ – verhindert kaputte Pfade, wenn ein Tool einen absoluten distDir setzt (Windows). */
  distDir: '.next',
};

module.exports = nextConfig;
