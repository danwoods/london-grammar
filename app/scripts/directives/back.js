'use strict';

/**
 * @ngdoc directive
 * @name prototypeApp.directive:back
 * @description
 * # back
 */
angular.module('prototypeApp')
  .directive('back',['Back', function (Back) {
    return {
      template: '<div class="close" ng-click="close()"><i class="fa fa-times"></i></div>',
      replace: true,
      restrict: 'EA',
      controller: function($scope){
        $scope.close = Back;
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  }]);
