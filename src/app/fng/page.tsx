import Link from 'next/link';

import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Hero from '../_components/Hero';

import f3HeroImg from '../../../public/f3-refuge-2023-11-09.jpg';

export default function Page() {
  const href = '/fng';
  return (
    <>
      <Header href={href} />
      <main>
        <Hero
          title="NEW TO F3"
          subtitle="WELCOME [FNG]"
          imgUrl={f3HeroImg.src}
        />
        <section className={`bg-gloom leading-tight py-16 px-4`}>
          <h2 className="text-5xl">[F.N.G.]</h2>
          <p className="text-cmu pt-5">
            We appreciate you joining us and there is a lot of information to
            tell you but to avoid overwhelming you here are a few ways to keep
            in touch and know what&apos;s going on in F3 Muletown. If you still
            have questions just ask any of the guys and they&apos;ll help or
            point you in the right direction!
          </p>
          <p className="text-cmu pt-5">
            So, you got past{' '}
            <Link
              href="https://f3nation.com/top-five-eh-excuses/"
              target="_blank"
            >
              our favorite excuses
            </Link>{' '}
            and decided to participate? Greatness.
          </p>
          <p className="text-white pt-5">
            We do not show up at F3 for ourselves. We show up for the man
            standing beside each of us.
          </p>
          <p className="text-cmu pt-5">
            &quot;Here is one undeniable truth that I know about each of us, we
            need authentic relationships with other men who are working to be
            strong fathers, husbands and leaders. Isolation will destroy a man!
            We have the opportunity to change our community and the trajectory
            of our families. Getting in the best shape of your life is just a by
            product. The work out is the magnet, the relationships and community
            with other men will keep bringing you back. Lock shields with us and
            help us accomplish F3&apos;s mission to invigorate male leadership
            in our community.&quot;
          </p>
          <p className="text-cmu pt-5">(DREDD, F3 Founder)</p>
        </section>
        <section className={`bg-iron leading-tight py-16 px-4`}>
          <h2>TIPS FOR YOUR FIRST WORKOUT</h2>
          <ul className="w-10/12 my-0 mx-auto">
            <hr className="my-5" />
            <li>
              When you are first starting, it is important to remember to MODIFY
              as needed during the beatdowns. If you want to go harder - go
              harder. If you have not exercised in a long time, slow down.
              Don&apos;t hurt yourself or even worse, get discouraged. Just show
              up, work hard and give it your best. That is all that matters. We
              are not here competing against one another. We are freaking proud
              of you for showing up at 5:30 in the morning to exercise!
            </li>
            <hr className="my-5" />
            <li>
              Read our{' '}
              <Link
                href="https://f3nation.com/disclaimer-and-notice/"
                target="_blank"
              >
                disclaimer
              </Link>
              , then simply pick a place to post.
            </li>
            <hr className="my-5" />
            <li>
              Visit our <Link href="/workouts">Workouts</Link> page to see what
              site works best for you.
            </li>
            <hr className="my-5" />
            <li>
              Check out the{' '}
              <Link href="https://f3nation.com/lexicon/" target="_blank">
                Lexicon
              </Link>
              . We have a nick name for everything you do. The Lexicon will give
              you a definition behind our secret language.
            </li>
            <hr className="my-5" />
            <li>
              All you need to bring is an open mind and a positive attitude.
              Wear your regular outdoor workout clothes and, unless you have
              farmer hands, consider bringing a pair of gloves.
            </li>
            <hr className="my-5" />
            <li>
              If you are not meeting a friend at your first post, simply show up
              and introduce yourself as an FNG. You&apos;ll be welcomed.
            </li>
            <hr className="my-5" />
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
