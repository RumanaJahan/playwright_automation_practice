// utils/baseTest.js

import { test as base, expect } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env (do this once)
dotenv.config();

// Creating a custom test object by extending the base Playwright test
const test = base.extend({
  page: async ({ page }, use) => {

    // Navigate to the Automation Exercise website before each test
    await page.goto('/');

    // Assert that the page title includes 'Automation Exercise'
    await expect(page).toHaveTitle(/Automation Exercise/i);

    // Log the current URL to the console for debugging purposes
    console.log('Navigated to:', page.url());

    // Pass control back to the test using this extended page
    await use(page);
  },
});

// Export the customized 'test' and the standard 'expect' so you can use them in your test files
export { test, expect };
