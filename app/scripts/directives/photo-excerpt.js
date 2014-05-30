'use strict';

angular.module('prototypeApp')
  .directive('photoExcerpt', function () {
    return {
        replace : true,
        templateUrl : 'partials/photo_excerpt.html',
        restrict : 'E',
        scope : {
            i : '=image'
        },
        link : function postLink(scope, element, attrs) {
            //stuff
        }
    };
});