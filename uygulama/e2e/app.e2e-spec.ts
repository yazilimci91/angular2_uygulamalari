import { UygulamaPage } from './app.po';

describe('uygulama App', function() {
  let page: UygulamaPage;

  beforeEach(() => {
    page = new UygulamaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
