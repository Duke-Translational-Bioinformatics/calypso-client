'use strict';

angular.module('calypsoClientApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'config',
    'ngMessages',
    'ngFileUpload'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(false);
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '800'
      })
      .accentPalette('light-blue', {
        'default': '600'
      });
  });
