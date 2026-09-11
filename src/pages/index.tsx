import Layout from '@/components/Layout';
import Sections from '@/components/Sections/Sections';
import { brand } from '@/content/brand';
import Head from 'next/head';
import { useRouter } from 'next/router';

const title = `${brand.product} - Coupons, price comparison and rewards`;
const description = `${brand.product} is a free browser extension that applies coupon codes at checkout, compares prices, watches for price drops and earns you rewards.`;
// Link previews need absolute URLs; SITE_URL is inlined at build time from next.config.mjs.
const siteUrl = process.env.SITE_URL ?? '';

export default function Home() {
  const { basePath } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={brand.product} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={`${brand.product}: checks for deals before you checkout. Product photos with amounts saved.`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#117ACA" />
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
      </Head>
      <Layout>{scrollRef => <Sections scrollRef={scrollRef} />}</Layout>
    </>
  );
}
