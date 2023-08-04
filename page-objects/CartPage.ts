import UIActions from '../helpers/UIActions';
import Assert from '../helpers/Assert';

export default class CartPage {
  constructor(private web: UIActions) {}

  private readonly _CART_PRODUCT_NAME =
    '//div[contains(text(), "Sauce Labs Fleece Jacket")]';
  private readonly _CART_PRODUCT_PRICE = 'div[class="inventory_item_price"]';
  private readonly _CHECKOUT_BUTTON = 'button[id="checkout"]';

  public async validateAddedProductToCart(
    expectedProductName: string,
    expectedProductPrice: string,
  ): Promise<void> {
    const actualProductName = await this.web
      .element(this._CART_PRODUCT_NAME)
      .getFirstLocator()
      .textContent();
    const actualProductPrice = await this.web
      .element(this._CART_PRODUCT_PRICE)
      .getFirstLocator()
      .textContent();

    await Assert.assertTrue(actualProductName, expectedProductName);
    await Assert.assertTrue(actualProductPrice, expectedProductPrice);
  }

  public async clickOnCheckoutButton(): Promise<void> {
    await this.web.element(this._CHECKOUT_BUTTON).click();
  }
}
