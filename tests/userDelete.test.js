import { test } from '../utils/baseTest.js';
import { registrationPage } from '../pageObject/registrationPage.js';
import { deleteAccountPage } from '../pageObject/deleteAccountPage.js';
import { generateRandomUserData } from '../userData/registrationData.js';

test('should register and then delete the account', async ({ page }) => {
  // Create page object
  let registrationpage = new registrationPage(page);
  let deletepage = new deleteAccountPage(page);

  // Precondition: register a new user
  const userData = generateRandomUserData();
  await registrationpage.registerUser(userData);

  // Test: delete account
  await deletepage.deleteAccount();
});
