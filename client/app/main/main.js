'use strict';

angular.module('calypsoClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('print', {
      	url: '/print/:factors/:orders',
      	templateUrl: 'app/main/print.html',
        controller: function($scope, $stateParams){
            $scope.listFactors = $stateParams.factors.split(",");
            $scope.listOrders = $stateParams.orders.split(",");
            console.log($scope.listFactors);
            console.log($scope.listOrders);
        }

      });
  });
