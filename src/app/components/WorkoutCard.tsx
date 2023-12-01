import Link from "next/link";

export const WorkoutStyles = {
  MURPH: "Murph",
  BEATDOWN: "Beatdown",
  RUN: "Run",
  RUCKING: "Rucking",
};
export const WorkoutDays = {
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday",
};
export const WorkoutTimes = {
  "0520": "5:20 AM - 6:15 AM",
  "0525": "5:25 AM - 6:15 AM",
  "0530": "5:30 AM - 6:15 AM",
  "0515": "5:15 AM - 6:15 AM",
  "0600": "6:00 AM - 7:00 AM",
};

interface WorkoutCardProps {
  ao: string;
  q: string;
  avgAttendance: number;
  style: string;
  location: {
    href: string;
    text: string;
  };
  day: string;
  time: string;
}

export default function WorkoutCard({
  ao,
  q,
  avgAttendance,
  style,
  location,
  day,
  time,
}: WorkoutCardProps) {
  return (
    <div className="bg-dirt py-5 px-4">
      <h3>{ao}</h3>
      <p className="text-cmu">
        Led by <span className="text-white">{q}</span> tomorrow
      </p>
      <ul className="py-2">
        <li className="inline-block py-px px-4 bg-sand rounded-xl">
          {avgAttendance}
        </li>
        <li className="inline-block py-px px-4 bg-sand rounded-xl mx-2">
          {style}
        </li>
      </ul>
      <p className="font-bold">
        <Link href={location.href} target="_blank">
          {location.text}
        </Link>
      </p>
      <p className="font-md">
        {day}: {time}
      </p>
    </div>
  );
}
