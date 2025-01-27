import { createFlashPostWithAPI, getAuthorizationHeader, loginWithAPI } from '@_src/helpers/api-actions.helpers';
import { generateFlashPost } from '@_src/helpers/helpers';
import { login } from '@_src/helpers/ui-actions.helper';
import { FlashPost } from '@_src/models/flashpost.model';
import { expect, test } from '@playwright/test';
import { userData } from 'test-data/user.data';

/* 
Simple example of e2e scenarios based on serial execution.
Each test case is dependent on the previous one.
Each test is a step in the scenario.
*/
test.describe.configure({ mode: 'serial' });

test.describe('Flashpost e2e scenario (serial) API + UI', () => {
  let testFlashpost: FlashPost;

  test.beforeAll(async ({}) => {
    testFlashpost = generateFlashPost();
  });

  test('[API] should create flashpost via API', async ({ request }) => {
    // Arrange:
    const headers = await getAuthorizationHeader(request, userData);

    // Act:
    const response = await createFlashPostWithAPI(request, testFlashpost, headers);

    // Assert:
    expect(response.status()).toBe(201);
  });

  test('[UI] Should display existing flashpost login', async ({ page }) => {
    // Act:
    await login(page, userData);
    await page.goto('/flashposts.html');

    // Assert:
    await expect(page.locator('.flashpost-container').nth(0)).toContainText(testFlashpost.content);
  });

  test('[API] should get existing flashpost via API', async ({ request }) => {
    // Act:
    const response = await getAuthorizationHeader(request, userData);
    expect(response.status()).toBe(200);
  });

  test('[UI] should hide flashpost content from non-authenticated users', async ({ page }) => {
    // Act:
    await page.goto('/flashposts.html');

    // Assert:
    await expect(page.locator('.flashpost-container').nth(0)).not.toContainText(testFlashpost.content);
  });
});
