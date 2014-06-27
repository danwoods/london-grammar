'use strict';

/**
 * @ngdoc directive
 * @name prototypeApp.directive:linkHandler
 * @description
 * # linkHandler
 */
angular.module('prototypeApp')
  .directive('linkHandler', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the linkHandler directive');
      }
    };
  });
