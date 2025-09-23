import { expect } from '@playwright/test';

export class existingUserSignupPage {
  constructor(page) 
  {
    this.page = page;
    //Locators
    this.userName = page.locator('input[data-qa="signup-name"]');
    this.userEmail = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.existingUserMessage = page.getByText("Email Address already exist!");
  }
  
async signupExistingUser(credentials) 
{
    await this.userName.fill(credentials.username);
    await this.userEmail.fill(credentials.email);
    await this.signupButton.click();
    await expect(this.existingUserMessage).toBeVisible();
    console.log(await this.existingUserMessage.textContent());
}
}