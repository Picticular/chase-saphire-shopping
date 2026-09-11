/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Set by the Pages workflow while the site lives at picticular.github.io/<repo>.
  // Leave unset once sapphire.picticular.com is live.
  basePath: process.env.BASE_PATH ?? '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
