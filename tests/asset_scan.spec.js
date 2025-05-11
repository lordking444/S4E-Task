import { test, expect } from '@playwright/test';
import { monitorApiCall } from '../utils/apiMonitor';
test('test', async ({ page }) => {
  const checkApi = await monitorApiCall(page, '/api/latest-tools');
  await page.goto('https://s4e.io/free-security-tools');
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').click();
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').fill('q');
  await page.getByRole('button', { name: 'Start Full Scan' }).first().click();
  
  await page.getByRole('button', { name: 'Retry' }).click();
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').click();
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').fill('s4e.io');
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').press('Enter');
  await page.goto('https://s4e.io/free-security-tools');
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').click();
  await page.getByRole('button', { name: 'See all' }).first().click();
  await page.getByRole('button', { name: 'See all' }).nth(1).click();
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').click();
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').fill('1.1.1.1');
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').press('Enter');
});