import { test } from '../utils/baseTest.js';
import { contactUsPage } from '../pageObject/contactUsPage.js';
import * as contactUsData from '../userData/contactUsData.js';

test.describe("Contact Us form functionality", () => {
   let contactuspage;
   test.beforeEach(async ({ page }) => {
      contactuspage = new contactUsPage(page);
      await contactuspage.launchContactUs(page);
   })

   test('should submit contact us form successfully with valid inputs', async () => {
      await contactuspage.submitContactForm(contactUsData.contactUsInput.validData);
   })

   test('should show error when email is empty', async () => {
      await contactuspage.validateEmailField(contactUsData.contactUsInput.missingEmail);
   })

   test('should show error when @ is missing in email', async () => {
      await contactuspage.validateEmailField(contactUsData.contactUsInput.missingAt);
   })

   test('should show error when domain is missing in email', async () => {
      await contactuspage.validateEmailField(contactUsData.contactUsInput.missingDomain);
   })

});