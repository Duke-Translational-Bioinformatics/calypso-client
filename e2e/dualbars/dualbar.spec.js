'use strict';

describe('Dualbars directive', function () {
  var Dualbars;

  beforeEach(function () {
    browser.driver.manage().window().setSize(1920, 1080);
    browser.get('/#');
    browser.waitForAngular();
    Dualbars = require('./dualbars.po');
  });
  it('dualbar legend should exist', function () {
    expect(Dualbars.legend.isPresent()).toBe(true);
    expect(Dualbars.svgLegend.isPresent()).toBe(true);
    expect(Dualbars.groupLegend.isPresent()).toBe(true);
  });

  // it('dualbar should exist', function () {
  //   expect(Dualbars.section.isPresent()).toBe(true);
  //   expect(Dualbars.svg.isPresent()).toBe(true);
  //   expect(Dualbars.group.isPresent()).toBe(true);
  //   expect(Dualbars.bar.isPresent()).toBe(true);
  // });

  // it('dualbar should be clickable', function () {
  //   expect(Dualbars.bar.isPresent()).toBe(true);
  //   Dualbars.bar.click();
  // });
});
