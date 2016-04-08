/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var Dualbars = function () {
  this.section = element(by.css('[aria-label="dualbarsSection"]'));
  this.svg = element(by.css('[aria-label="dualbarsSvg"]'));
  this.group = this.svg.element(by.css('g'));
  this.bar = this.group.element(by.css('.bar'));
};

module.exports = new Dualbars();
