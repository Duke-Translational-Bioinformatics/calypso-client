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

        // histogram 
        var graphMargin = parseInt(attrs.graphMargin) || 20; //20  Margin from bottom
        var groupPadding = parseInt(attrs.groupPadding) || 90; //90
        var trueHeight = parseInt(attrs.height) || 650; //450
        var trueWidth = attrs.width || 550;
        var margin = {
          top: 30,
          right: 20,
          bottom: 20,
          left: 70
        }; //margin from top bar

        // init svg
        var svg = d3.select(element[0])
          .append('svg')
          .style('width', '100%')
          .attr('height', trueHeight)
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        scope.$on('patient-update', function () {
          var histogram = angular.copy(Patient.histogram[scope.select].histogram);
          var prediction = angular.copy(Patient.prediction.predict[scope.select]);
          var metric = angular.copy(Patient.histogram[scope.select].stats);
          if (Patient.histogram[scope.select] && Patient.prediction.predict) scope.render(svg, histogram, prediction, scope.config, metric);
        });

        // resize logic
        $window.addEventListener('resize', function () {
          var histogram = angular.copy(Patient.histogram[scope.select].histogram);
          var prediction = angular.copy(Patient.prediction.predict[scope.select]);
          var metric = angular.copy(Patient.histogram[scope.select].stats);
          if (Patient.histogram[scope.select] && Patient.prediction.predict) scope.render(svg, histogram, prediction, scope.config, metric);
        });

        // render svg
        scope.render = function (svg, histogram_array, patient_prediction, config, metric) {
          if (svg.selectAll('*')) svg.selectAll('*').remove();
          var width = d3.select(element[0]).node().offsetWidth - graphMargin - groupPadding;
          var height = trueHeight - graphMargin - 80;
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
          //x axis attributes
          var xAxis = d3.svg.axis()
            .scale(x)
            .ticks(tickDensity(width - 100))
            .tickFormat(d3.format('%'))
            .orient('bottom');

          //y axis atributes
          var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left')
            .tickFormat(d3.format('%'));

          var group = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

          //draw x axis
          group.append('g')
            .attr('class', 'x axis graph')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis)
            .append('text')
            .attr('class', 'label')
            .attr('x', width)
            .attr('y', -6)
            .attr('font-size', '0.8em')
            .attr('font-weight', 'bold')
            .style('text-anchor', 'end')
            .text('ABS. RISK');

          //draw y axis
          group.append('g')
            .attr('class', 'y axis graph')
            .call(yAxis)
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -50)
            .attr('x', -80 - (height / 2))
            .attr('font-size', '0.8em')
            .attr('font-weight', 'bold')
            .text('% ALL PATIENTS');

          group.append('g').selectAll('.bar')
            .data(histogram_array).enter()
            .append('rect')
            .attr("class", 'bar')
            .attr('x', function (d) {
              return d.lower * width;
            })
            .attr('y', function (d) {
              return height - d.freq;
            })
            .attr('width', function (d) {
              return (d.upper - d.lower) *width;
            })
            .attr('height', function (d){
              return d.freq;
            })
            .attr('fill-opacity', 0.8);

            // .data(histogram_data).enter()
            // .append('rect', '.axis')
            // .attr('class', function (d) {
            //   if (d.x <= patient_prediction && d.x + d.dx > patient_prediction) {
            //     return 'bar primary';
            //   }
            //   if (d.x < patient_prediction) {
            //     return 'bar negative';
            //   } else {
            //     return 'bar';
            //   }
            // })
            // .attr('x', function (d) {
            //   return x(d.x) + 1;
            // })
            // .attr('y', function (d) {
            //   return y(d.y);
            // })
            // .attr('width', x(histogram_data[0].dx + histogram_data[0].x) - x(histogram_data[0].x) - 1)
            // .attr('height', function (d) {
            //   return height - y(d.y);
            // })
            // .attr('fill-opacity', 0.8)
            // .attr('tooltip-append-to-body', true)
            // .attr('tooltip-placement', 'top')
            // .attr('tooltip', function (d) {
            //   if (d.x < patient_prediction && d.x + d.dx > patient_prediction) {
            //     return 'patient is here: ' + (Utils.getPercentile(patient_prediction, histogram_array) * 100).toFixed(1) + '%';
            //   } else {
            //     return (Utils.getPercentile(d.x + d.dx, histogram_array) * 100).toFixed(1) + '%';
            //   }
            // });

          var legendX = x(Math.max.apply(null, histogram_array)) - 60;
          var legendY = y(0) - 300; // y(0) - 100
          var legend = group.append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(' + legendX + ', ' + legendY + ')')
            .attr('height', 100)
            .attr('width', 100);

          var median = legend.append('g')
            .append('g');

          var patient = legend.append('g')
            .append('g');

          // labels for histogram
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
            .text('Patient');

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
            .text('Median');

            //patient circle
          group.append('line')
            .attr('x1', metric.median * width)
            .attr('y1', y(0) + 50)
            .attr('x2', patient_prediction * width)
            .attr('y2', y(0) + 50)
            .style('stroke-width', 3)
            .style('stroke', function () {
              return ((metric.median - patient_prediction) * width > 0) ? '#5cb85c' : '#d9534f';
            })
            .style('fill', 'none');

          group.append('circle')
            .attr('cx', patient_prediction * width)
            .attr('cy', y(0) + 50)
            .attr('r', 5)
            .attr('class', 'point');

          group.append('line')
            .attr('x1', patient_prediction * width)
            .attr('y1', y(0) + 50)
            .attr('x2', patient_prediction * width)
            .attr('y2', y(0))
            .style('stroke-width', 1)
            .style('stroke-dasharray', ('3, 3'))
            .style('stroke', '#d9534f')
            .style('fill', 'none');

          group.append('circle')
            .attr('cx', metric.median * width)
            .attr('cy', y(0) + 50)
            .attr('r', 5)
            .attr('class', 'point median');

          group.append('line')
            .attr('x1', metric.median * width)
            .attr('y1', y(0) + 50)
            .attr('x2', metric.median * width)
            .attr('y2', y(0))
            .style('stroke-width', 1)
            .style('stroke-dasharray', ('3, 3'))
            .style('stroke', '#4393B9')
            .style('fill', 'none');
        };

        scope.render();
      }
    };
  });
