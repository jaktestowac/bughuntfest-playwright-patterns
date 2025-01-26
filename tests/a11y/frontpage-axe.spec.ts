import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('GAD homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('(❌ will fail!) should not have any automatically detectable accessibility issues', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('(❌ will fail!) should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
