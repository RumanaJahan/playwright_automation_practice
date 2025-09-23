import { expect } from '@playwright/test';

export class deleteAccountPage
{
    constructor(page)
    {
        this.page=page;

        // Locators
        this.deleteAccountButton = page.locator('a[href="/delete_account"]');
        this.accountDeletedMessage = page.locator('b', { hasText: "Account Deleted!" });
    }
/**
 ** Deletes the user account and verifies deletion
**/

    async deleteAccount()
    {
        // Click on delete account button
        await this.deleteAccountButton.click();
        // Verify account deletion message is shown
        await expect(this.accountDeletedMessage).toBeVisible();
        // Verify URL is /delete_account
        await expect(this.page).toHaveURL(/.*\/delete_account/);
        console.log(await this.accountDeletedMessage.textContent());

    }

}