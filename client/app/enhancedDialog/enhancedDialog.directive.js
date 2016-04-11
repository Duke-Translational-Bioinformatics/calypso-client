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
      controller: function ($scope, $mdDialog, Patient, $rootScope, Utils, dataConstants, $state) {
        $scope.Patient = Patient;
        $scope.Utils = Utils;
        $scope.dataConstants = dataConstants;

        $scope.closeDialog = function () {
          $mdDialog.hide();
        };

        $scope.print = function(){
          $mdDialog.hide();
          $state.go('print',{factors: $scope.checkedFactor, orders: $scope.checkedOrder});

        }

        $scope.resample = function () {
          Patient.refresh(Patient.values).then(function () {
            $rootScope.$broadcast('patient-update');
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

        $scope.selectFactor = function(label){
          var index = $scope.checkedFactor.indexOf(label);
          if (index < 0){
            $scope.checkedFactor.push(label);
          }
          if (index > -1){
            $scope.checkedFactor.splice(index, 1);
          }
          console.log($scope.checkedFactor);
        };

        $scope.selectIntervention = function(order_text){
          var index1 = $scope.checkedOrder.indexOf(order_text);
          if (index1 < 0){
            $scope.checkedOrder.push(order_text);
          }
          if (index1 > -1){
            $scope.checkedOrder.splice(index1, 1);
          }
          console.log($scope.checkedOrder);
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

        $scope.outcomes = Utils.getInterventions($scope.name, Patient.values)[0];
        $scope.postop = Utils.getInterventions($scope.name, Patient.values)[1];
        $scope.resample();

      }
    };
  });
