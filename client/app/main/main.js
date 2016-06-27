'use strict';

angular.module('calypsoClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('print', {
      	url: '/print',
      	templateUrl: 'app/main/print.html',
        params: {
          basket: null
        },
        controller: function($scope, $stateParams, $rootScope, $state, $http, $q){
          $scope.listVentions = $stateParams.basket;
          $scope.factors = Object.keys($scope.listVentions);
        }
      });
  });
