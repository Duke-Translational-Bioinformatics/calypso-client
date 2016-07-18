'use strict';

angular.module('calypsoClientApp')
  .directive('d3Dualbars', function ($window, $compile, $mdDialog, $mdMedia, dataConstants, Utils, Patient, $timeout) {
    return {
      restrict: 'EA',
      scope: {
        data: '=',
        config: '='
      },
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

        //show risk values on hover 
        scope.showTable = {};
        scope.hoverIn = function (name) {
          scope.showTable[name] = true;
        };
        scope.hoverOut = function (name) {
          scope.showTable[name] = false;
        };

        scope.config = _.merge(defaultConfig, scope.config);

        var preprocess = function (data) {
          var labels = dataConstants.COMPLICATIONS;
          return labels.map(function (ele) {
            return {
              name: ele,
              value: data[ele]
            };
          }).map(function (ele) {
            return {
              name: ele.name,
              value: Patient.percentile.percentile[ele.name],
              original_value: ele.value,
              show: false
            };
          });
          $scope.open
        };

        // init svg
        var svg = d3.select(element[0])
          .append('svg')
          .attr('aria-label', 'dualbarsSvg')
          .style('width', '100%');

        // resize logic
        var timeout;
        $window.addEventListener('resize', function () {
          if (timeout) $timeout.cancel(timeout);
          timeout = $timeout(function () {
            if (scope.data) scope.render(preprocess(scope.data), scope.config);
          }, 500);
        });

        // watch data
        scope.$watch('data', function (newData) {
          if (newData) scope.render(preprocess(newData), scope.config);
        }, true);

        scope.$watch('config', function (newConfig) {
          if (scope.data && newConfig) scope.render(preprocess(scope.data), newConfig);
        }, true);

        scope.$on('patient-update', function () {
          if (scope.data) {
            scope.render(preprocess(scope.data), scope.config);
          }
        });

        var dragmove = function () {
          var x = (d3.event.sourceEvent.pageX) - this.offsetWidth / 2;
          var y = (d3.event.sourceEvent.pageY) - this.offsetHeight / 2;
          d3.select(this)
            .attr('transform', 'translate(' + x + ', ' + y + ')');
        };

        d3.behavior.drag().on('drag', dragmove);

        // render svg
        scope.render = function (data, config) {
          svg.selectAll('*').remove();
          // sizing logic
          if (config.autoBarHeight) barHeight = $(window).height() / (data.length + 1) - barPadding - 40;
          if (barHeight < 57) barHeight = 57;
          var width = d3.select(element[0]).node().offsetWidth - graphMargin - groupPadding - sidePadding - 70;
          var height = ((data.length + 1) * (barHeight + barPadding)) + graphMargin + barMargin + topPadding;
          svg.attr('height', height);

          var xScale = d3.scale.linear()
            .domain([0, 100])
            .range([0, width]);

          // x-axis parameters
          var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient('top')
            .innerTickSize(-height + barHeight + barMargin + barPadding + graphMargin)
            .outerTickSize(0)
            .tickValues([0, 25, 50, 75, 100])
            .tickPadding(10)
            .tickFormat(function (d) {
              return d;
            });

          var radiusScale = d3.scale.linear()
            .domain([0, config.upperRadius])
            .range([3, barHeight / 2]);

          var group = svg.append('g').attr('transform', 'translate(' + ((groupPadding / 2) + sidePadding) + ',' + topPadding + ')');

          group.append('text')
            .attr('x', xScale(95))
            .attr('y', 0)
            .attr('font-size', '1em')
            .attr('class', 'unselectable')
            .attr('font-weight', 'bold')
            .text('Percentile Risk');

          group.append('g').attr('class', 'x axis')
            .attr('transform', 'translate(0, ' + graphMargin + ')')
            .call(xAxis)
            .selectAll('.tick text')
            .append('tspan')
            .style('font-size', '9px')
            .attr('dy', '-.6em')
            .text('th');

          // center line
          group.append('g').attr('class', 'y axis')
            .append('line')
            .attr('x1', xScale(0))
            .attr('x2', xScale(0))
            .attr('y1', graphMargin)
            .attr('y2', height - barHeight - barPadding)
            .attr('stroke-width', 3);

          // bars
          if (config.barOpacity > 0) {
            var bars = group.append('g').attr('class', 'bars')
              .selectAll('rect')
              .data(data).enter()
              .append('g').attr('class', 'bar')
              .attr('ng-click', function (d) {
                return 'open($event, \'' + d.name + '\')';
              });

            bars.append('rect')
              .attr('class', function (d) {
                return d.value > 50 ? 'bar negative' : 'bar positive';
              })
              .attr('x', function () {
                return xScale(0);
              })
              .attr('y', function (d, i) {
                return (i * (barHeight + barPadding)) + graphMargin + barMargin;
              })
              .attr('width', function (d) {
                return Math.abs(xScale(d.value));
              })
              .attr('height', barHeight)
              .attr('opacity', config.barOpacity)
              .attr('tooltip-append-to-body', true)
              .attr('tooltip-placement', function (d) {
                return d.value > 50 ? 'right' : 'left';
              })
              .attr('tooltip', function (d) {
                return 'Absolute: ' + d.original_value.toFixed(2) + ', Relative: ' + d.value.toFixed(2);
              })
              .attr('ng-mouseover', function (d) {
                return 'hoverIn(\'' + d.name + '\', true)';
              })
              .attr('ng-mouseleave', function (d) {
                return 'hoverOut(\'' + d.name + '\', false)';
              });
          }

          // dashed lines
          group.append('g')
            .selectAll('line')
            .data(data).enter()
            .append('line')
            .attr('x1', xScale(0))
            .attr('y1', function (d, i) {
              return (i * (barHeight + barPadding)) + graphMargin + barMargin + barHeight / 2;
            })
            .attr('x2', function (d) {
              return xScale(d.value);
            })
            .attr('y2', function (d, i) {
              return (i * (barHeight + barPadding)) + graphMargin + barMargin + barHeight / 2;
            })
            .style('stroke-width', 1)
            .style('stroke-dasharray', ('3, 3'))
            .style('stroke', function (d) {
              return d.value < 50 ? '#5cb85c' : '#d9534f';
            })
            .style('fill', 'none');

          // absolute circles
          var bgPoints = group.append('g').attr('class', 'bgPoints')
            .selectAll('circle')
            .data(data).enter()
            .append('g').attr('class', 'circle')
            .attr('ng-click', function (d) {
              return 'open($event, \'' + d.name + '\')';
            });
          bgPoints.append('circle')
            .attr('class', 'bgPoint negative background')
            .attr('cx', function (d) {
              return xScale(d.value);
            })
            .attr('cy', function (d, i) {
              return (i * (barHeight + barPadding)) + graphMargin + barMargin + barHeight / 2;
            })
            .attr('r', function (d) {
              return radiusScale(Math.sqrt(d.original_value));
            })
            .attr('opacity', 0.5)
            .attr('tooltip-append-to-body', true)
            .attr('tooltip-placement', function (d) {
              return d.value > 50 ? 'right' : 'left';
            })
            .attr('tooltip', function (d) {
              return 'Absolute: ' + d.original_value.toFixed(2) + ', Relative: ' + d.value.toFixed(2);
            })
            .attr('ng-mouseover', function (d) {
                return 'hoverIn(\'' + d.name + '\', true)';
            })
            .attr('ng-mouseleave', function (d) {
                return 'hoverOut(\'' + d.name + '\', false)';
            });

          // point circles
          var points = group.append('g').attr('class', 'points')
            .selectAll('circle')
            .data(data).enter()
            .append('g').attr('class', 'circle')
            .attr('ng-click', function (d) {
              return 'open($event, \'' + d.name + '\')';
            });
          points.append('circle')
            .attr('class', function (d) {
              return d.value > 50 ? 'point negative' : 'point positive';
            })
            .attr('cx', function (d) {
              return xScale(d.value);
            })
            .attr('cy', function (d, i) {
              return (i * (barHeight + barPadding)) + graphMargin + barMargin + barHeight / 2;
            })
            .attr('r', 5)
            .attr('tooltip-append-to-body', true)
            .attr('tooltip-placement', function (d) {
              return d.value > 50 ? 'right' : 'left';
            })
            .attr('tooltip', function (d) {
              return 'Absolute: ' + d.original_value.toFixed(2) + ', Percentile Risk: ' + d.value.toFixed(2);
            })
            .attr('ng-mouseover', function (d) {
                return 'hoverIn(\'' + d.name + '\', true)';
            })
            .attr('ng-mouseleave', function (d) {
                return 'hoverOut(\'' + d.name + '\', false)';
            });

          // onclick logic
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

          
          // text labels
          group.append('g').attr('class', 'texts')
            .selectAll('text')
            .data(data).enter()
            .append('g').attr('class', 'text')
            .append('text')
            .attr('x', function () {
              return textMargin - 125;
            })
            .attr('y', function (d, i) {
              return (i * (barHeight + barPadding)) + graphMargin + barMargin + 25;
            })
            .text(function (d) {
              var nameArray = Utils.getName(d.name).split(' ');
              if (['Urinary', 'Any'].indexOf(nameArray[0]) >= 0) {
                return nameArray[0] + ' ' + nameArray[1];
              }
              if (nameArray[0] === '30') {
                return nameArray[0] + ' ' + nameArray[1] + ' ' + nameArray[2];
              }
              return nameArray[0];
            })
            .attr('font-size', '.8em')
            .attr('font-weight', 'bold');

          group.append('g').attr('class', 'texts')
            .selectAll('text')
            .data(data).enter()
            .append('g').attr('class', 'text')
            .append('text')
            .attr('x', function () {
              return textMargin - 125;
            })
            .attr('y', function (d, i) {
              return (i * (barHeight + barPadding)) + graphMargin + barMargin + 45;
            })
            .text(function (d) {
              var nameArray = Utils.getName(d.name).split(' ');
              var noIndent = ['Urinary', 'Any', '30'];
              if (noIndent.indexOf(nameArray[0]) < 0) {
                return nameArray[1];
              }
              if (nameArray[0] === 'Urinary') {
                return nameArray[2];
              }
            })
            .attr('font-size', '.8em')
            .attr('font-weight', 'bold');

          //risk value labels
          var riskLabelGroup = group.append('g').attr('class', 'risk-labels')
            .selectAll('text')
            .data(data).enter()
            .append('g').attr('class', 'risk-label-group');

          riskLabelGroup.append('text')
            .attr('x', function (d) {
              return xScale(d.value + 2);
            })
            .attr('y', function (d, i) {
              return (i * (barHeight + barPadding)) + graphMargin + barMargin + 20;
            })
            .text(function (d) {
              if (d.original_value === 0) {
                return 'Absolute Risk: Negligible';
              } else {
                return 'Absolute Risk: ' + Math.round(d.original_value * 1000) / 10 + '%';
              }
            })
            .attr('font-size', '.8em')
            .attr('font-weight', 'bold');

          riskLabelGroup.append('text')
            .attr('x', function (d) {
              return xScale(d.value + 2);
            })
            .attr('y', function (d, i) {
              return (i * (barHeight + barPadding)) + graphMargin + barMargin + 45;
            })
            .text(function (d) {
              if (Math.round(d.value, 0) <= 1) {
                return 'Percentile Risk: 1st';
              } else if (Math.round(d.value, 0) === 2) {
                return 'Percentile Risk: 2nd';
              } else if (Math.round(d.value, 0) === 3) {
                return 'Percentile Risk: 3rd';
              } else {
                return 'Percentile Risk: ' + Math.round(d.value, 0) + 'th';
              }
            })
            .attr('font-size', '.8em')
            .attr('font-weight', 'bold');

          element.removeAttr('d3-Dualbars');
          $compile(element)(scope);
          element.attr('d3-Dualbars');
        };
      }
    };
  });
