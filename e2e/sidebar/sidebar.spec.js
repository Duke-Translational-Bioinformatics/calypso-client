'use strict';

describe('Sidebar directive', function () {
  var Sidebar;

  beforeEach(function () {
    browser.driver.manage().window().setSize(1920, 1080);
    browser.get('/#');
    browser.waitForAngular();
    Sidebar = require('./sidebar.po');
  });

  // it('sidebar should exist', function () {
  //   expect(Sidebar.sidebarSection.isPresent()).toBe(true);
  //   expect(Sidebar.findButton.isPresent()).toBe(true);
  //   expect(Sidebar.loadButton.isPresent()).toBe(true);
  //   expect(Sidebar.downloadButton.isPresent()).toBe(true);
  // });

  // it('buttons should be clickable', function () {
  //   Sidebar.FAB.click();
  //   Sidebar.findButton.click();
  //   //    Sidebar.downloadButton.click();
  //   Sidebar.loadButton.click();

  //   expect(true).toBe(true);
  // });

});
