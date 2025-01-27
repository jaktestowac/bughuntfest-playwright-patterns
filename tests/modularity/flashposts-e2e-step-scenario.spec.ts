import { generateFlashPost } from '@_src/helpers/helpers';
import { createFlashPost, login } from '@_src/helpers/ui-actions.helper';
import { expect, test } from '@playwright/test';
import { userData } from 'test-data/user.data';

/* 
Simple example of e2e scenarios using test steps.
Each step is dependent on the previous one.
All steps are encapsulated in a single test case.
*/

test.describe('Flashpost e2e step scenario', () => {
  let testFlashpost: FlashPost;

  test.beforeAll(async ({}) => {
    testFlashpost = generateFlashPost();
  });

  test('complete flashpost lifecycle', async ({ page }) => {
    await test.step('create new flashpost', async () => {
      // Arrange:
      await login(page, userData);
      await page.goto('/flashposts.html');

      // Act:
      await createFlashPost(page, testFlashpost);

      // Assert:
      await expect(page.locator('.flashpost-container').nth(0)).toContainText(testFlashpost.content);
    });

    await test.step('verify flashpost persistence after re-login', async () => {
      // Act:
      await page.goto('/flashposts.html');

      // Assert:
      await expect(page.locator('.flashpost-container').nth(0)).toContainText(testFlashpost.content);
    });

    await test.step('verify flashpost is hidden for non-authenticated users', async () => {
      // Arrange:
      await page.goto('/logout');

      // Act:
      await page.goto('/flashposts.html');

      // Assert:
      await expect(page.locator('.flashpost-container').nth(0)).not.toContainText(testFlashpost.content);
    });
  });
});
