import { test } from '../utils/baseTest.js';
import * as testCasePage from '../pageObject/testCasePage.js';

test.describe('test case page', async () => {
  test('test case page by button', async ({ page }) => {
    await testCasePage.launchTestCasePageByButton(page);
  });

  test('test case page by link', async ({ page }) => {
    await testCasePage.launchTestCasePageByLink(page);
  });
})




