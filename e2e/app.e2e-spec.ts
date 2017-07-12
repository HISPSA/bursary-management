import { BursaryManagementAppPage } from './app.po';

describe('bursary-management-app App', () => {
  let page: BursaryManagementAppPage;

  beforeEach(() => {
    page = new BursaryManagementAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
