// @ts-check
const { test, expect } = require('@playwright/test');



test('Check S4E website title', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  await expect(page).toHaveTitle(/s4e/);
})
