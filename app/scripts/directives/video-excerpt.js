'use strict';

angular.module('prototypeApp')
  .directive('videoExcerpt', [
function() {
    return {
        replace : true,
        templateUrl : 'partials/video_excerpt.html',
        restrict : 'E',
        scope : {
            v : '=video'
        },
        link : function postLink(scope, element, attrs) {

        }
    };
}]);
