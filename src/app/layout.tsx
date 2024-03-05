import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';

import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <body
        className={`${inter.className} bg-iron text-white text-center font-sans text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
