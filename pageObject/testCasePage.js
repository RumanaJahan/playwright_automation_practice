import { expect } from '@playwright/test';

export async function launchTestCasePageByButton(page)
 {
    const testcasebutton = page.getByRole('button',{name:'Test Cases'});
    await testcasebutton.click();
    await expect(page).toHaveTitle(/Test Cases/i);
    const testcasetext= page.locator('h2 b');
    await expect(testcasetext).toHaveText(/TEST CASES/i);
 }

export async function launchTestCasePageByLink(page)
 {
  const testcaselink = page.locator('header').getByRole('link',{name: "Test Cases"});
  testcaselink.click();
 }