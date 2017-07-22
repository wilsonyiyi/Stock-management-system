import { TestForViewPage } from './app.po';

describe('test-for-view App', function() {
  let page: TestForViewPage;

  beforeEach(() => {
    page = new TestForViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
