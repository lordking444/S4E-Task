import { test, expect } from '@playwright/test';
import { monitorApiCall } from '../utils/apiMonitor';

test('test', async ({ page }) => {
  const checkApi = await monitorApiCall(page, '/api/latest-tools');
  await page.goto('https://s4e.io/free-security-tools');
  await page.getByText('Update', { exact: true }).click();
  await page.getByRole('columnheader', { name: 'Tool Name' }).locator('svg').click();
  await page.getByRole('columnheader', { name: 'Severity' }).first().click();
  await page.getByLabel('Stack Trace Error Detection Scanner').click();

  //There could be a false-positive error on scanner produtcs due to the date and time of the test executed. I tried to ->
  // remove dates that comes with selected UI but it caused even more errors on the report. 


  await page.getByRole('row', { name: 'Stack Trace Error Detection Scanner 06 May 2025 2:20 PM Medium' }).getByRole('button').click();
  await page.getByLabel('Not Found Page Detection Scanner').click();
  await page.getByRole('row', { name: 'Not Found Page Detection Scanner 06 May 2025 2:12 PM Low' }).getByRole('button').click();
  await page.getByLabel('CVE-2022-42118 Scanner').click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.getByRole('row', { name: 'CVE-2022-42118 Scanner 05 May' }).getByRole('button').click();
  await page.getByLabel('CVE-2024-13322 Scanner').click();
  await page.getByRole('row', { name: 'CVE-2024-13322 Scanner 05 May' }).getByRole('button').click();
  await page.getByLabel('CVE-2023-45878 Scanner').click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.getByRole('row', { name: 'CVE-2023-45878 Scanner 05 May' }).getByRole('button').click();
});