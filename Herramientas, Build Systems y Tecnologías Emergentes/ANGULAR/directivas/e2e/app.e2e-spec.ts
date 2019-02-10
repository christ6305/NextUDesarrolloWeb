import { DirectivasPage } from './app.po';

describe('directivas App', function() {
  let page: DirectivasPage;

  beforeEach(() => {
    page = new DirectivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
