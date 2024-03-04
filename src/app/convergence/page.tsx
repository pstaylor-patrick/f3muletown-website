import Head from 'next/head';

import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Hero from '../_components/Hero';

import f3HeroImg from '../../../public/f3-darkhorse-2023-11-04.jpg';
import Button from '../_components/Button';

export default function Page() {
  const href = '/convergence';
  const formHref = 'https://forms.gle/afmWCdgtSPTCKbPD7';
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header href={href} />
      <main>
        <Hero
          title="F3 HIM CONVERGENCE"
          subtitle="CALLING MEN TO VIRTUOUS LEADERSHIP"
          imgUrl={f3HeroImg.src}
        />
      </main>
      <section className={`bg-gloom leading-tight py-16 px-4`}>
        <p className="text-xl">5 HOURS, 3 SPEAKERS, 1 MISSION</p>
        <h2 className="text-5xl">CONVERGENCE</h2>
        <p className="text-cmu w-4/5 pb-10" style={{ margin: '0 auto' }}>
          This event is not merely a gathering; it is a crucible for refinement
          and growth. Each speaker, seasoned in the art of spiritual and
          personal development, will cast a vision that transcends the ordinary,
          instilling hope and providing a robust framework for acceleration in
          every facet of life. Our agenda is meticulously crafted to call forth
          the leader within, inviting participants to step into a life led by
          virtue and marked by God's presence.
        </p>
        <Button href={formHref} text="SUBMIT YOUR HC" target="_blank" />
      </section>
      <section className={`bg-iron leading-tight py-16 px-4`}>
        <h2>AGENDA</h2>
        <ul
          className="pt-5 text-cmu text-left w-fit"
          style={{ margin: '0 auto' }}
        >
          <li className="pb-5">
            <span className="bold text-white">0700H - </span> Beatdown
          </li>
          <li className="pb-5">
            <span className="bold text-white">0815H - </span> Breakfast
          </li>
          <li className="pb-5">
            <span className="bold text-white">0830H - </span> Speakers
          </li>
          <li>
            <span className="bold text-white">1200H - </span> Lunch
          </li>
        </ul>
      </section>
      <section className={`bg-gloom leading-tight py-16 px-4`}>
        <h2>PLANNING TO ATTEND?</h2>
        <p className="text-cmu w-4/5 py-5" style={{ margin: '0 auto' }}>
          Welcome – we are honored to for you to join us and look forward to
          meeting you.
        </p>
        <p className="text-cmu w-4/5 pb-10" style={{ margin: '0 auto' }}>
          Let us know you are coming by adding your “HC” (which stands for “Hard
          Commit”)
        </p>
        <Button href={formHref} text="SUBMIT YOUR HC" target="_blank" />
      </section>
      <Footer />
    </>
  );
}
