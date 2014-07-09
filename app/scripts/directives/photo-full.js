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
            i : '=image',
            currentSlide : "="
        },
        link : function postLink($scope, element, attrs) {
            //stuff
            function init(){
              var img = element.find('.image-container img'),
                  header = $('.header'),
                  meta = element.find('.meta'),
                  footer = $('.footer');
              function getAvailableHeight(){
                var val = $(window).height() - ( meta.outerHeight(true)) - 150;//arbitrary value for padding...
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
            
            $scope.$watch('currentSlide.active', function(val){
              if (val){
                $timeout(init, 0);
              }
            });
        }
    };
}]);