import { expect } from '@playwright/test';
import { selectRandomOption } from '../userData/registrationData.js';

export class registrationPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.userName = page.locator('input[data-qa="signup-name"]');
    this.userEmail = page.locator('input[data-qa="signup-email"]');
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.companyName = page.locator('#company');
    this.address1 = page.locator('#address1');
    this.address2 = page.locator('#address2');
    this.countryDropdown = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipCode = page.locator('#zipcode');
    this.mobileNumber = page.locator('#mobile_number');
    this.userPassword = page.locator('#password');
    this.days = page.locator('select[data-qa="days"]');
    this.months = page.locator('select[data-qa="months"]');
    this.years = page.locator('select[data-qa="years"]');

    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
    this.radioButton = page.locator('div[data-qa="title"]');

    this.signupLink = page.locator('a[href="/login"]');

    this.signupMessage = page.getByText('New User Signup!');
    this.accountCreationMessage = page.getByText('Account Created!');
    this.registerMessage = page.getByText('Enter Account Information');


    this.newsLetterCheckbox = page.getByLabel('Sign up for our newsletter!');
    this.specialOfferCheckbox = page.getByLabel('Receive special offers from our partners!');

    this.accountName = page.locator('#name');  
    this.accountEmail = page.locator('#email'); 

  }

  async registerUser(userData) {
    const {
      name,
      firstname,
      lastname,
      email,
      password,
      gender,
      company,
      address1,
      address2,
      city,
      state,
      country,
      zipcode,
      mobile,
    } = userData;

    await this.signupLink.click();
    await expect(this.signupMessage).toBeVisible();

    await this.userName.fill(name);
    await this.userEmail.fill(email);
    await this.signupButton.click();
    await expect(this.registerMessage).toBeVisible();

    //Gender selection
    if (gender === "male") 
    {
      await this.radioButton.first().click();
      await expect(this.radioButton.first()).toBeChecked();
    } else 
    {
      await this.radioButton.last().click();
      await expect(this.radioButton.last()).toBeChecked();
    }

    // Verify auto-populated values on 2nd page
    await expect(this.accountName).toHaveValue(name);
    await expect(this.accountEmail).toHaveValue(email);


    // Password
    await this.userPassword.fill(password);
    await expect(this.userPassword).toHaveValue(password);

    // Random DOB
    this.selectedDay = await selectRandomOption(this.days);
    this.selectedMonth = await selectRandomOption(this.months);
    this.selectedYear = await selectRandomOption(this.years);
    console.log(`Selected DOB: ${this.selectedDay} ${this.selectedMonth} ${this.selectedYear}`);

    // Checkboxes
    await this.newsLetterCheckbox.check();
    await expect(this.newsLetterCheckbox).toBeChecked();
    await this.specialOfferCheckbox.check();
    await expect(this.specialOfferCheckbox).toBeChecked();

    // Address and company
    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.companyName.fill(company);
    await this.address1.fill(address1);
    await this.address2.fill(address2);

    // Robust country selection
    await expect(this.countryDropdown).toBeVisible();
    await expect(this.countryDropdown).toBeEnabled();
    await this.countryDropdown.selectOption(country);

    // Continue filling remaining details
    await this.state.fill(state);
    await this.city.fill(city);
    await this.zipCode.fill(zipcode);
    await this.mobileNumber.fill(mobile);

    await this.createAccountButton.click();

    // Verify account creation
    await expect(this.accountCreationMessage).toBeVisible();
    await this.continueButton.click();

    // Verify that user is logged in
    this.loggedInText = this.page.locator('a', { hasText: `Logged in as ${name}` });
    await expect(this.loggedInText).toBeVisible();
  }
}
