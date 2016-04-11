/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var Sidebar = function () {
  this.sidebarSection = element(by.css('[aria-label="sidebarSection"]'));
  this.findButton = element(by.css('[aria-label="findButton"]'));
  this.loadButton = element(by.css('[aria-label="loadButton"]'));
  this.downloadButton = element(by.css('[aria-label="downloadButton"]'));
  this.FAB = element(by.css('[aria-label="SidebarFAB"]'));

  // this.login_form = this.login.element(by.css('[name="form"]'));
  // this.email = this.login.element(by.css('[type="email"]'))
  // this.password = this.login.element(by.css('[type="password"]'))
  // this.submit = this.login.element(by.css('[type="submit"]'))
  // this.recover = this.login.element(by.css('[ui-sref="forgot"'))

  // this.email_error = this.login.element(by.css('[ng-messages="submitted && form.email.$error"]'))
  // this.email_error_require = this.email_error.element(by.css('[ng-message="required"]'))
  // this.email_error_valid = this.email_error.element(by.css('[ng-message="email"]'))
  // this.password_error = this.login.element(by.css('[ng-messages="submitted && form.password.$error"]'))
  // this.password_error_require = this.password_error.element(by.css('[ng-message="required"]'))
};

module.exports = new Sidebar();
