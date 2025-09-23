import { test } from '../utils/baseTest.js';
import { searchProductPage } from '../pageObject/searchProductPage.js';

test('user should be able to search product', async ({ page }) => {
    //Create page object
    let searchproductpage = new searchProductPage(page);

    //Open products page and search for a product
    await searchproductpage.openProductsPage();
    await searchproductpage.searchProduct('top');
});