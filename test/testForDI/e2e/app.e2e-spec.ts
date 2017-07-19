import { TestForDIPage } from './app.po';

describe('test-for-di App', function() {
  let page: TestForDIPage;

  beforeEach(() => {
    page = new TestForDIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
