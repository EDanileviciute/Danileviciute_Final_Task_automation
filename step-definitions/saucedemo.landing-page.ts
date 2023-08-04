import { Given, When, Then } from '@cucumber/cucumber';
import LandingPage from '../page-objects/LandingPage';

Given(/^User has opened Swag Labs website$/, async function () {
  await new LandingPage(this.web).navigateToHomepage();
});

When(/^User inputs username - "([^"]*)"$/, async function (username) {
  await new LandingPage(this.web).enterUsername(username);
});

When(/^User inputs password - "([^"]*)"$/, async function (password) {
  await new LandingPage(this.web).enterPassword(password);
});

When(/^User press the “Login” button$/, async function () {
  await new LandingPage(this.web).clickOnLoginButton();
});
