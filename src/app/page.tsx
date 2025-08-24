import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Header from './_components/Header';
import Footer from './_components/Footer';
import Button from './_components/Button';
import Hero from './_components/Hero';

import { fetchAllRegions, getRegionSlug } from '../utils/fetchContent';

// #region images
import f3White from '../../public/f3-white.png';
import f3HeroImg from '../../public/f3-compass-2023-11-14.jpg';
// #endregion

import f3MuletownWhite from '../../public/f3-muletown-white.png';
import f3ShovelFlag from '../../public/f3-shovel-flag.png';
import CorePrinciple from './_components/CorePrinciple';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'F3 Nation Regions',
    description: 'Find an F3 region near you',
  };
}

export default async function Page() {
  const regions = await fetchAllRegions();
  const href = '/';

  return (
    <>
      <Header href={href} />
      <main>
        <Hero
          title="F3 REGIONS"
          subtitle="FIND A REGION NEAR YOU"
          imgUrl={f3HeroImg.src}
        />
        <section className={`bg-gloom py-16 px-4`}>
          <Image
            src={f3White}
            alt="F3 White"
            width={128}
            height={128}
            className="my-0 mx-auto pb-5"
          />
          <h2>REGIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {regions.map((region) => (
              <Link 
                key={region.region_name}
                href={`/regions/${getRegionSlug(region.region_name)}`}
                className="bg-dirt p-6 rounded-lg hover:bg-opacity-80 transition-all"
              >
                <h3 className="text-2xl mb-2">{region.region_name}</h3>
                <p className="text-cmu mb-4">{region.region_city}, {region.region_state}</p>
                <p className="text-sm opacity-70">{region.pax_count}+ PAX</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
