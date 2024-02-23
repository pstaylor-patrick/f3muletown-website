import Head from "next/head";

import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Hero from "../_components/Hero";

import f3HeroImg from "../../../public/f3-darkhorse-2023-11-04.jpg";

export default function Page() {
const href = "/convergence";
  return (
    <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
        </Head>
      <Header href={href} />
      <main>
        <Hero
          title="CONVERGENCE"
          subtitle="CALLING MEN TO VIRTUOUS LEADERSHIP"
          imgUrl={f3HeroImg.src}
        />
      </main>
      <Footer />
    </>
  );
}
