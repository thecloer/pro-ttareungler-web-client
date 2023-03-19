import Head from 'next/head';
import siteMeta from '@/config/sitemeta';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteMeta.title}</title>
        <meta name='description' content={siteMeta.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>main</main>
    </>
  );
}
