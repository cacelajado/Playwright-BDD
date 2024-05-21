import { test, expect } from '@playwright/test';

test('GitHub login test', async ({ page }) => {
  // Navigate to GitHub
  await page.goto('https://github.com');

  // Verify the title
  await expect(page.title()).resolves.toMatch('GitHub: Let’s build from here · GitHub');

  // Click on the sign-in button
  await page.waitForSelector('div.position-relative.mr-lg-3.d-lg-inline-block >> a[href="/login"]');
  await page.click('div.position-relative.mr-lg-3.d-lg-inline-block >> a[href="/login"]');

  // Fill in the username and password
  await page.fill('input[name="login"]', 'username');
  await page.fill('input[name="password"]', 'password');

  // Click on the submit button
  await page.click('input[name="commit"]');

  // Verify successful login by checking that the sign-in button no longer exists
  await expect(page.locator('a[href="/login"]')).toBeHidden();
});