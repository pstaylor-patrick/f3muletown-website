import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Script from 'next/script';

import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H3KTP1DXZF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H3KTP1DXZF');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-iron text-white text-center font-sans text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
