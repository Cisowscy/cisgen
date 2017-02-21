import { CisgenPage } from './app.po';

describe('cisgen App', () => {
  let page: CisgenPage;

  beforeEach(() => {
    page = new CisgenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
