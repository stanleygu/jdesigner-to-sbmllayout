/*jslint latedef:false*/
/*globals X2JS:false*/
'use strict';

/**
 * @ngdoc function
 * @name jdesignerToSbmllayoutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jdesignerToSbmllayoutApp
 */
angular.module('jdesignerToSbmllayoutApp')
  .controller('MainCtrl', function($scope, $http, vkBeautify, sbmlLayoutTemplate, jdesignerToSbmlLayout, $window) {

    $scope.$window = $window;

    initialize();


    $scope.$watch('jdesignerString', function(val) {
      if (val) {
        $scope.jdesigner = angular.fromJson($scope.jdesignerString);
        $scope.sbmlLayout = jdesignerToSbmlLayout.convert($scope.jdesigner);

        $scope.sbmlLayoutJsonString = angular.toJson($scope.sbmlLayout, 2);
        $scope.sbmlLayoutXmlString = vkBeautify.xml($scope.x2js.json2xml_str($scope.sbmlLayout));
      }
    });

    function initialize() {
      $scope.x2js = new X2JS();

      $http.get('jdesigner.json').success(function(data) {
        $scope.jdesignerString = angular.toJson(data, 2);
      });
    }


  });
