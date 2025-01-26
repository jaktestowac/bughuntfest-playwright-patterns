import { login } from '@_src/helpers/ui-actions.helper';
import { expect, test } from '@playwright/test';
import { userData } from 'test-data/user.data';

/* 
Simple example of DDT tests generated from test data
*/

test.describe('Sample visual tests', () => {
  test('flashpost create modal', async ({ page }) => {
    // Arrange:
    await login(page, userData);
    await page.goto('/flashposts.html');

    // Act:
    await page.locator('.create-flashpost-btn').click();

    // Assert:
    await expect(page.locator('.add-new-flashpost-panel')).toHaveScreenshot();
  });

  test('(❌ will fail) dynamic weather charts', async ({ page }) => {
    // Arrange:
    await page.goto('/practice/charts-2-multi.html');

    // Assert:
    await expect(page.locator('#sampleDynamicChart')).toHaveScreenshot();
  });
});
