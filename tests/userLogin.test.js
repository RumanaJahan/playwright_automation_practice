import { test } from '../utils/baseTest.js';
import { loginPage } from '../pageObject/loginPage.js';
import * as userCredentials from '../userData/userCredentials.js';

test.describe("login functionality", () => {
   let loginpage;

   test.beforeEach(async ({ page }) => {
      loginpage = new loginPage(page);
      await loginpage.launchLogin(page);
   })

   test.only('user should login successfully with valid credentials', async () => {
      await loginpage.validLogin(userCredentials.credentials.validUser);
   })

   test('user should show error with invalid credentials', async () => {
      await loginpage.invalidLogin(userCredentials.credentials.invalidUser);
   })

   test('user should show error when fields are empty', async () => {
      await loginpage.emptyLogin(userCredentials.credentials.emptyUser);
   })

   test('user should show error when @ is missing in email', async () => {
      await loginpage.invalidEmail(userCredentials.credentials.missingAt);
   })

   test('user should show error when domain is missing in email', async () => {
      await loginpage.invalidEmail(userCredentials.credentials.missingDomain);
   })
});