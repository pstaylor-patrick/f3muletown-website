export type Style = 'Murph' | 'Beatdown' | 'Run' | 'Ruck' | 'Trail Run' | 'Rucks & Sandbags' | 'Weight Lifting' | '3rd F (Faith)';
export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export interface Workout {
  ao: string,
  style: Style,
  location: Location,
  dayLabel: string,
  timeLabel: string,
  times: Time[],
}
interface Location {
  text: string;
  href: string;
}
interface Time {
  day: Day[];
  start: string;
}

const workouts: Workout[] = [
  {
    ao: 'Murph Monday',
    style: 'Murph',
    location: {
      href: "https://goo.gl/maps/UEULdFoyEpTRwLLo9",
      text: "Woodland Park (11th st Entrance)"
    },
    dayLabel: 'Monday',
    timeLabel: '5:25 AM - 6:15 AM',
    times: [
      {
        day: ['Monday'],
        start: '05:25',
      }
    ]
  },
  {
    ao: "The Phoenix",
    style: "Beatdown",
    location: {
      href: "https://goo.gl/maps/UEULdFoyEpTRwLLo9",
      text: "Woodland Park (11th st Entrance)"
    },
    dayLabel: "Monday",
    timeLabel: "5:30 AM - 6:15 AM",
    times: [
      {
        day: ["Monday"],
        start: "05:30",
      }
    ]
  },
  {
    ao: "Arena",
    style: "Rucks & Sandbags",
    location: {
      href: "https://goo.gl/maps/8UenhCFvXi6KQFWaA",
      text: "Riverwalk Park (Basketball Court)"
    },
    dayLabel: "Tuesday",
    timeLabel: "5:15 AM - 6:15 AM",
    times: [
      {
        day: ["Tuesday"],
        start: "05:15",
      }
    ]
  },
  {
    ao: "Compass",
    style: "Beatdown",
    location: {
      href: "https://goo.gl/maps/BvGZ49ycjCovcZbP6",
      text: "Columbia Public Square"
    },
    dayLabel: "Tuesday",
    timeLabel: "5:30 AM - 6:15 AM",
    times: [
      {
        day: ["Tuesday"],
        start: "05:30",
      }
    ]
  },
  {
    ao: "Slag Mountain",
    style: "Run",
    location: {
      href: "https://goo.gl/maps/ps3AKHmqueDevzQt7",
      text: "Maury County Park (Kids Kingdom)"
    },
    dayLabel: "Wednesday",
    timeLabel: "5:20 AM - 6:15 AM",
    times: [
      {
        day: ["Wednesday"],
        start: "05:20",
      }
    ]
  },
  {
    ao: "Iron Mule",
    style: "Weight Lifting",
    location: {
      href: "https://goo.gl/maps/ps3AKHmqueDevzQt7",
      text: "Maury County Park (Kids Kingdom)"
    },
    dayLabel: "Wednesday",
    timeLabel: "5:30 AM - 6:15 AM",
    times: [
      {
        day: ["Wednesday"],
        start: "05:30",
      }
    ]
  },
  {
    ao: "The Refuge",
    style: "Trail Run",
    location: {
      href: "https://goo.gl/maps/iQJLUJ5kk3hj7SwV9",
      text: "Chickasaw Trace Park"
    },
    dayLabel: "Thursday",
    timeLabel: "5:30 AM - 6:15 AM",
    times: [
      {
        day: ["Thursday"],
        start: "05:30",
      }
    ]
  },
  {
    ao: "Ruck and Roll",
    style: "Ruck",
    location: {
      href: "https://goo.gl/maps/8UenhCFvXi6KQFWaA",
      text: "Riverwalk Park (Basketball Court)"
    },
    dayLabel: "Thursday",
    timeLabel: "5:30 AM - 6:15 AM",
    times: [
      {
        day: ["Thursday"],
        start: "05:30",
      }
    ]
  },
  {
    ao: "The Challenge",
    style: "Beatdown",
    location: {
      href: "https://goo.gl/maps/Rv4udm1mpBXZFdGy8",
      text: "Columbia State Community College"
    },
    dayLabel: "Friday",
    timeLabel: "5:30 AM - 6:15 AM",
    times: [
      {
        day: ["Friday"],
        start: "05:30",
      }
    ]
  },
  {
    ao: "Darkhorse",
    style: "Beatdown",
    location: {
      href: "https://goo.gl/maps/8UenhCFvXi6KQFWaA",
      text: "Riverwalk Park (Basketball Court)"
    },
    dayLabel: "Saturday",
    timeLabel: "6:00 AM - 7:00 AM",
    times: [
      {
        day: ["Saturday"],
        start: "06:00",
      }
    ]
  },
];

export function getWorkouts(): Workout[] {
  return workouts;
}

export function setWorkouts(newWorkouts: Workout[]) {
  // clear the array
  workouts.length = 0;
  workouts.push(...newWorkouts);
}