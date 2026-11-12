import { test, expect } from '@playwright/test';
//login test
test('login test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Password123');
  await page.locator('#submit').click();

  await expect(page).toHaveURL(/logged-in-successfully/);
});