import { expect, test } from '@playwright/test';

/* 
Simple test that demonstrates the use of auto-waiting for elements during actions.
It also shows the use of web-first assertions.

Code from free course:
https://jaktestowac.pl/lesson/pw5s01l15/
*/

test.describe('Web-first assertions and auto-waiting', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/not-displayed-elements-1.html');
  });

  test('Auto-waiting for elements for action', async ({ page }) => {
    // https://playwright.dev/docs/actionability
    // Arrange:
    const elementTestId = 'dti-button-element';
    const resultsTestId = 'dti-results';
    const expectedMessage = 'You clicked the button!';

    const buttonLocator = page.getByTestId(elementTestId);
    const result = page.getByTestId(resultsTestId);

    // print status of the button at this moment:
    // eslint-disable-next-line no-console
    console.log('is button visible?', await buttonLocator.isVisible());

    // Act:
    // use auto-waiting during click:
    await buttonLocator.click();

    // Assert:
    // and check the results:
    await expect(result).toHaveText(expectedMessage);
  });

  test('Button visibility (Web-first assertions)', async ({ page }) => {
    // https://playwright.dev/docs/best-practices#use-web-first-assertions
    // Arrange:
    const elementSelector = 'dti-button-element';

    const buttonLocator = page.getByTestId(elementSelector);

    // print status of the button at this moment:
    // eslint-disable-next-line no-console
    console.log('is button visible?', await buttonLocator.isVisible());

    // Assert:
    // use web-first assertions:
    // this will automatically wait for the button to be visible:
    await expect(buttonLocator).toBeVisible();
  });
});
