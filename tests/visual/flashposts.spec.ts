import { login } from '@_src/helpers/ui-actions.helper';
import { expect, test } from '@playwright/test';
import { userData } from 'test-data/user.data';

/* 
Simple example of DDT tests generated from test data
*/

test.describe('Sample visual tests', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, userData);
    await page.goto('/flashposts.html');
  });

  test('flashpost create modal', async ({ page }) => {
    // Act:
    await page.locator('.create-flashpost-btn').click();

    // Assert:
    await expect(page.locator('.add-new-flashpost-panel')).toHaveScreenshot();
  });
});
