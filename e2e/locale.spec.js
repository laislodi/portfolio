import { test, expect } from '@playwright/test';

// Helper to click a locale button by its visible text inside the locale-selector
const clickLocale = (page, locale) =>
  page.locator('.locale-selector button').filter({ hasText: locale }).click();

test.describe('Locale switching', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
  });

  test('loads in English by default', async ({ page }) => {
    await expect(page.locator('header h3')).toContainText('Full Stack Developer');
    await expect(page.locator('.selected-locale')).toContainText('en');
    await expect(page.locator('.unselected-locale')).toContainText('fr-CA');
  });

  test('switches header content to French when fr-CA is clicked', async ({ page }) => {
    await clickLocale(page, 'fr-CA');

    await expect(page.locator('header h3')).toContainText('Développeuse Full Stack');
    await expect(page.locator('.about-me-buttons .about-me')).toContainText('Sur moi');
  });

  test('switches header content back to English when en is clicked', async ({ page }) => {
    await clickLocale(page, 'fr-CA');
    await expect(page.locator('header h3')).toContainText('Développeuse Full Stack');

    await clickLocale(page, 'en');
    await expect(page.locator('header h3')).toContainText('Full Stack Developer');
    await expect(page.locator('.about-me-buttons .about-me')).toContainText('About me');
  });

  test('updates the active locale button class after switching', async ({ page }) => {
    await clickLocale(page, 'fr-CA');

    await expect(page.locator('.selected-locale')).toContainText('fr-CA');
    await expect(page.locator('.unselected-locale')).toContainText('en');
  });

  test('switches menu navigation items to French', async ({ page }) => {
    await clickLocale(page, 'fr-CA');

    await expect(page.locator('.menu-option a').filter({ hasText: 'Projets' })).toBeVisible();
    await expect(page.locator('.menu-option a').filter({ hasText: 'Expérience' })).toBeVisible();
    await expect(page.locator('.menu-option a').filter({ hasText: 'Éducation' })).toBeVisible();
    await expect(page.locator('.menu-option a').filter({ hasText: 'Compétences Générales' })).toBeVisible();
    await expect(page.locator('.menu-option a').filter({ hasText: 'Compétences Techniques' })).toBeVisible();
  });

  test('switches section headings to French', async ({ page }) => {
    await clickLocale(page, 'fr-CA');

    await expect(page.locator('#education h1')).toContainText('Éducation');
    await expect(page.locator('#experience h1')).toContainText('Expérience');
    await expect(page.locator('#projects h1')).toContainText('Projets');
  });

  test('switches section headings back to English', async ({ page }) => {
    await clickLocale(page, 'fr-CA');
    await clickLocale(page, 'en');

    await expect(page.locator('#education h1')).toContainText('Education');
    await expect(page.locator('#experience h1')).toContainText('Experience');
    await expect(page.locator('#projects h1')).toContainText('Projects');
  });
});
