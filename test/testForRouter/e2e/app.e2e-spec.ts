import { TestForRouterPage } from './app.po';

describe('test-for-router App', function() {
  let page: TestForRouterPage;

  beforeEach(() => {
    page = new TestForRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
