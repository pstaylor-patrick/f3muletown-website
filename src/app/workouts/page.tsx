import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Button from "../components/Button";
import WorkoutCard, {
  WorkoutStyles,
  WorkoutDays,
  WorkoutTimes,
} from "../components/WorkoutCard";

import f3HeroImg from "../../../public/f3-darkhorse-2023-11-04.jpg";

export default function fng() {
  const href = "/workouts";
  const mapDetails = {
    lat: 35.6739869,
    lon: -87.0334081,
    zoom: 10.86,
  };
  const mapUrl = `https://map.f3nation.com/?lat=${mapDetails.lat}&lon=${mapDetails.lon}&zoom=${mapDetails.zoom}`;
  const workouts = [
    {
      ao: "Murph Monday",
      q: "Ma'am",
      avgAttendance: 9,
      style: WorkoutStyles.MURPH,
      location: {
        href: "https://goo.gl/maps/UEULdFoyEpTRwLLo9",
        text: "Woodland Park (11th st Entrance)",
      },
      day: WorkoutDays.MONDAY,
      time: WorkoutTimes["0525"],
    },
  ];
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
          <h2>JOIN US TOMORROW</h2>
          <p className="text-cmu pb-10">
            Just show up and introduce yourself as an{" "}
            <Link href="/fng">FNG</Link>, you will be welcomed!
          </p>
          <Button
            href="https://f3near.me"
            text="FIND NEAREST TO ME"
            target="_blank"
          />
          <div className="my-10"></div>
          <ul>
            {workouts.map((w, i) => (
              <li key={i}>
                <WorkoutCard
                  ao={w.ao}
                  q={w.q}
                  avgAttendance={0}
                  style={w.style}
                  location={w.location}
                  day={w.day}
                  time={w.time}
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
