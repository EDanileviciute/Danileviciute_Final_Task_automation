import { Given, When, Then } from '@cucumber/cucumber';
import CheckoutPage from '../page-objects/CheckoutPage';

When(
  /^User fills the checkout information form with "([^"]*)", "([^"]*)", "([^"]*)"$/,
  async function (firstName, lastName, postalCode) {
    const checkoutPage = new CheckoutPage(this.web);
    await checkoutPage.enterFirstName(firstName);
    await checkoutPage.enterLastName(lastName);
    await checkoutPage.enterPostalCode(postalCode);
  },
);

When(
  /^User press the “Continue” button to continue with the order$/,
  async function () {
    const checkoutPage = new CheckoutPage(this.web);
    await checkoutPage.clickOnContinueButton();
  },
);

When(
  /^User sees correct product details in checkout overview$/,
  async function () {
    const checkoutPage = new CheckoutPage(this.web);
    const expectedProductPrice = "$49.99";
    await checkoutPage.validateProductAtCheckout(
      this.PRODUCT_NAME,
      this.PRODUCT_PRICE,
    );
  },
);

When(/^User press the “Finish” button$/, async function () {
  const checkoutPage = new CheckoutPage(this.web);
  await checkoutPage.clickOnFinishButton();
});

Then(/^User sees that order has been completed$/, async function () {
  const checkoutPage = new CheckoutPage(this.web);
  await checkoutPage.validateOrderIsCompleted(this.COMPLETE_MESSAGE);
});

Then(/^User clicks on “Back Home” button$/, async function () {
  const checkoutPage = new CheckoutPage(this.web);
  await checkoutPage.clickOnBackHomeButton();
});
