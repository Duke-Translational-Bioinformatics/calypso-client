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
      controller: function ($scope, $mdDialog, Patient, $rootScope, Utils, dataConstants) {
        $scope.Patient = Patient;
        $scope.Utils = Utils;
        $scope.dataConstants = dataConstants;

        $scope.closeDialog = function () {
          $mdDialog.hide();
        };

        $scope.resample = function () {
          Patient.refresh(Patient.values).then(function () {
            $rootScope.$broadcast('patient-update');
          });
        };

        $scope.values = [];

        $scope.orderObj = {
          selected_orders: [],
          orders: []
        };

        $scope.$watch('values', function (newValues) {
          var orders = newValues.map(function (ele, index) {
            if (ele) return index;
          }).filter(function (ele) {
            if (ele !== undefined) return true;
          }).map(function (ele) {
            return $scope.interventions[ele];
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

        $scope.interventions = Utils.getInterventions($scope.name, Patient.values);
        $scope.resample();
      }
    };
  });
