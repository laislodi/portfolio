import { test, expect } from '@playwright/test';

test('page loads and shows the portfolio', async ({ page }) => {
  await page.goto('/portfolio/');
  await expect(page).toHaveTitle(/Lais Gabrielle Lodi/i);
});
