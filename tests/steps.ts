
import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

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
