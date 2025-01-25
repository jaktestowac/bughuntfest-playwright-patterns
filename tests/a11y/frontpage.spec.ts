import { expect, test } from '@playwright/test';

/* 
Simple example of ARIA snapshot test 
https://playwright.dev/docs/aria-snapshots#overview 
*/

test.describe('Aria snapshots', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('front page', async ({ page }) => {
    await expect(page.locator('body')).toMatchAriaSnapshot(expectedAria);
  });
});

const expectedAria = `
- banner:
  - heading "🦎 GAD" [level=1]:
    - link "🦎 GAD"
  - button
  - link
  - link
  - link
- heading "Welcome on GADGUI API Demo" [level=1]: Welcome on 🦎GUI API Demo
- heading "Practice your test automation skills!" [level=2]
- img "Front banner of GAD application"
- text: "Choose a module to start practicing:"
- link " Articles Explore and create testing content! Manage articles, comments, users, flashposts and games":
  - text: 
  - button "Articles":
    - heading "Articles" [level=3]
  - text: Explore and create testing content! Manage articles, comments, users, flashposts and games
- link " Practice Pages Special pages to test! Practice on elements states, tables, dynamic IDs, API, popups, charts, iframes and more!":
  - text: 
  - button "Practice Pages":
    - heading "Practice Pages" [level=3]
  - text: Special pages to test! Practice on elements states, tables, dynamic IDs, API, popups, charts, iframes and more!
- link " Games Special pages to test! Practice automation on non-standard elements, animations, games, and more!":
  - text: 
  - button "Games":
    - heading "Games" [level=3]
  - text: Special pages to test! Practice automation on non-standard elements, animations, games, and more!
- link "jaktestowac.pl"
- contentinfo:
  - text: "Version: v2.7.13 © Copyright 2025"
  - link "jaktestowac.pl"
`;
