'use strict';

/**
 * @ngdoc directive
 * @name prototypeApp.directive:albumFull
 * @description
 * # albumFull
 */
angular.module('prototypeApp')
  .directive('albumFull', [ function() {
    return {
        replace : true,
        templateUrl : 'partials/album_full.html',
        restrict : 'E',
        scope : {
            a : '=album'
        },
        link : function postLink(scope, element, attrs) {

        }
    };
}]);
