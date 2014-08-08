'use strict';

/**
 * @ngdoc overview
 * @name jdesignerToSbmllayoutApp
 * @description
 * # jdesignerToSbmllayoutApp
 *
 * Main module of the application.
 */
angular
  .module('jdesignerToSbmllayoutApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.ace',
    'ui.bootstrap',
    'vk.beautify'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
