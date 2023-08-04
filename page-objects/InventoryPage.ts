import UIActions from '../helpers/UIActions';

export default class ProductPage {
  constructor(private web: UIActions) {}

  private readonly _PRODUCT_NAME =
    '//div[contains(text(), "Sauce Labs Fleece Jacket")]';
  private readonly _ADD_TO_CART_BUTTON =
    'button[id="add-to-cart-sauce-labs-fleece-jacket"]';
  private readonly _SHOPPING_CART_BUTTON = 'a[class="shopping_cart_link"]';

  private _ACTUAL_PRODUCT_NAME: string;

  public async navigateToInventoryPage(): Promise<void> {
    await this.web.goto('https://www.saucedemo.com/inventory.html');
  }

  public async selectProduct(): Promise<void> {
    await this.web.element(this._PRODUCT_NAME).waitTillVisible();
  }

  public async addProductToCart(): Promise<void> {
    await this.web.element(this._ADD_TO_CART_BUTTON).click();

    const productName = await this.web
      .element(this._PRODUCT_NAME)
      .getFirstLocator()
      .textContent();
    this._ACTUAL_PRODUCT_NAME = productName;
  }

  public async openShoppingCart(): Promise<void> {
    await this.web.element(this._SHOPPING_CART_BUTTON).click();
  }

  // ----------------- SET & GET ACCESSORS --------------------
  set ACTUAL_PRODUCT_NAME(productName: string) {
    this._ACTUAL_PRODUCT_NAME = productName;
  }

  get ACTUAL_PRODUCT_NAME(): string {
    return this._ACTUAL_PRODUCT_NAME;
  }
}
