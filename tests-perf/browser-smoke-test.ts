import { checkPage } from './navigation.flows';

export const config = {
  target: 'http://localhost:3000/',
  phases: [
    {
      arrivalCount: 2,
      duration: 3,
    },
  ],
  payload: {
    path: './test-data/pages.csv',
    fields: ['url', 'title'],
    loadAll: true,
    name: 'pageChecks',
  },
  engines: {
    playwright: {},
  },
};

export const scenarios = [
  {
    name: 'smoke_test_page',
    engine: 'playwright',
    testFunction: checkPage,
  },
];
