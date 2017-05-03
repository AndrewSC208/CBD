import { CbdAppPage } from './app.po';

describe('cbd-app App', () => {
  let page: CbdAppPage;

  beforeEach(() => {
    page = new CbdAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
