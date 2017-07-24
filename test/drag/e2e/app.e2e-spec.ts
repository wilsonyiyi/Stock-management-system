import { DragPage } from './app.po';

describe('drag App', function() {
  let page: DragPage;

  beforeEach(() => {
    page = new DragPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
