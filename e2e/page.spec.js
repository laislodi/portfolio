import { test, expect } from '@playwright/test';

test.describe('Page structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
  });

  test('shows the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Lais Gabrielle Lodi');
  });

  test('shows the full name in the header', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Lais Gabrielle Lodi', level: 1 })).toBeVisible();
  });

  test('navigation menu has 7 links', async ({ page }) => {
    await expect(page.locator('.menu-option a')).toHaveCount(7);
  });

  test('shows locale selector with two buttons', async ({ page }) => {
    await expect(page.locator('.locale-selector')).toBeVisible();
    await expect(page.locator('.locale-selector button')).toHaveCount(2);
  });

  test('all main sections are present in the page', async ({ page }) => {
    await expect(page.locator('header#home')).toBeAttached();
    await expect(page.locator('#projects')).toBeAttached();
    await expect(page.locator('#experience')).toBeAttached();
    await expect(page.locator('#education')).toBeAttached();
    await expect(page.locator('#soft-skills')).toBeAttached();
    await expect(page.locator('#tech-skills')).toBeAttached();
    await expect(page.locator('#contact')).toBeAttached();
  });

  test('LinkedIn link is visible in the header', async ({ page }) => {
    await expect(page.locator('header').getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  });

  test('LinkedIn link opens in a new tab', async ({ page }) => {
    const linkedIn = page.locator('header').getByRole('link', { name: 'LinkedIn' });
    await expect(linkedIn).toHaveAttribute('target', '_blank');
  });

  test('contact section has the heading Contact', async ({ page }) => {
    await expect(page.locator('#contact h1')).toContainText('Contact');
  });
});
