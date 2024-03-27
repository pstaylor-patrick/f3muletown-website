import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Hero from '../_components/Hero';

import f3HeroImg from '../../../public/f3-darkhorse-2023-11-04.jpg';
import Button from '../_components/Button';
import shelter from '../../../public/Henry Horton Shelter 2.jpg';
import Image from 'next/image';

export default function Page() {
  const href = '/convergence';
  const formHref = 'https://forms.gle/afmWCdgtSPTCKbPD7';
  const geolocationHref = 'https://maps.app.goo.gl/nFYveVBeoLAAY4Jf6';
  return (
    <>
      <Header href={href} />
      <main>
        <Hero
          title="F3 HIM CONVERGENCE"
          subtitle="CALLING MEN TO VIRTUOUS LEADERSHIP"
          imgUrl={f3HeroImg.src}
          leadIn="SAT, APR 13, 2024"
        />
      </main>
      <section className={`bg-gloom leading-tight py-16 px-4`}>
        <p className="text-xl">5 HOURS, 3 SPEAKERS, 1 MISSION</p>
        <h2 className="text-4xl py-5">CONVERGENCE</h2>
        <p className="text-cmu w-4/5 pb-10" style={{ margin: '0 auto' }}>
          This event is not merely a gathering; it is a crucible for refinement
          and growth. Each speaker, seasoned in the art of spiritual and
          personal development, will cast a vision that transcends the ordinary,
          instilling hope and providing a robust framework for acceleration in
          every facet of life. Our agenda is meticulously crafted to call forth
          the leader within, inviting participants to step into a life led by
          virtue and marked by God&apos;s presence.
        </p>
        <Button href={formHref} text="SUBMIT YOUR HC" target="_blank" />
      </section>
      <section className={`bg-iron leading-tight py-16 px-4`}>
        <h2 className="pb-5">AGENDA</h2>
        <p
          className="text-white w-fit text-xl pb-1"
          style={{ margin: '0 auto', fontFamily: 'BlackOps' }}
        >
          SAT, APR 13, 2024
        </p>
        <a href={geolocationHref} target="_blank" className="hover:opacity-80">
          <p
            className="text-drp w-fit text-xl pb-1"
            style={{ margin: '0 auto', fontFamily: 'BlackOps' }}
          >
            HENRY HORTON STATE PARK
          </p>
          <p
            className="text-drp w-fit text-xl pb-5"
            style={{ margin: '0 auto', fontFamily: 'BlackOps' }}
          >
            PAVILION SHELTER 2
          </p>
        </a>
        <ul className="text-cmu text-left w-fit" style={{ margin: '0 auto' }}>
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
        <a href={geolocationHref} target="_blank">
          <Image
            src={shelter.src}
            height={shelter.height}
            width={shelter.width}
            alt={'Henry Horton State Park, Pavilion Shelter 2'}
            className="grayscale hover:grayscale-0 w-fit pt-5 pb-10"
            style={{ margin: '0 auto' }}
          />
        </a>
        <Button href={formHref} text="SUBMIT YOUR HC" target="_blank" />
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
