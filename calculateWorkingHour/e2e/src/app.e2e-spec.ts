import { Console } from 'console';
import { browser, by, element, logging } from 'protractor';
import { async } from 'rxjs';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('My browser test', function () {
    it('should have a title', function () {
      browser.get('http://localhost:4200/');
      expect(browser.getTitle()).toContain('http://localhost:4200/');
    });
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
