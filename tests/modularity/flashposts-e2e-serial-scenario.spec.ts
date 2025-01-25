import { createFlashPost, login } from '@_src/helpers/ui-actions.helper';
import { expect, test } from '@playwright/test';
import { sampleFlashpost } from 'test-data/flashpost.data';
import { userData } from 'test-data/user.data';

/* 
Simple example of e2e scenarios based on serial execution.
Each test case is dependent on the previous one.
Each test is a step in the scenario.
*/
test.describe.configure({ mode: 'serial' });

test.describe('Flashpost e2e scenario (serial)', () => {
  const testFlashpost = sampleFlashpost;

  test('should successfully create a new flashpost', async ({ page }) => {
    // Arrange:
    await login(page, userData);
    await page.goto('/flashposts.html');

    // Act:
    await createFlashPost(page, testFlashpost);

    // Assert:
    await expect(page.locator('.flashpost-container').nth(0)).toContainText(testFlashpost.content);
  });

  test('should display existing flashpost after re-login', async ({ page }) => {
    // Act:
    await login(page, userData);
    await page.goto('/flashposts.html');

    // Assert:
    await expect(page.locator('.flashpost-container').nth(0)).toContainText(testFlashpost.content);
  });

  test('should hide flashpost content from non-authenticated users', async ({ page }) => {
    // Act:
    await page.goto('/flashposts.html');

    // Assert:
    await expect(page.locator('.flashpost-container').nth(0)).not.toContainText(testFlashpost.content);
  });
});
