/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Set by the Pages workflow while the site lives at picticular.github.io/<repo>.
  // Leave unset once shopping.picticular.com is live.
  basePath: process.env.BASE_PATH ?? '',
  env: {
    // Absolute origin for Open Graph URLs. The workflow overrides it while on github.io.
    SITE_URL: process.env.SITE_URL ?? 'https://shopping.picticular.com',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
