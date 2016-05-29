'use strict';

angular.module('calypsoClientApp')
  .directive('d3DualbarsLegend', function ($window, $compile, $mdDialog, $mdMedia) {
    return {
      restrict: 'EA',
      scope: {},
      link: function (scope, element) {
        var width = 320;
        var height = 64;
        var svg = d3.select(element[0])
          .append('svg')
          .attr('aria-label', 'dualbarsSvgLegend')
          .style('height', height + 'px')
          .style('width', width + 'px');
        scope.open = function (event, name) {
            var parentE1 = angular.element(document.body);
            var customFullscreen = $mdMedia('xs') || $mdMedia('sm');
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && customFullscreen;
            $mdDialog.show({
              parent: parentE1,
              targetEvent: event,
              fullscreen: useFullScreen,
              clickOutsideToClose: true,
              template: '<enhanced-dialog name=' + name + '></enhanced-dialog>'
            });
          };
        var radiusScale = d3.scale.linear()
          .domain([0, 0.45])
          .range([3, 57 / 2]);

        var legend = svg.append('g').attr('class', 'legend');

        var absolute = legend.append('g');

        absolute.attr('transform', 'translate(0, ' + height / 2 + ')');

        absolute.append('g').attr('transform', 'translate(0, 5)')
          .append('text')
          .attr('font-size', '.8em')
          .text('Absolute Risk:')
          .style('fill', '#fff');

        var legendCircles = absolute.append('g').attr('class', 'legendCircles');
        legendCircles.attr('transform', 'translate(130, 0)');

        var five = legendCircles.append('g').attr('transform', 'translate(0, 0)');
        five.append('circle')
          .attr('r', radiusScale(Math.sqrt(0.05)))
          .attr('fill', '#e37d7a')
          .attr('opacity', 1);
    
        five.append('circle')
          .attr('r', 5)
          .attr('class', 'point negative');
        five.append('text')
          .attr('x', 15).attr('y', 5).attr('height', 30).attr('width', 100)
          .attr('font-size', '.8em').text('5%').style('fill', '#fff');

        var ten = legendCircles.append('g').attr('transform', 'translate(65, 0)');
        ten.append('circle')
          .attr('r', radiusScale(Math.sqrt(0.1)))
          .attr('fill', '#e37d7a')
          .attr('opacity', 1);
        ten.append('circle')
          .attr('r', 5)
          .attr('class', 'point negative');
        ten.append('text')
          .attr('x', 15).attr('y', 5).attr('height', 30).attr('width', 100)
          .attr('font-size', '.8em').text('10%').style('fill', '#fff');

        var twoFive = legendCircles.append('g').attr('transform', 'translate(140, 0)');
        twoFive.append('circle')
          .attr('r', radiusScale(Math.sqrt(0.20)))
          .attr('fill', '#e37d7a')
          .attr('opacity', 1);
        twoFive.append('circle')
          .attr('r', 5)
          .attr('class', 'point negative');
        twoFive.append('text')
          .attr('x', 15).attr('y', 5).attr('height', 30).attr('width', 100)
          .attr('font-size', '.8em').text('20%').style('fill', '#fff');

        element.removeAttr('d3-Dualbars-Legend');
        $compile(element)(scope);
        element.attr('d3-Dualbars-Legend');
      }
    };
  });
