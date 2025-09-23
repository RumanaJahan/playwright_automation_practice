import { test } from '../utils/baseTest.js';
import { loginPage } from '../pageObject/loginPage.js';
import { existingUserSignupPage } from '../pageObject/existingUserSignupPage.js';
import * as userCredentials from '../userData/userCredentials.js';

test('should show error message when try to register with existing user', async ({ page }) => {
    let loginpage = new loginPage(page);
    let existingusersignuppage = new existingUserSignupPage(page);
    await loginpage.launchLogin(page);
    await existingusersignuppage.signupExistingUser(userCredentials.credentials.validUser);

})