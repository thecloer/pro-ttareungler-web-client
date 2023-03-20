import type { AppProps } from 'next/app';
import Head from 'next/head';
import siteMeta from '@/config/siteMeta';
import Header from '@/components/Header';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='h-full flex flex-col'>
      <Head>
        <title>{siteMeta.title}</title>
        <meta name='description' content={siteMeta.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Component {...pageProps} />
    </div>
  );
}
