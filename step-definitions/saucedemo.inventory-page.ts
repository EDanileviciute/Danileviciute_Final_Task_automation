import { Given, When, Then } from '@cucumber/cucumber';
import InventoryPage from '../page-objects/InventoryPage';

Then(/^User is on Swag Labs inventory page$/, async function () {
  await new InventoryPage(this.web).navigateToInventoryPage();
});

When(
  /^User adds - "Sauce Labs Fleece Jacket" to the shopping cart$/,
  async function () {
    const inventoryPage = new InventoryPage(this.web);
    await inventoryPage.addProductToCart();

    this.PRODUCT_NAME = inventoryPage.ACTUAL_PRODUCT_NAME;
    console.log(this.PRODUCT_NAME);
  },
);

When(/^User opens shopping cart$/, async function () {
  const inventoryPage = new InventoryPage(this.web);
  await inventoryPage.openShoppingCart();
});

Then(/^User is on Swag Labs products page$/, async function () {
  const inventoryPage = new InventoryPage(this.web);
  await inventoryPage.navigateToInventoryPage();
});
