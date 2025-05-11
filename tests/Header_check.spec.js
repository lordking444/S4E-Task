import { test, expect } from '@playwright/test';
import { monitorApiCall } from '../utils/apiMonitor';

test('test', async ({ page }) => {
  const checkApi = await monitorApiCall(page, '/api/latest-tools');
  await page.goto('https://s4e.io/free-security-tools');
  await page.locator('header').getByRole('link', { name: 'S4E Security For Everyone' }).click();
  await page.getByRole('button', { name: 'Platform', exact: true }).click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.getByRole('button', { name: 'Features' }).click();
  await page.getByRole('button', { name: 'Free Security Check Protect' }).click();
  await page.getByRole('button', { name: 'Features' }).click();
  await page.getByRole('button', { name: 'AI Based Security Scanner' }).click();
  await page.getByRole('button', { name: 'Plans' }).click();
  await page.getByRole('button', { name: 'Everyone' }).click();
  await page.getByRole('button', { name: 'Expert' }).click();
  await page.getByRole('button', { name: 'Elite' }).click();
  await page.getByRole('button', { name: 'Pricing' }).click();
  await page.getByRole('button', { name: 'Free Tools' }).click();
  await page.getByRole('button', { name: 'Extension' }).click();
  await page.getByRole('button', { name: 'Blog' }).click();
  await page.getByRole('button', { name: 'How To' }).click();
  await page.getByRole('button', { name: 'Whitepapers' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Join' }).click();
});