import UIActions from '../helpers/UIActions';
import Assert from '../helpers/Assert';

export default class CheckoutPage {
  constructor(private web: UIActions) {}

  private readonly _FIRST_NAME_TAB = 'input[id="first-name"]';
  private readonly _LAST_NAME_TAB = 'input[id="last-name"]';
  private readonly _POSTAL_CODE_TAB = 'input[id="postal-code"]';
  private readonly _CONTINUE_BUTTON = 'input[id="continue"]';
  private readonly _CHECKOUT_PRODUCT_NAME =
    '//div[contains(text(), "Sauce Labs Fleece Jacket")]';
  private readonly _CHECKOUT_PRODUCT_PRICE = 'div[class="inventory_item_price"]';
  private readonly _FINISH_BUTTON = 'button[id="finish"]';
  private readonly _COMPLETE_MESSAGE =
    '//span[contains(text(), "Checkout: Complete!")]';
  private readonly _BACK_HOME_BUTTON = 'button[id="back-to-products"]';

  public async enterFirstName(firstName: string): Promise<void> {
    await this.web.element(this._FIRST_NAME_TAB).fillWithText(firstName);
  }

  public async enterLastName(lastName: string): Promise<void> {
    await this.web.element(this._LAST_NAME_TAB).fillWithText(lastName);
  }

  public async enterPostalCode(postalCode: string): Promise<void> {
    await this.web.element(this._POSTAL_CODE_TAB).fillWithText(postalCode);
  }

  public async clickOnContinueButton(): Promise<void> {
    await this.web.element(this._CONTINUE_BUTTON).click();
  }

  public async validateProductAtCheckout(
    expectedProductName: string,
    expectedProductPrice: string,
  ): Promise<void> {
      const actualProductName = await this.web
      .element(this._CHECKOUT_PRODUCT_NAME)
      .getFirstLocator()
      .textContent();
    const actualProductPrice = await this.web
      .element(this._CHECKOUT_PRODUCT_PRICE)
      .getFirstLocator()
      .textContent();

    await Assert.assertEquals(actualProductName, expectedProductName);
    await Assert.assertTrue(actualProductPrice, expectedProductPrice);
  }

  public async clickOnFinishButton(): Promise<void> {
    await this.web.element(this._FINISH_BUTTON).click();
  }

  public async validateOrderIsCompleted(
    expectedMessage: string,
  ): Promise<void> {
    const actualMessage = await this.web
      .element(this._COMPLETE_MESSAGE)
      .getFirstLocator()
      .textContent();

    await Assert.assertTrue(actualMessage, expectedMessage);
  }

  public async clickOnBackHomeButton(): Promise<void> {
    await this.web.element(this._BACK_HOME_BUTTON).click();
  }
}
