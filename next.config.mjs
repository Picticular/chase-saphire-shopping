/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Only set when building for a subpath (e.g. picticular.github.io/<repo>).
  basePath: process.env.BASE_PATH ?? '',
  env: {
    // Absolute origin for Open Graph URLs.
    SITE_URL: process.env.SITE_URL ?? 'https://shopping.picticular.com',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
