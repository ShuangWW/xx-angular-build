import { AngularBuildPage } from './app.po';

describe('angular-build App', function() {
  let page: AngularBuildPage;

  beforeEach(() => {
    page = new AngularBuildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
