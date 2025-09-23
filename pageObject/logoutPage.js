import { expect } from '@playwright/test';


export class logoutPage
{
  constructor(page)
  {
    this.page=page;
 

  // Locators
  this.logoutlink = page.locator('a[href="/logout"]');
  this.loginMessage = page.getByText('Login to your account');
  }

 /**
 * Logs the user out and verifies they are redirected to the login page
 */
async logoutFromWebsite() 
{
  // Click on logout link
  await this.logoutlink.click();

  // Verify login page is shown again
  await expect(this.loginMessage).toBeVisible();

  // Verify URL is /login
  await expect(this.page).toHaveURL(/.*\/login/);
}
  
}