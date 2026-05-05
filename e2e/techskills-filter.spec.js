import { test, expect } from '@playwright/test';

test.describe('TechSkills filter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
    await page.locator('#tech-skills').scrollIntoViewIfNeeded();
  });

  const filterLabel = (page, name) => page.locator('#tech-skills').getByLabel(name);
  // Use h4 text rather than img alt — intlayer wraps plain strings so alt may not be a plain string
  const skill = (page, name) => page.locator('#tech-skills h4').filter({ hasText: name });

  test('renders all filter category checkboxes', async ({ page }) => {
    const categories = ['Select All', 'Frontend', 'Backend', 'API', 'DevOps', 'Collaboration', 'Testing', 'Linux', 'Database'];
    for (const category of categories) {
      await expect(filterLabel(page, category)).toBeVisible();
    }
  });

  test('all filter checkboxes are checked by default', async ({ page }) => {
    const categories = ['Select All', 'Frontend', 'Backend', 'API', 'DevOps'];
    for (const category of categories) {
      await expect(filterLabel(page, category)).toBeChecked();
    }
  });

  test('shows frontend skills (React) on initial load', async ({ page }) => {
    await expect(skill(page, 'React')).toBeVisible();
  });

  test('shows backend skills (Python) on initial load', async ({ page }) => {
    await expect(skill(page, 'Python')).toBeVisible();
  });

  test('hides frontend skills when Frontend is unchecked', async ({ page }) => {
    await filterLabel(page, 'Frontend').uncheck();

    await expect(skill(page, 'React')).not.toBeVisible();
    await expect(skill(page, 'Typescript')).not.toBeVisible();
  });

  test('keeps non-frontend skills visible when Frontend is unchecked', async ({ page }) => {
    await filterLabel(page, 'Frontend').uncheck();

    await expect(skill(page, 'Python')).toBeVisible();
    await expect(skill(page, 'Docker')).toBeVisible();
  });

  test('hides backend skills when Backend is unchecked', async ({ page }) => {
    await filterLabel(page, 'Backend').uncheck();

    await expect(skill(page, 'Python')).not.toBeVisible();
    await expect(skill(page, 'Django')).not.toBeVisible();
  });

  test('hides all skills when Select All is unchecked', async ({ page }) => {
    await filterLabel(page, 'Select All').uncheck();

    await expect(skill(page, 'React')).not.toBeVisible();
    await expect(skill(page, 'Python')).not.toBeVisible();
    await expect(skill(page, 'Docker')).not.toBeVisible();
  });

  test('restores all skills when Select All is re-checked', async ({ page }) => {
    await filterLabel(page, 'Select All').uncheck();
    await filterLabel(page, 'Select All').check();

    await expect(skill(page, 'React')).toBeVisible();
    await expect(skill(page, 'Python')).toBeVisible();
    await expect(skill(page, 'Docker')).toBeVisible();
  });

  test('unchecking one category unchecks Select All', async ({ page }) => {
    await filterLabel(page, 'Frontend').uncheck();

    await expect(filterLabel(page, 'Select All')).not.toBeChecked();
  });
});
