'use strict';

/**
 * @ngdoc directive
 * @name prototypeApp.directive:albumExcerpt
 * @description
 * # albumExcerpt
 */
angular.module('prototypeApp')
  .directive('albumExcerpt', [ function() {
    return {
        replace : true,
        templateUrl : 'partials/album_excerpt.html',
        restrict : 'E',
        scope : {
            a : '=album'
        },
        link : function postLink(scope, element, attrs) {

        }
    };
}]);
