
import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';
import { DataTable } from 'playwright-bdd';
import { Day, Workout } from '@/workouts';

Given('I am on the {string} page', async ({ page }, whichPage: string) => {
  switch (whichPage) {
    case 'workouts':
      await page.goto('/workouts');
      break;
    default:
      await page.goto('/');
      break;
  }
})

Then('I should see a title {string}', async ({ page }, title: string) => {
  await expect(await page.title()).toBe(title);
})

Then('I should see a link to {string} that goes to {string}', async ({ page }, name: string, href: string) => {
  await expect(page.getByRole('link', { name })).toBeVisible();
  await expect(page.getByRole('link', { name })).toHaveAttribute('href', href);
})

Given('the current time is {string}', async ({ page }, date: string) => {
  await page.evaluate((date) => document.setNow(date), date);
  await page.getByLabel('refresh').click();
})

Then('the next workout should be {string} at {string}', async ({ page }, name: string, timeLabel: string) => {
  const firstWorkout = page.getByTestId('workout-list').getByRole('listitem').first();
  await expect(firstWorkout).toContainText(name);
  await expect(firstWorkout).toContainText(timeLabel)
})

Given('the workouts are:', async ({ page }, workoutTable: DataTable) => {
  const workouts = workoutTable.hashes().map(createWorkout);
  await page.evaluate((workouts) => document.setWorkouts(workouts), workouts);
  await page.getByLabel('refresh').click();
});

function createWorkout(workout: Record<string, string>): Workout {
  const [daysStr, time] = workout.time.split(' - ');
  const days = daysStr.split(', ');
  return {
    ao: workout.ao,
    style: 'Beatdown',
    location: {
      href: 'google.com',
      text: 'location',
    },
    dayLabel: workout.dayLabel,
    timeLabel: workout.timeLabel,
    times: [
      {
        day: days as Day[],
        start: time,
      }
    ],
  };
}