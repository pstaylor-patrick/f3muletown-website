'use client';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Hero from '../_components/Hero';
import Button from '../_components/Button';
import WorkoutCard from '../_components/WorkoutCard';

/** replace with a regional image */
import f3HeroImg from '../../../public/f3-darkhorse-2023-11-04.jpg';

import en from '../../locales/en.json';
import { getWorkouts, setWorkouts } from '@/workouts'; 
import { getNow, setNow, sortWorkoutsNew } from '../utils';
import { useEffect, useState } from 'react';

export default function Page() {
  const [_workouts, setWorkoutsState] = useState(sortWorkoutsNew(getWorkouts()));
  // setup test helper functions
  useEffect(() => {
    document.setWorkouts = setWorkouts;
    document.setNow = setNow;
    document.getNow = getNow;
  }, []);
  const href = '/workouts';
  const mapDetails = {
    lat: en.region_map_lat,
    lon: en.region_map_lon,
    zoom: en.region_map_zoom,
  };
  const mapUrl = `https://map.f3nation.com/?lat=${mapDetails.lat}&lon=${mapDetails.lon}&zoom=${mapDetails.zoom}`;
  const today = new Date().getDay();
  const saturday = 6;
  return (
    <>
      <Header href={href} />
      <main>
        <Hero
          title="WORKOUTS"
          subtitle="FREE BEATDOWNS 6X/WEEK"
          imgUrl={f3HeroImg.src}
        />
        <section className={`bg-iron leading-tight py-16 px-4`}>
          <h2>AREAS OF OPERATION</h2>
          <p className="text-cmu pt-5">
            F3 workouts are held in any weather conditions, free of charge and
            open to men of all ages.
          </p>
          <p className="text-cmu pt-5 pb-10">
            Find a workout location [AO] below.
          </p>
          <iframe
            src={mapUrl}
            className="w-full pb-10"
            style={{ height: 500 }}
          />
          <Button href={mapUrl} text="VIEW FULL SCREEN" target="_blank" />
        </section>
        <section className={`bg-gloom leading-tight py-16 px-4`}>
          <h2 className="py-5">JOIN US 
            &nbsp;
            <button aria-label="refresh" onClick={() => setWorkoutsState(sortWorkoutsNew(getWorkouts()))}>🔄</button>
          </h2>
          <ul data-testid="workout-list">
            {_workouts.map((w, i) => (
              <li key={i} className={i > 0 ? 'pt-5' : ''}>
                <WorkoutCard
                  ao={w.ao}
                  style={w.style}
                  location={w.location}
                  day={w.dayLabel}
                  time={w.timeLabel}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
