'use strict';

angular.module('calypsoClientApp')
  .directive('caremapDialog', function () {
    return {
      templateUrl: 'app/caremapDialog/caremapDialog.html',
      restrict: 'EA',
      replace: true,
      scope: {
        name: '@'
      },
      controller: function ($scope, $mdDialog, Patient, $rootScope, Utils, dataConstants, $state, $http, $q, ENV) {
		$scope.Patient = Patient;
        $scope.Utils = Utils;
        $scope.dataConstants = dataConstants;
        $scope.postop = [];
        var basketCount = 0;

        Patient.targets.map(function(iTarget) {
          if(iTarget.preop_variable == "cpt"){
            $scope.postop.push(iTarget);
          }
        });

        $scope.complications = {
        	// 'uti': [order1,order2],
        	// 'cardiac': [order2, order4]
        };

        $scope.closeDialog = function () {
          $mdDialog.hide();
        };

        $scope.valuesOutcome = [];
        $scope.valuesPostop = [];
        $scope.orderChecklist = {};
        $scope.orderObj = {
          selected_orders: [],
          orders: []
        };

        //bind checkboxes to an array
        $scope.checkedFactor = [];
        $scope.checkedOrder = [];
        var orderID_set = [];

        $scope.selectFactor = function(obj){
          var index = $scope.checkedFactor.indexOf(obj);
          if (index < 0){
            $scope.checkedFactor.push(obj);
          }
          if (index > -1){
            $scope.checkedFactor.splice(index, 1);
          }
          Utils.updateFactor(obj);
          //clear and remake orders list on each checkbox
          $scope.orderObj.orders = [];
          $scope.orderChecklist = {};
          orderID_set = [];
          $scope.checkedFactor.map(function (iObject) {
             get_orders_server(iObject);
          });
        };
        
        $scope.selectIntervention = function(order){
          var index1 = $scope.checkedOrder.indexOf(order);
          if (index1 < 0){
            $scope.checkedOrder.push(order);
          }
          if (index1 > -1){
            $scope.checkedOrder.splice(index1, 1);
          }
          Utils.checkOrder(order);
        };

        var getOrdersCheckbox = function(basket, factor){
          var orderList = basket[factor.label];
          orderList.map(function(orderObj) {
            $scope.orderChecklist[orderObj.order.description] = orderObj.selected;
          });
        }

        $scope.$watch('valuesPostop', function (newValues) {
          var orders = newValues.map(function (ele, index) {
            if (ele) return index;
          }).filter(function (ele) {
            if (ele !== undefined) {
              return true;
            }
          }).map(function (ele) {
            return $scope.postop[ele];
          });

          orders = _.uniq(_.flatten(orders.map(function (ele) {
            return ele.order_ids;
          }))).filter(function (ele) {
            if (ele) return true;
          });
          orders = orders.map(function (ele) {
            return dataConstants.ORDERS[ele];
          });

          $scope.orderObj.orders = orders;

        }, true);

        var get_orders_server = function(factor){
          return $http({
            url: ENV.hosts.server + '/api/orders/target/' + factor.id,
            method: 'GET'
          }).then(function (response){
            Utils.updateOrder(factor, response.data);
            getOrdersCheckbox(Utils.orderBasket, factor);
            makeSet(response.data);
          });
        }

        var makeSet = function(orderArray){
          var mySet = $scope.orderObj.orders;
          orderArray.map(function (order){
            if (orderID_set.indexOf(order.id) < 0){
              mySet.push(order);
              orderID_set.push(order.id);
            }
          });
          $scope.orderObj.orders = mySet;
        }
      }
    };
  });