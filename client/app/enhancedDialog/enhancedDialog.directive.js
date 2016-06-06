'use strict';

angular.module('calypsoClientApp')
  .directive('enhancedDialog', function () {
    return {
      templateUrl: 'app/enhancedDialog/enhancedDialog.html',
      restrict: 'EA',
      replace: true,
      scope: {
        name: '@'
      },
      controller: function ($scope, $mdDialog, Patient, $rootScope, Utils, dataConstants, $state, $http, $q, ENV) {
        $scope.Patient = Patient;
        $scope.Utils = Utils;
        $scope.dataConstants = dataConstants;
        $scope.postop = Patient.targets;
        $scope.outcomes = [];
        for (var i = 0; i < Object.keys(dataConstants.COMPLICATION_INTERVENTIONS).length; i++) {
          var ikey = Object.keys(dataConstants.COMPLICATION_INTERVENTIONS)[i];
          var iObject = dataConstants.COMPLICATION_INTERVENTIONS[ikey];
          if (iObject.preop_variable == $scope.name){
            $scope.outcomes.push(iObject);
          }
        };
        $scope.closeDialog = function () {
          $mdDialog.hide();
        };

        $scope.print = function(){
          $mdDialog.hide();
          $state.go('print',{factors: $scope.checkedFactor, orders: $scope.checkedOrder});

        }

        $scope.resample = function () {
          Patient.get_histogram($scope.name, Patient.values.caseid).then(function () {
            $rootScope.$broadcast('patient-update-histo');
          });
        };

        $scope.valuesOutcome = [];
        $scope.valuesPostop = [];

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
          //clear and remake orders list on each checkbox
          $scope.orderObj.orders = [];
          orderID_set = [];
          $scope.checkedFactor.map(function (iObject) {
            if (dataConstants.COMPLICATIONS.indexOf(iObject.preop_variable) > -1){
              iObject.order_ids.map(function(id) {
                get_orders_byid(id);
              });
            }
            else {
             get_orders_server(iObject.id);
            }
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
        };

        $scope.$watch('valuesOutcome', function (newValues) {
          var orders = newValues.map(function (ele, index) {
            if (ele) return index;
          }).filter(function (ele) {
            if (ele !== undefined) {
              return true;
            }
          }).map(function (ele) {
            return $scope.outcomes[ele];
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

        var get_orders_byid = function(id){
          return $http({
            url: ENV.hosts.server + '/api/orders/' + id,
            method: 'GET'
          }).then(function (response){
            makeSet([response.data]);
          });
        }
        var get_orders_server = function(id){
          return $http({
            url: ENV.hosts.server + '/api/orders/target/' + id,
            method: 'GET'
          }).then(function (response){
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
        //run
        $scope.resample();

      }
    };
  });
