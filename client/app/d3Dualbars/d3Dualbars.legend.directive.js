'use strict';

angular.module('calypsoClientApp')
  .directive('d3DualbarsLegend', function ($window, $compile, $mdDialog, $mdMedia) {
    return {
      restrict: 'EA',
      scope: {},
      link: function (scope, element, attrs) {

      	var barHeight = parseInt(attrs.barHeight) || 40;
        var barPadding = parseInt(attrs.barPadding) || 5;
        var graphMargin = parseInt(attrs.graphMargin) || 30;
        var barMargin = parseInt(attrs.barMargin) || 5;
        var textMargin = parseInt(attrs.textMargin) || 5;
        var groupPadding = parseInt(attrs.groupPadding) || 60;
        var topPadding = 20;
        var sidePadding = 100;
        var defaultConfig = {
          barOpacity: 0.05,
          upperRadius: 0.45,
          autoBarHeight: true
        };
        // init svg
        var svg = d3.select(element[0])
          .append('svg')
          .attr('aria-label', 'dualbarsSvgLegend')
          .style('width', '250%')

        var timeout;
        $window.addEventListener('resize', function () {
          if (timeout) $timeout.cancel(timeout);
          timeout = $timeout(function () {
            scope.render(preprocess(scope.data), scope.config);
          }, 500);
        });

        var width = d3.select(element[0]).node().offsetWidth - graphMargin - groupPadding - sidePadding;
        console.log(width);

        var radiusScale = d3.scale.linear()
            .domain([0, .45])
            .range([3, 57/2]);

  		  var legendY = 70;
          var legendX= 600;
          var legend = svg.append('g')
            .attr('class', 'legend')
            .attr('x', function () {})
            .attr('transform', 'translate(' + legendX + ',' + legendY + ')')
            .attr('height', 100)
            .attr('width', 100);

          var relative = legend.append('g')
            .append('g')
            .attr('transform', 'translate(-205, -60)'); //'translate(' + (width - 889) + ',' + -60 +')'); when width = 684
          relative.append('line')
            .attr('x1', -50)
            .attr('y1', 20)
            .attr('x2', 30)
            .attr('y2', 20)
            .style('stroke-width', 1)
            .style('stroke-dasharray', ('3, 3'))
            .style('stroke', '#fff')
            .style('fill', 'none');
          relative.append('text')
            .attr('x', -175)
            .attr('y', 25)
            .attr('height', 30)
            .attr('width', 100)
            .attr('font-size', '.8em')
            .text('Percentile Risk:')
            .style('fill','#fff');

          var absolute = legend.append('g')
            .append('g')
            .attr('transform', 'translate(-380, 5)'); //'translate(' + (width-1064) + ',' + 5 + ')');

          absolute.append('text')
            .attr('font-size', '.8em')
            .text('Absolute Risk:')
            .style('fill','#fff');

          var twoFive = legend.append('g')
            .append('g')
            .attr('transform', 'translate(-110, 0)'); //'translate(' + (width-794) + ',' + 0 + ')');
          twoFive.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', function () {
              return radiusScale(Math.sqrt(0.25));
            })
            .attr('fill', '#e37d7a')
            .attr('opacity', 1);
          twoFive.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 5)
            .attr('class', 'point negative');
          twoFive.append('text')
            .attr('x', 15)
            .attr('y', 5)
            .attr('height', 30)
            .attr('width', 100)
            .attr('font-size', '.8em')
            .text('25%')
            .style('fill','#fff');

          var ten = legend.append('g')
            .append('g')
            .attr('transform', 'translate(-190, 0)'); //'translate(' + (width-874) + ',' + 0 + ')');
          ten.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', function () {
              return radiusScale(Math.sqrt(0.1));
            })
            .attr('fill', '#e37d7a')
            .attr('opacity', 1);
          ten.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 5)
            .attr('class', 'point negative');
          ten.append('text')
            .attr('x', 15)
            .attr('y', 5)
            .attr('height', 30)
            .attr('width', 100)
            .attr('font-size', '.8em')
            .text('10%')
            .style('fill','#fff');

         var five = legend.append('g')
            .append('g')
            .attr('transform', 'translate(-250, 0)'); //'translate(' + (width-934) + ',' + 0 + ')');
          five.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', function () {
              return radiusScale(Math.sqrt(0.05));
            })
            .attr('fill', '#e37d7a')
            .attr('opacity', 1);
          five.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 5)
            .attr('class', 'point negative');
          five.append('text')
            .attr('x', 15)
            .attr('y', 5)
            .attr('height', 30)
            .attr('width', 100)
            .attr('font-size', '.8em')
            .text('5%')
            .style('fill','#fff');

          var fifty = legend.append('g')
            .append('g')
            .attr('transform', 'translate(-10, 0)'); //'translate(' + (width-694) + ',' + 0 + ')');
          fifty.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', function () {
              return radiusScale(Math.sqrt(0.5));
            })
            .attr('fill', '#e37d7a')
            .attr('opacity', 1);
          fifty.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 5)
            .attr('class', 'point negative');
          fifty.append('text')
            .attr('x', 15)
            .attr('y', 5)
            .attr('height', 30)
            .attr('width', 100)
            .attr('font-size', '.8em')
            .text('50%')
            .style('fill','#fff');

          element.removeAttr('d3-Dualbars-Legend');
          $compile(element)(scope);
          element.attr('d3-Dualbars-Legend');
      }
    };
  });