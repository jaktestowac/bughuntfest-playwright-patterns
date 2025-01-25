import { FlashPost } from '@_src/models/flashpost.model';
import { LoginUserModel } from '@_src/models/user.model';
import { LoginPage } from '@_src/pages/login.page';
import { Page } from '@playwright/test';

/* This file contains helper functions that interact with the UI. 
We skip implementing patterns like Page Object Model (POM) for simplicity. */

export async function login(page: Page, userData: LoginUserModel): Promise<void> {
  await page.goto('/login');
  const loginPage = new LoginPage(page);
  await loginPage.login(userData);
}

export async function createFlashPost(page: Page, flashPost: FlashPost): Promise<void> {
  await page.locator('.create-flashpost-btn').click();
  await page.locator('#flashpost-text').fill(flashPost.content);
  await page.locator('.flashpost-popup').getByRole('button', { name: 'Create', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');
}
