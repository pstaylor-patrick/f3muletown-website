import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

import "./globals.css";

import f3White from "../../public/f3-white.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link href={f3White.src} rel="shortcut icon" />
        <link href={f3White.src} rel="apple-touch-icon" />
      </Head>
      <body
        className={`${inter.className} bg-iron text-white text-center font-sans text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
