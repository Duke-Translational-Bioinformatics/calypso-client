/*jshint quotmark:false*/

'use strict';

 angular.module('config', [])

.constant('ENV', {hosts:{server:'http://calypso-api-lb-1080150225.us-west-2.elb.amazonaws.com',client:'http://localhost:9000'},label:{name:'Calypso'}})

;