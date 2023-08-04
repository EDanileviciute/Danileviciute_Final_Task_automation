import { Given, When, Then } from '@cucumber/cucumber';
import CartPage from '../page-objects/CartPage';

Then(
  /^User sees product - "([^"]*)" with price - "([^"]*)"$/,
  async function (productName, productPrice) {
    await new CartPage(this.web).validateAddedProductToCart(
      productName,
      productPrice,
    );
  },
);

When(/^User press “Checkout” button$/, async function () {
  const cartPage = new CartPage(this.web);
  await cartPage.clickOnCheckoutButton();
});
