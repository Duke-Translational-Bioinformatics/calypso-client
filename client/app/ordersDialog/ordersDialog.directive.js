'use strict';

angular.module('calypsoClientApp')
  .directive('ordersDialog', function () {
    return {
      templateUrl: 'app/ordersDialog/ordersDialog.html',
      restrict: 'EA',
      replace: true,
      scope: {
        name: '@'
      },
      controller: function ($scope, $mdDialog, Patient, $rootScope, Utils, dataConstants, $state, $http, $q, ENV) {
      	$scope.basket = Utils.getBasket();
      	$scope.factors = Object.keys($scope.basket);
      	$scope.select = [];

      	$scope.print = function(){
        $mdDialog.hide();
        $state.go('print',{'basket': $scope.basket});
        };

        $scope.selectIntervention = function(order){
          var index1 = $scope.select.indexOf(order);
          if (index1 < 0){
            $scope.select.push(order);
          }
          if (index1 > -1){
            $scope.select.splice(index1, 1);
          }
        };

        // $scope.clear = function(){
        //   $scope.select.map(function (iOrder) {
        //     console.log(iOrder);
        //     Object.keys($scope.basket).map(function(factor) {
        //       var orderList = $scope.basket[factor]
        //       orderList.map(function(order) {
        //         console.log(order);
        //         if (orderList.order == iOrder){
        //           console.log("clear");
        //         }
        //       });
        //     });
        //   });
        // };

      }
	};
});