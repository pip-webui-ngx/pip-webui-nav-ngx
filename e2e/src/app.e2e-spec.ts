import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "Search text -" in first span in breadcrumb', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Search text -');
  });
});
