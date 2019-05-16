import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

import { PostPage } from './post.page';

export class PostsOverviewPage {

  infoText: ElementFinder = $('.info-text ');
  newPostBtn: ElementFinder = $('[data-test="new-post-btn"]');
  loginBtn: ElementFinder = $('[data-test="login-btn"]');
  logoutBtn: ElementFinder = $('[data-test="logout-btn"]');
  signUpBtn: ElementFinder = $('[data-test="signup-btn"]');

  async open(): Promise<void> {
    await browser.get('/');
  }

  async getInfoText(): Promise<string> {
    return this.infoText.getText();
  }

  async isNewPostBtnVisible(): Promise<boolean> {
    return await ExpectedConditions.visibilityOf(this.newPostBtn)();
  }

  async isLoginBtnVisible(): Promise<boolean> {
    return await ExpectedConditions.visibilityOf(this.loginBtn)();
  }

  async isLogoutBtnVisible(): Promise<boolean> {
    return await ExpectedConditions.visibilityOf(this.logoutBtn)();
  }

  async isSignupBtnVisible(): Promise<boolean> {
    return await ExpectedConditions.visibilityOf(this.signUpBtn)();
  }

  getPost(postNr: number): PostPage {
    return new PostPage(postNr);
  }

}
