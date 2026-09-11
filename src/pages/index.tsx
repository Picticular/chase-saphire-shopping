import Layout from '@/components/Layout';
import Sections from '@/components/Sections/Sections';
import { brand } from '@/content/brand';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const { basePath } = useRouter();

  return (
    <>
      <Head>
        <title>{`${brand.product} - Coupons, price comparison and rewards`}</title>
        <meta
          name="description"
          content={`${brand.product} is a free browser extension that applies coupon codes at checkout, compares prices, watches for price drops and earns you rewards.`}
        />
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
