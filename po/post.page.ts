import { $, $$, ElementFinder, ExpectedConditions } from 'protractor';

export class PostPage {

  rootEle: ElementFinder;
  editPostBtn: ElementFinder = $('[data-test="edit-post-btn"]');
  deletePostBtn: ElementFinder = $('[data-test="edit-post-btn"]');
  contentEle: ElementFinder;

  constructor(postNr: number) {
    this.rootEle = $$('mat-expansion-panel-header').get(postNr - 1);
    this.contentEle = this.rootEle.$('.mat-expansion-panel-body>p');
  }

  async click(): Promise<void> {
    await this.rootEle.click();
  }

  async getTitle(): Promise<string> {
    return await this.rootEle.$('span').getText();
  }

  async getContents(): Promise<string> {
    return await this.contentEle.getText();
  }

  async isContentVisible(): Promise<boolean> {
    return await ExpectedConditions.visibilityOf(this.contentEle)();
  }

  async clickEdit(): Promise<void> {
    await this.editPostBtn.click();
  }

  async isEditButtonVisible(): Promise<boolean> {
    return await ExpectedConditions.visibilityOf(this.editPostBtn)();
  }

  async clickDelete(): Promise<void> {
    await this.deletePostBtn.click();
  }

  async isDeleteButtonVisible(): Promise<boolean> {
    return await ExpectedConditions.visibilityOf(this.deletePostBtn)();
  }
}
