import UIActions from '../helpers/UIActions';

export default class LandingPage {
  constructor(private web: UIActions) {}

  private readonly _USERNAME_TAB = 'input[id="user-name"]';
  private readonly _PASSWORD_TAB = 'input[id="password"]';
  private readonly _LOGIN_BUTTON = 'input[id="login-button"]';

  public async navigateToHomepage(): Promise<void> {
    await this.web.goto('https://www.saucedemo.com/');
  }

  public async enterUsername(username: string): Promise<void> {
    const element = this.web.element(this._USERNAME_TAB);
    await element.fillWithText(username);
  }

  public async enterPassword(password: string): Promise<void> {
    const element = this.web.element(this._PASSWORD_TAB);
    await element.fillWithText(password);
  }

  public async clickOnLoginButton() {
    await this.web.element(this._LOGIN_BUTTON).click();
  }
}
