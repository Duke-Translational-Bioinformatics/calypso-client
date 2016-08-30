'use strict';

angular.module('calypsoClientApp')
  .directive('main', function () {
    return {
      templateUrl: 'app/main/main.html',
      restrict: 'EA',
      replace: true,
      scope: {},
      link: function () {},
      controller: function ($scope, $mdSidenav, $mdDialog, $mdMedia, $http, $timeout, dataConstants, ENV, Utils, Patient) {
        $scope.ENV = ENV;
        $scope.Patient = Patient;
        $scope.Utils = Utils;

        $scope.toggle = function () {
          $mdSidenav('left').toggle();
        };

        var timeout;

        // html data
        $scope.labels = dataConstants.LABELS;
        $scope.cpt_type_label = dataConstants.CPT_TYPE_LABELS;
        $scope.sections = {
          patient_info: dataConstants.PATIENT_INFO.split(','),
          patient_history: dataConstants.PATIENT_HISTORY.split(','),
          risk_factors: dataConstants.RISK_FACTORS.split(','),
          risk_factors_boolean: dataConstants.RISK_FACTORS_BOOLEAN.split(','),
          surgical_info: dataConstants.SURGICAL_INFO.split(','),
          surgical_info_boolean: dataConstants.SURGICAL_INFO_BOOLEAN.split(','),
          labs: dataConstants.LABS.split(','),
        };

        $scope.openCaremap = function (event) {
          var parentE1 = angular.element(document.body);
          var customFullscreen = $mdMedia('xs') || $mdMedia('sm');
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && customFullscreen;
          $mdDialog.show({
            parent: parentE1,
            targetEvent: event,
            fullscreen: useFullScreen,
            clickOutsideToClose: true,
            template: '<caremap-dialog></caremap-dialog>'
          });  
        };

        $scope.openComplications = function (event) {
          var parentE1 = angular.element(document.body);
          var customFullscreen = $mdMedia('xs') || $mdMedia('sm');
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && customFullscreen;
          $mdDialog.show({
            parent: parentE1,
            targetEvent: event,
            fullscreen: useFullScreen,
            clickOutsideToClose: true,
            template: '<allcomp-dialog></allcomp-dialog>'
          });  
        };

        $scope.openInterventions = function (event) {
            var parentE1 = angular.element(document.body);
            var customFullscreen = $mdMedia('xs') || $mdMedia('sm');
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && customFullscreen;
            $mdDialog.show({
              parent: parentE1,
              targetEvent: event,
              fullscreen: useFullScreen,
              clickOutsideToClose: true,
              template: '<orders-dialog></orders-dialog>'
            });
          };

        $scope.query = function (text, array) {
          var pattern = new RegExp(text);
          return array.filter(function (ele) {
            if (pattern.test(ele)) return ele;
          });
        };
      }
    };
  });
