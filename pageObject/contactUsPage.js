import { expect } from '@playwright/test';
import { getValidationMessage } from '../utils/formValidation.js';


export class contactUsPage
{
  constructor(page)
  {
    this.page=page;

  //Locators
    this.contactUsLink = page.locator('a[href="/contact_us"]');
    this.contactUsMessage = page.locator('h2', { hasText: "Get In Touch" });
    this.nameInput = page.locator('input[data-qa="name"]');
    this.emailInput = page.locator('input[data-qa="email"]');
    this.subjectInput = page.locator('input[data-qa="subject"]');
    this.messageInput = page.locator('textarea[data-qa="message"]');
    this.uploadFileInput = page.locator('input[name="upload_file"]');
    this.submitButton = page.locator('input[data-qa="submit-button"]');
   }

 async launchContactUs() {
  //await Promise.all([
  //  this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    this.contactUsLink.click(),
  //  ]);
  await expect(this.contactUsMessage).toBeVisible();
}


   /**
 * Fills in email and password fields with provided values
 */
//async fillUpContactUsForm(name,email,subject,message,filePath)
async fillUpContactUsForm(contactUsData)
{
 const {name,email,subject,message,filePath}=contactUsData;
 await this.nameInput.fill(name);
 await this.emailInput.fill(email);
 await this.subjectInput.fill(subject);
 await this.messageInput.fill(message);
 await this.uploadFileInput.setInputFiles(filePath);
}


async submitContactForm(contactUsValidData)
{
 await this.fillUpContactUsForm(contactUsValidData);
 await this.submitButton.click();
}

async validateEmailField(emailValidationData)
{
 await this.fillUpContactUsForm(emailValidationData);      
 await this.submitButton.click();

 const validationMessage = await getValidationMessage(this.emailInput);
 console.log("Email validation:", validationMessage);

 if (emailValidationData.email==="") 
 {         
   expect(validationMessage).toContain('Please fill out this field.');
 }
 else if (!emailValidationData.email.includes('@')) 
 {
   expect(validationMessage).toContain(`Please include an '@' in the email address. '${emailValidationData.email}' is missing an '@'`);
 }
 else if (!emailValidationData.email.includes('.') || emailValidationData.email.endsWith('@')) 
 {  
    expect(validationMessage).toContain(`Please enter a part following '@'. '${emailValidationData.email}' is incomplete.`);
 }
}
}