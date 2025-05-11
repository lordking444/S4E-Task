import { test, expect } from '@playwright/test';
import { monitorApiCall } from '../utils/apiMonitor';


test('test', async ({ page }) => {
  const checkApi = await monitorApiCall(page, '/api/latest-tools');

await page.goto('https://s4e.io/free-security-tools');

  

  await page.getByRole('button', { name: 'Reject All' }).click();
  await page.getByRole('link', { name: 'Start 1-Week Trial' }).click();
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').click();
  await page.locator('section').filter({ hasText: 'Full scan your assets with all security checks.Start Full ScanOr choose your' }).getByPlaceholder('example.io, app.example.io or').fill('qw');
  await page.getByRole('heading', { name: 'Latest Tools' }).click();
  await page.locator('.css-85flby > div > div').first().click();
  await page.locator('.css-85flby').dblclick();
  await page.locator('section').filter({ hasText: 'CVE-2025-3248' }).getByLabel('Previous').click();
  await page.locator('section').filter({ hasText: 'CVE-2025-3248' }).getByLabel('Previous').click();
  await page.getByText('Stack Trace Error Detection').nth(1).click();
  await page.locator('div:nth-child(2) > div > div > .MuiPaper-root > .SingleScanCard_singleScanCardBody__iNcOM > .SingleScanCard_singleScanCardHeader__OX_p_ > .MuiButtonBase-root').first().click();
  await page.getByText('CVE-2024-13322 Scanner').nth(1).click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.getByRole('button', { name: 'High' }).nth(1).click();
  await page.locator('div:nth-child(2) > div > div > .MuiPaper-root > a').first().click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.locator('div:nth-child(2) > div > .MuiPaper-root > a').first().click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.getByRole('button', { name: 'Low' }).nth(1).click();
  await page.getByText('Not Found Page Detection Scanner').nth(1).click();
  await page.getByText('CVE-2023-45878 Scanner').nth(1).click();


  await page.locator('div:nth-child(2) > div:nth-child(2) > .MuiPaper-root > .SingleScanCard_singleScanCardBody__iNcOM > .SingleScanCard_singleScanCardHeader__OX_p_ > .MuiButtonBase-root').first().click();
  await page.locator('div:nth-child(2) > div:nth-child(2) > .MuiPaper-root > a').first().click();
  await page.getByText('CVE-2022-42118 Scanner').nth(1).click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.locator('div:nth-child(3) > .MuiPaper-root > .SingleScanCard_singleScanCardBody__iNcOM > .SingleScanCard_singleScanCardHeader__OX_p_ > .MuiButtonBase-root').first().click();
  await page.getByRole('paragraph').filter({ hasText: 'CVE-2024-38475 Scanner' }).click();
  await page.locator('div:nth-child(3) > .MuiPaper-root > a').first().click();
  await page.locator('div:nth-child(2) > div:nth-child(3) > .MuiPaper-root > .SingleScanCard_singleScanCardBody__iNcOM > .SingleScanCard_singleScanCardHeader__OX_p_ > .MuiButtonBase-root').first().click();
  await page.locator('div:nth-child(2) > div:nth-child(3) > .MuiPaper-root > a').first().click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.locator('section').filter({ hasText: 'CVE-2025-3248' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'CVE-2025-3248' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'CVE-2025-3248' }).getByLabel('Next').click();
  await page.getByRole('link', { name: 'Scan now' }).nth(1).click();
  await page.locator('.MuiBox-root > div:nth-child(6)').first().click();
  await page.locator('.css-85flby > div > div:nth-child(5)').click();
  await page.locator('.css-85flby > div > div:nth-child(4)').click();
  await page.locator('.css-85flby > div').first().click();
});