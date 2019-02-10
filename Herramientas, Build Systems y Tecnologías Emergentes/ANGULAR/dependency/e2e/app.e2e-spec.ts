import { DependencyPage } from './app.po';

describe('dependency App', function() {
  let page: DependencyPage;

  beforeEach(() => {
    page = new DependencyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
