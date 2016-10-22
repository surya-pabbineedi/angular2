import { LookupPage } from './app.po';

describe('lookup App', function() {
  let page: LookupPage;

  beforeEach(() => {
    page = new LookupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
