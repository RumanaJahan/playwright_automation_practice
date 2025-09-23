import { expect } from '@playwright/test';
import { getValidationMessage } from '../utils/formValidation.js';


export class loginPage
{
  constructor(page)
  {
    this.page=page;
     
    // Locators
    this.loginLink = page.locator('a[href="/login"]');
    this.loginMessage = page.getByText('Login to your account');
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
  }

/**
 * Navigates to the login page and verifies the login form is visible
 */
async launchLogin() 
{
  await this.loginLink.waitFor({ state: 'visible' });
  await this.loginLink.click();
  await expect(this.loginMessage).toBeVisible();
}


/**
 * Fills in email and password fields with provided values
 */
async loginWithCredentials(credentials)
{
  const {email,password}=credentials;
  await this.emailInput.fill(email); 
  await this.passwordInput.fill(password);
}

/**
 * Performs a valid login and verifies the user is logged in
 */
async validLogin(validCredential)
{
  await this.loginWithCredentials(validCredential);
  await this.loginButton.click(); 

  // Validate the "Logged in as <username>" message
  this.loggedInText = this.page.locator('a', { hasText: `Logged in as ${validCredential.username}` });
  await expect(this.loggedInText).toBeVisible();
}


/**
 * Attempts login with invalid credentials and verifies error message is shown
 */
async invalidLogin(invalidCredential)
{
  await this.loginWithCredentials(invalidCredential);
  await this.loginButton.click();  

  // Validate error message for invalid login
 const errorMessage = this.page.locator('p');
 await expect(errorMessage.nth(0)).toHaveText("Your email or password is incorrect!");

}

/**
 * Attempts login with empty fields and verifies browser validation messages
 */
async emptyLogin(emptyCredentials) 
{
  await this.loginWithCredentials(emptyCredentials);
  await this.loginButton.click();  

  //Check email validation
  const emailMessage = await getValidationMessage(this.emailInput);
  console.log("Email validation:", emailMessage);
  if (emptyCredentials.email==="") 
  {
    expect(emailMessage).toContain('Please');
  }

  //Check password validation
  const passwordMessage = await getValidationMessage(this.passwordInput);
  console.log("Password validation:", passwordMessage);
  if (emptyCredentials.password==="") 
  {
    expect(passwordMessage).toContain('Please');
  }
}

async invalidEmail(invalidEmail)
{
  await this.loginWithCredentials(invalidEmail);
  await this.loginButton.click();  

  //Check email validation
  const emailMessage = await getValidationMessage(this.emailInput);
  console.log("Email validation:", emailMessage);
  if (!invalidEmail.email.includes('@')) 
  {
    expect(emailMessage).toContain(`Please include an '@' in the email address. '${invalidEmail.email}' is missing an '@'`);
  }
  else if (!invalidEmail.email.includes('.') || invalidEmail.email.endsWith('@')) 
  {
    expect(emailMessage).toContain(`Please enter a part following '@'. '${invalidEmail.email}' is incomplete.`);
  }
}
}