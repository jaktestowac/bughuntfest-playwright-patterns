# BugHuntFest - Playwright Patterns by jaktestowac.pl

This repository contains code examples used during BugHuntFest - Playwright Patterns by [jaktestowac.pl](jaktestowac.pl) team.

## Overview

Application used to demonstrate concepts of Playwright.

## Who we are?

We are **Test Architects and Senior Lead Tech Quality Engineers**, who are passionate about testing.
We are constantly looking for new ways to improve our skills and share our knowledge with others.

We are here to help you become a better tester and achieve your testing goals!

Read more about our **[Contribution to Playwright and Community](https://jaktestowac.pl/contribution-playwright/)**

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v20 or later LTS version)
- [npm](https://www.npmjs.com/)
- our free application to practice automation - [🦎 GAD](https://github.com/jaktestowac/gad-gui-api-demo)

## Project Structure

```
├── tests/                    # Test files
│   ├── modularity/          # Examples of test
│   └── ...
├── test-data/               # Test data files
├── src/                     # Source files
│   └── helpers/             # Helper functions
└── playwright.config.ts     # Playwright configuration
```

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jaktestowac/bughuntfest-playwright-patterns.git
   cd bughuntfest-playwright-patterns
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running Tests

Run all tests:

```bash
npm run test
```

Run specific test file:

```bash
npx playwright test tests/modularity/flashposts.spec.ts
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

Generate test report:

```bash
npx playwright show-report
```

## Troubleshooting

Common issues and solutions:

1. **Tests fail on first run**

   - Ensure 🦎 GAD application is running
   - Check if correct Node.js version is installed

2. **Browser launch fails**
   ```bash
   npx playwright install
   ```

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)

## Contact

Feel free to reach out to us:

- Website: [jaktestowac.pl](https://jaktestowac.pl)
- LinkedIn: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)

Happy testing and automating tests!🚀

jaktestowac.pl Team
