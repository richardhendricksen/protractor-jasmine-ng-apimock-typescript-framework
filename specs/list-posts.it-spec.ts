import { expect } from 'chai';
import * as typings from '../typings';

import { PostsOverviewPage } from '../po/posts-overview.page';

const postsOverviewPage = new PostsOverviewPage();

describe('List posts', () => {

  describe('Empty list of posts', () => {

    describe('When the initial page is opened', () => {
      beforeAll(async () => {
        await ngApimock.selectScenario('GET-posts', 'empty');
        await postsOverviewPage.open();
      });

      it('Then it shows an empty list', async () => {
        expect(await postsOverviewPage.getInfoText()).to.equal('No posts added yet!');
      });

      it('Then it should show the new post button', async () => {
        expect(await postsOverviewPage.isNewPostBtnVisible()).to.equal(true);
      });
    });
  });

  describe('Show a list of posts', () => {

    describe('When the initial page is opened', () => {
      beforeAll(async () => {
        await ngApimock.selectScenario('GET-posts', '2-items');
        await postsOverviewPage.open();
      });

      it('Then it should show the list of posts', async () => {
        expect(await postsOverviewPage.getPost(1).getTitle()).to.equal('My first post');
        expect(await postsOverviewPage.getPost(2).getTitle()).to.equal('This is the second post');
      });

      it('Then it should show the new post button', async () => {
        expect(await postsOverviewPage.isNewPostBtnVisible()).to.equal(true);
      });
    });

    describe('When a post is clicked', () => {
      beforeAll(async () => {
        await ngApimock.selectScenario('GET-posts', '2-items');
        await postsOverviewPage.open();
        await postsOverviewPage.getPost(1).click();
      });

      it('Then the contents of the post is shown', async () => {
        expect(await postsOverviewPage.getPost(1).getContents()).to.equal('My first post');
      });

      it('Then the edit button is shown', async () => {
        expect(await postsOverviewPage.getPost(1).isEditButtonVisible()).to.equal(true);
      });

      it('Then the delete button is shown', async () => {
        expect(await postsOverviewPage.getPost(1).isDeleteButtonVisible()).to.equal(true);
      });

    });

    describe('When an open post is clicked', () => {
      beforeAll(async () => {
        await postsOverviewPage.getPost(1).click();
      });

      it('Then the content of the post is no longer shown', async () => {
        expect(await postsOverviewPage.getPost(1).isContentVisible()).to.equal(false);
      });

      it('Then the edit button is no longer shown', async () => {
        expect(await postsOverviewPage.getPost(1).isEditButtonVisible()).to.equal(false);
      });

      it('Then the delete button is no longer shown', async () => {
        expect(await postsOverviewPage.getPost(1).isDeleteButtonVisible()).to.equal(false);
      });

    });
  });

});
