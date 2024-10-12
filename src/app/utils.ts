'use client';
import { Workout } from "@/workouts";
import { addWeeks, addYears, closestTo, compareAsc, parse } from "date-fns";

export const dateFormat = 'EEEE HH:mm';

export function sortWorkoutsNew(workouts: Workout[]): Workout[] {
  const sorted = workouts.sort((a, b) => {
    const dateCompare = compareAsc(getNextTime(a), getNextTime(b))
    return dateCompare !== 0 ? dateCompare : a > b ? 1 : -1;
  });
  return [...sorted];
}

function getNextTime(workout: Workout) {
  const now = getNow();
  const dates = workout.times.flatMap((time) => {

    return time.day.map((day) => {
      const workoutDate = parse(`${day} ${time.start}`, dateFormat, now);
      // if the day has already passed for this week, it's for next week
      return compareAsc(now, workoutDate) === 1
        ? addWeeks(workoutDate, 1)
        : workoutDate;
    });
  });
  return closestTo(now, dates) ?? addYears(now, 100);
}

let testNow: Date | undefined;
export function getNow() {
  return testNow ? testNow : new Date();
}

export function setNow(date: string | undefined) {
  testNow = date ? parse(date, dateFormat, new Date()) : undefined;
}

declare global {
  interface Document {
    setNow: (date: string | undefined) => void;
    getNow: () => Date;
  }
}
if (document) {
  document.setNow = setNow;
  document.getNow = getNow;
}