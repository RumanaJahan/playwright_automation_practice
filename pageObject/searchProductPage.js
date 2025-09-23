import { expect } from '@playwright/test';

export class searchProductPage
{
  constructor(page)
  {
    this.page=page;

    //Locators
    this.productLink = this.page.locator('a[href="/products"]');
    this.allProductsTitle = this.page.locator('h2:has-text("All Products")');
    this.searchInput = this.page.locator('#search_product');
    this.searchedProductsTitle = this.page.locator('h2:has-text("Searched Products")');
    this.searchButton = this.page.locator('#submit_search');
    this.productList = this.page.locator('.features_items .product-image-wrapper');
  }

 async openProductsPage() {
    await this.productLink.click();
    await expect(this.allProductsTitle).toBeVisible();
  }

  async searchProduct(productName) 
  {
    await this.searchInput.fill(productName);
    await this.searchButton.click();

    // Verify "Searched Products" is visible
    await expect(this.searchedProductsTitle).toBeVisible();

    // Verify at least one product result is visible
    await expect(this.productList.first()).toBeVisible();
  }
}
