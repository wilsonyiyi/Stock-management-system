import { DatePluginPage } from './app.po';

describe('date-plugin App', function() {
  let page: DatePluginPage;

  beforeEach(() => {
    page = new DatePluginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
