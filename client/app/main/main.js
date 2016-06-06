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
          factors: null,
          orders: null
        },
        controller: function($scope, $stateParams, $rootScope, $state, $http, $q){
          $scope.listFactors = $stateParams.factors;
          $scope.listOrders = $stateParams.orders;
          $scope.factors = {};
          var orderIds = $scope.listOrders.map(function (order){
            return order.id;
          });

          var get_orders = function(label, id){
            return $http({
              url: 'http://54.186.43.170/api/orders/target/' + id,
              method: 'GET'
            }).then(function (response){
              makeFactors(response.data, label);
            });
          }
          var makeFactors = function (orders, label){
            orders.map(function (order){
              if (orderIds.indexOf(order.id) > -1){
                $scope.factors[label].push(order.description);
              }
              
            });
            //delete factors with no orders
            // Object.keys($scope.factors).map(function (factor){
            //   if ($scope.factors[factor].length === 0){
            //     delete $scope.factors[factor];
            //   }
            //   console.log($scope.factors);
            // });
          }

          //run
          $scope.listFactors.map(function (factor){
            $scope.factors[factor.label] = [];
            get_orders(factor.label, factor.id);
          })

        }
      });
  });
