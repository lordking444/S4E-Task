import { test, expect } from '@playwright/test';
import { monitorApiCall } from '../utils/apiMonitor';

test('test', async ({ page }) => {
    const checkApi = await monitorApiCall(page, '/api/latest-tools');
  await page.goto('https://s4e.io/free-security-tools');
  
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByRole('button').first().click();
  await page.locator('section').filter({ hasText: 'RecommendedKeycloak Panel' }).getByLabel('Previous').click();
  
  await page.getByText('Online Private Key Scanner').first().click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.getByRole('paragraph').filter({ hasText: 'Email Harvester' }).click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.locator('div').filter({ hasText: /^Free URL Fuzzer Online$/ }).nth(1).click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByRole('button').first().click();
  await page.getByRole('paragraph').filter({ hasText: 'API Endpoint Scanner' }).click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.getByText('Web Application Firewall (WAF').nth(1).click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByRole('button').first().click();
  await page.getByRole('paragraph').filter({ hasText: 'Generic Command Injection' }).click();
  await page.goto('https://s4e.io/free-security-tools');
  await page.locator('div:nth-child(9) > section > div:nth-child(2) > .css-1ofqig9 > .css-151jeqn > div > div:nth-child(6)').click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.getByRole('paragraph').filter({ hasText: 'Burp Suite Rest API Server' }).click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.getByRole('paragraph').filter({ hasText: 'Subdomain Finder Online' }).click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.getByRole('paragraph').filter({ hasText: 'Nginx Version Detection' }).click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.locator('section').filter({ hasText: 'Most usedKeycloak Panel' }).getByLabel('Next').click();
  await page.getByRole('paragraph').filter({ hasText: 'Wordpress Server-Side-Request' }).click();
});