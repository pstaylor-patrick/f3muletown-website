import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Button from "../components/Button";
import WorkoutCard, {
  WorkoutStyles,
  WorkoutDays,
  WorkoutTimes,
  workoutsTomorrow,
  workoutsAnotherDay,
} from "../components/WorkoutCard";

import f3HeroImg from "../../../public/f3-darkhorse-2023-11-04.jpg";

export default function fng() {
  const href = "/workouts";
  const mapDetails = {
    lat: 35.6440534,
    lon: -87.095208,
    zoom: 12,
  };
  const mapUrl = `https://map.f3nation.com/?lat=${mapDetails.lat}&lon=${mapDetails.lon}&zoom=${mapDetails.zoom}`;
  const workouts = [
    {
      ao: "Murph Monday",
      // q: "Ma'am",
      //   avgAttendance: 9,
      style: WorkoutStyles.MURPH,
      location: {
        href: "https://goo.gl/maps/UEULdFoyEpTRwLLo9",
        text: "Woodland Park (11th st Entrance)",
      },
      day: WorkoutDays.MONDAY,
      time: WorkoutTimes["0525"],
    },
    {
      ao: "The Phoenix",
      //   q: "Carmen Sandiego",
      //   avgAttendance: 9,
      style: WorkoutStyles.BEATDOWN,
      location: {
        href: "https://goo.gl/maps/UEULdFoyEpTRwLLo9",
        text: "Woodland Park (11th st Entrance)",
      },
      day: WorkoutDays.MONDAY,
      time: WorkoutTimes["0530"],
    },
    {
      ao: "Arena",
      //   q: "Spew",
      //   avgAttendance: 9,
      style: WorkoutStyles.RUCKS_SANDBAGS,
      location: {
        href: "https://goo.gl/maps/8UenhCFvXi6KQFWaA",
        text: "Riverwalk Park (Basketball Court)",
      },
      day: WorkoutDays.TUESDAY,
      time: WorkoutTimes["0515"],
    },
    {
      ao: "Compass",
      // q: "Squatter",
      //   avgAttendance: 9,
      style: WorkoutStyles.BEATDOWN,
      location: {
        href: "https://goo.gl/maps/BvGZ49ycjCovcZbP6",
        text: "Columbia Public Square",
      },
      day: WorkoutDays.TUESDAY,
      time: WorkoutTimes["0530"],
    },
    {
      ao: "Slag Mountain",
      // q: "Bachelor",
      //   avgAttendance: 9,
      style: WorkoutStyles.RUN,
      location: {
        href: "https://goo.gl/maps/ps3AKHmqueDevzQt7",
        text: "Maury County Park (Kids Kingdom)",
      },
      day: WorkoutDays.WEDNESDAY,
      time: WorkoutTimes["0520"],
    },
    {
      ao: "Iron Mule",
      // q: "Unicycle",
      //   avgAttendance: 9,
      style: WorkoutStyles.WEIGHT_LIFTING,
      location: {
        href: "https://goo.gl/maps/ps3AKHmqueDevzQt7",
        text: "Maury County Park (Kids Kingdom)",
      },
      day: WorkoutDays.WEDNESDAY,
      time: WorkoutTimes["0530"],
    },
    {
      ao: "The Refuge",
      // q: "Numbers",
      //   avgAttendance: 9,
      style: WorkoutStyles.TRAIL_RUN,
      location: {
        href: "https://goo.gl/maps/iQJLUJ5kk3hj7SwV9",
        text: "Chickasaw Trace Park",
      },
      day: WorkoutDays.THURSDAY,
      time: WorkoutTimes["0530"],
    },
    {
      ao: "Ruck and Roll",
      // q: "Carmen Sandiego",
      //   avgAttendance: 9,
      style: WorkoutStyles.RUCKING,
      location: {
        href: "https://goo.gl/maps/8UenhCFvXi6KQFWaA",
        text: "Riverwalk Park (Basketball Court)",
      },
      day: WorkoutDays.THURSDAY,
      time: WorkoutTimes["0530"],
    },
    {
      ao: "The Challenge",
      // q: "Dr. Quinn",
      //   avgAttendance: 9,
      style: WorkoutStyles.BEATDOWN,
      location: {
        href: "https://goo.gl/maps/Rv4udm1mpBXZFdGy8",
        text: "Columbia State Community College",
      },
      day: WorkoutDays.FRIDAY,
      time: WorkoutTimes["0530"],
    },
    {
      ao: "Outpost",
      // q: "The Boot",
      //   avgAttendance: 9,
      style: WorkoutStyles.THIRD_F,
      location: {
        href: "https://goo.gl/maps/j3YiN4xen7mRy8RK8",
        text: "Maury County Park (Monsanto Pavilion)",
      },
      day: WorkoutDays.THIRD_FRIDAY,
      time: WorkoutTimes["0515"],
    },
    {
      ao: "QSource",
      // q: "Baguette",
      //   avgAttendance: 9,
      style: WorkoutStyles.THIRD_F,
      location: {
        href: "https://goo.gl/maps/j3YiN4xen7mRy8RK8https://maps.app.goo.gl/bCjzyzhA35ba5m818",
        text: "Maury County Park (Baseball Pavilion)",
      },
      day: WorkoutDays.LAST_FRIDAY,
      time: WorkoutTimes["0530"],
    },
    {
      ao: "Darkhorse",
      // q: "Go Pee",
      //   avgAttendance: 9,
      style: WorkoutStyles.BEATDOWN,
      location: {
        href: "https://goo.gl/maps/8UenhCFvXi6KQFWaA",
        text: "Riverwalk Park (Basketball Court)",
      },
      day: WorkoutDays.SATURDAY,
      time: WorkoutTimes["0600"],
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
          {workoutsTomorrow(workouts).length > 0 ? (
            <>
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
                {workoutsTomorrow(workouts).map((w, i) => (
                  <li key={i} className={i > 0 ? "pt-5" : ""}>
                    <WorkoutCard
                      ao={w.ao}
                      q={w.q}
                      avgAttendance={w.avgAttendance}
                      style={w.style}
                      location={w.location}
                      day={w.day}
                      time={w.time}
                    />
                  </li>
                ))}
              </ul>
              <h2 className="py-5">OR ANOTHER TIME</h2>
            </>
          ) : (
            <h2 className="py-5">JOIN US</h2>
          )}
          <ul>
            {workoutsAnotherDay(workouts).map((w, i) => (
              <li key={i} className={i > 0 ? "pt-5" : ""}>
                <WorkoutCard
                  ao={w.ao}
                  q={w.q}
                  avgAttendance={w.avgAttendance}
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
