import { test } from '../utils/baseTest.js';
import { registrationPage } from '../pageObject/registrationPage.js';
import { generateRandomUserData } from '../userData/registrationData.js';

test('should successfully register a new user', async ({ page }) => {
  // Create page object
  let registrationpage = new registrationPage(page);

  // Generate random user data
  const userData = generateRandomUserData();

  // Perform registration
  await registrationpage.registerUser(userData);
});
