import { test, expect } from '@playwright/test';
import { monitorApiCall } from '../utils/apiMonitor';


test('test', async ({ page }) => {
    const checkApi = await monitorApiCall(page, '/api/latest-tools');
    await page.goto ('https://s4e.io/free-security-tools');
  await page.getByRole('button', { name: 'Consent Preferences' }).click();
  await page.getByRole('button', { name: 'Reject All' }).click();
  await page.getByRole('button', { name: 'Consent Preferences' }).click();
  await page.getByRole('button', { name: 'Save My Preferences' }).click();
  await page.locator('.cky-btn-revisit-wrapper').click();
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('link', { name: 'Start 1-Week Trial' }).click();
  await page.getByRole('button', { name: 'See all' }).first().click();
  await page.getByRole('button', { name: 'See all' }).nth(1).click();
  await page.getByRole('link', { name: 'Register now' }).click();
  await page.goto('https://app.s4e.io/sign-in');
  await page.locator('[id="__next"] div').filter({ hasText: 'Welcome to S4E.ioYour' }).nth(1).click();
 await page.goto ('https://s4e.io/free-security-tools');

  await page.getByRole('link', { name: 'Start trial' }).click();
  await page.goto ('https://s4e.io/free-security-tools');
  await page.getByRole('link', { name: 'See the plans' }).click();
});
