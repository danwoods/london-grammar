'use strict';

/**
 * @ngdoc directive
 * @name prototypeApp.directive:photoFull
 * @description
 * # photoFull
 */
angular.module('prototypeApp')
  .directive('photoFull',  ['$timeout', function ($timeout) {
    return {
        replace : true,
        templateUrl : 'partials/photo_full.html',
        restrict : 'E',
        scope : {
            i : '=image'
        },
        link : function postLink(scope, element, attrs) {
            //stuff
            function init(){
              var img = element.find('.image-container img'),
                  header = $('.header'),
                  meta = $('.meta'),
                  footer = $('.footer');
              function getAvailableHeight(){
                var val = $(window).height() - ( meta.outerHeight(true) + footer.outerHeight(true) + header.outerHeight(true) ) - 300;//arbitrary value for padding...
                //console.log(val);
                return val;
              }
              imagesLoaded(element, function(){
                console.log('images loaded');
                img.css({
                  maxHeight : getAvailableHeight() + 'px'
                });
              });
            }
            init();
        }
    };
}]);