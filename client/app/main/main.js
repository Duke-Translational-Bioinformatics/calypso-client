'use strict';

angular.module('calypsoClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>',
      });
  });
