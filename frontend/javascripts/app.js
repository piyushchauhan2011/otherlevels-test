var angular = require('angular');
require('./templates');
require('angular-animate/angular-animate');
require('angular-aria/angular-aria');
var uirouter = require('angular-ui-router');
require('angular-material/angular-material');
var app = angular.module('app', ['templates', 'ngAnimate', 'ngAria', uirouter, 'ngMaterial']);

// Configuration
var Config = require('./config');
app.config(Config);

// All the Services
var SwatchService = require('./services/swatchService');
app.service('SwatchService', SwatchService);

// ALl the Directives
var SwatchRow = require('./directives/swatchRowDirective');
var Swatch = require('./directives/swatchDirective');
app.directive('swatchRow', SwatchRow);
app.directive('swatch', Swatch);

// All the Controllers
var HelloCtrl = require('./routes');
var SwatchCtrl = require('./controllers/swatchCtrl');
var RedSwatchCtrl = require('./controllers/redSwatchCtrl');
var BlueSwatchCtrl = require('./controllers/blueSwatchCtrl');

app.controller('HelloCtrl', HelloCtrl);
app.controller('SwatchCtrl', SwatchCtrl);
app.controller('RedSwatchCtrl', RedSwatchCtrl);
app.controller('BlueSwatchCtrl', BlueSwatchCtrl);
