import { TestForComponentPage } from './app.po';

describe('test-for-component App', function() {
  let page: TestForComponentPage;

  beforeEach(() => {
    page = new TestForComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
