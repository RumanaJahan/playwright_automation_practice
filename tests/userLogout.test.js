import { test } from '../utils/baseTest.js';
import { loginPage } from '../pageObject/loginPage.js';
import { logoutPage } from '../pageObject/logoutPage.js';
import * as userCredentials from '../userData/userCredentials.js';

test('user should logout successfully', async ({ page }) => {
    // Create page object
    let loginpage = new loginPage(page);
    let logoutpage = new logoutPage(page);
    // Launch login page
    await loginpage.launchLogin();
    // Log in with valid credentials
    await loginpage.validLogin(userCredentials.credentials.validUser);
    // Perform logout
    await logoutpage.logoutFromWebsite();
});