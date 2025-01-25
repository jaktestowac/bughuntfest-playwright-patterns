import { createFlashPost, login } from '@_src/helpers/ui-actions.helper';
import { expect, test } from '@playwright/test';
import { flashPostTestData } from 'test-data/flashpost.data';
import { userData } from 'test-data/user.data';

/* 
Simple example of DDT tests generated from test data
*/

test.describe('Sample tests', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, userData);
    await page.goto('/flashposts.html');
  });

  flashPostTestData.forEach((flashPostData) => {
    test(`flashpost - case: ${flashPostData.testTitle}`, async ({ page }) => {
      // Arrange:
      const flashPost = flashPostData.flashPost;

      // Act:
      await createFlashPost(page, flashPost);

      // Assert:
      await expect(page.locator('.flashpost-container').nth(0)).toContainText(flashPost.content);
    });
  });
});
