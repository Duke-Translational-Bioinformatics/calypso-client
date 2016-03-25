'use strict';

angular.module('calypsoClientApp')
  .directive('d3Distribution', function (Patient, Utils, $window) {
    return {
      restrict: 'EA',
      scope: {
        config: '='
      },
      link: function (scope, element, attrs) {
        scope.config = {
          customControl: false,
          yAxis: {
            min: 0,
            max: 0.5
          },
          bins: 20
        };

        scope.select = attrs.select;

        var graphMargin = parseInt(attrs.graphMargin) || 20;
        var groupPadding = parseInt(attrs.groupPadding) || 90;
        var trueHeight = parseInt(attrs.height) || 450;
        var trueWidth = attrs.width || 550;

        // init svg
        var svg = d3.select(element[0])
          .append('svg')
          .style('width', '100%')
          .attr('height', trueHeight);

        scope.$on('patient-update', function () {
          var histogram = angular.copy(Patient.histogram.histogram[scope.select]);
          var prediction = angular.copy(Patient.prediction.predict[scope.select]);
          var metric = angular.copy(Patient.histogram.metrics[scope.select]);
          if (Patient.histogram.histogram && Patient.prediction.predict) scope.render(svg, histogram, prediction, scope.config, metric);
        });

        // resize logic
        $window.addEventListener('resize', function () {
          var histogram = angular.copy(Patient.histogram.histogram[scope.select]);
          var prediction = angular.copy(Patient.prediction.predict[scope.select]);
          var metric = angular.copy(Patient.histogram.metrics[scope.select]);
          if (Patient.histogram.histogram && Patient.prediction.predict) scope.render(svg, histogram, prediction, scope.config, metric);
        });

        // render svg
        scope.render = function (svg, histogram_array, patient_prediction, config, metric) {
          if (svg.selectAll('*')) svg.selectAll('*').remove();
          var width = d3.select(element[0]).node().offsetWidth - graphMargin - groupPadding;
          var height = trueHeight - graphMargin - 60;
          if (scope.config.customControl) width = trueWidth;

          var x = d3.scale.linear()
            .domain([0, Math.max.apply(null, histogram_array)]).nice()
            .range([0, width]);

          var binDensity = d3.scale.linear()
            .domain([300, 600])
            .range([20, 40])
            .clamp(true);

          var tickDensity = d3.scale.linear()
            .domain([300, 600])
            .range([5, 15])
            .clamp(true);

          var histogram;
          if (config.customControl) {
            histogram = d3.layout.histogram()
              .frequency(false)
              .bins(config.bins);
          } else {
            histogram = d3.layout.histogram()
              .frequency(false)
              .bins(binDensity(width));
          }
          var histogram_data = histogram(histogram_array);

          var y;
          if (config.customControl && (config.yAxis.max > 0 || config.yAxis.min > 0)) {
            y = d3.scale.linear()
              .domain([config.yAxis.min, config.yAxis.max])
              .range([height, 0]);
          } else {
            y = d3.scale.linear()
              .domain([0, d3.max(histogram_data, function (d) {
                return d.y;
              })]).nice()
              .range([height, 0]);
          }

          var xAxis = d3.svg.axis()
            .scale(x)
            .ticks(tickDensity(width - 100))
            .tickFormat(d3.format('%'))
            .orient('bottom');

          var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left')
            .tickFormat(d3.format('%'));

          var group = svg.append('g').attr('transform', 'translate(' + groupPadding / 2 + ',' + 10 + ')');

          group.append('g')
            .attr('class', 'x axis graph')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis)
            .append('text')
            .attr('class', 'label')
            .attr('x', width)
            .attr('y', -6)
            .style('text-anchor', 'end')
            .text('% risk prediction');

          group.append('g')
            .attr('class', 'y axis graph')
            .call(yAxis);

          group.append('g').selectAll('.bar')
            .data(histogram_data).enter()
            .append('rect', '.axis')
            .attr('class', function (d) {
              if (d.x <= patient_prediction && d.x + d.dx > patient_prediction) {
                return 'bar primary';
              }
              if (d.x < patient_prediction) {
                return 'bar negative';
              } else {
                return 'bar';
              }
            })
            .attr('x', function (d) {
              return x(d.x) + 1;
            })
            .attr('y', function (d) {
              return y(d.y);
            })
            .attr('width', x(histogram_data[0].dx + histogram_data[0].x) - x(histogram_data[0].x) - 1)
            .attr('height', function (d) {
              return height - y(d.y);
            })
            .attr('fill-opacity', 0.8)
            .attr('tooltip-append-to-body', true)
            .attr('tooltip-placement', 'top')
            .attr('tooltip', function (d) {
              if (d.x < patient_prediction && d.x + d.dx > patient_prediction) {
                return 'patient is here: ' + (Utils.getPercentile(patient_prediction, histogram_array) * 100).toFixed(1) + '%';
              } else {
                return (Utils.getPercentile(d.x + d.dx, histogram_array) * 100).toFixed(1) + '%';
              }
            });

          var legendX = x(Math.max.apply(null, histogram_array));
          var legendY = y(0) - 100;
          var legend = group.append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(' + legendX + ', ' + legendY + ')')
            .attr('height', 100)
            .attr('width', 100);

          var median = legend.append('g')
            .append('g');

          var patient = legend.append('g')
            .append('g');

          patient.append('circle')
            .attr('cx', -10)
            .attr('cy', -5)
            .attr('r', 5)
            .attr('class', 'point');

          patient.append('text')
            .attr('x', 0)
            .attr('y', 0)
            .attr('height', 30)
            .attr('width', 100)
            .text('patient');

          median.append('circle')
            .attr('cx', -10)
            .attr('cy', 15)
            .attr('r', 5)
            .attr('class', 'point median');

          median.append('text')
            .attr('x', 0)
            .attr('y', 20)
            .attr('height', 30)
            .attr('width', 100)
            .text('median');

          group.append('line')
            .attr('x1', x(metric.median))
            .attr('y1', y(0) + 50)
            .attr('x2', x(patient_prediction))
            .attr('y2', y(0) + 50)
            .style('stroke-width', 3)
            .style('stroke', function () {
              return (x(metric.median) - x(patient_prediction) > 0) ? '#5cb85c' : '#d9534f';
            })
            .style('fill', 'none');

          group.append('circle')
            .attr('cx', x(patient_prediction))
            .attr('cy', y(0) + 50)
            .attr('r', 5)
            .attr('class', 'point');

          group.append('line')
            .attr('x1', x(patient_prediction))
            .attr('y1', y(0) + 50)
            .attr('x2', x(patient_prediction))
            .attr('y2', y(0))
            .style('stroke-width', 1)
            .style('stroke-dasharray', ('3, 3'))
            .style('stroke', '#4393B9')
            .style('fill', 'none');

          group.append('circle')
            .attr('cx', x(metric.median))
            .attr('cy', y(0) + 50)
            .attr('r', 5)
            .attr('class', 'point median');

          group.append('line')
            .attr('x1', x(metric.median))
            .attr('y1', y(0) + 50)
            .attr('x2', x(metric.median))
            .attr('y2', y(0))
            .style('stroke-width', 1)
            .style('stroke-dasharray', ('3, 3'))
            .style('stroke', 'rgb(244,81,30)')
            .style('fill', 'none');
        };

        scope.render();
      }
    };
  });
