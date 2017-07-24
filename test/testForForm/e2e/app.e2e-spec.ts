import { TestForFormPage } from './app.po';

describe('test-for-form App', function() {
  let page: TestForFormPage;

  beforeEach(() => {
    page = new TestForFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
