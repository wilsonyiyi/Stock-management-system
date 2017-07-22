import { TestForContentPage } from './app.po';

describe('test-for-content App', function() {
  let page: TestForContentPage;

  beforeEach(() => {
    page = new TestForContentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
