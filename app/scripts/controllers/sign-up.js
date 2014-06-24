'use strict';

/**
 * @ngdoc function
 * @name lgApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the lgApp
 */
angular.module('prototypeApp')
  .controller('SignUpCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = 'this is a new test string.';
  });
