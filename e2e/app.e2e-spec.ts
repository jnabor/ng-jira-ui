import { NgJiraUiPage } from './app.po';

describe('ng-jira-ui App', () => {
  let page: NgJiraUiPage;

  beforeEach(() => {
    page = new NgJiraUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
