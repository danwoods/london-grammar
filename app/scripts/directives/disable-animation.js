'use strict';

/**
 * @ngdoc directive
 * @name prototypeApp.directive:disableAnimation
 * @description
 * # disableAnimation
 */
angular.module('prototypeApp')
.directive('disableAnimation',['$animate', function($animate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
    };
}]);
