'use strict';

/**
 * @ngdoc directive
 * @name prototypeApp.directive:selectSlide
 * @description
 * # selectSlide
 */
angular.module('prototypeApp')
  .directive('selectSlide', function () {//directive for setting the slide on a carousel as active, based upon a check
    return {
      template: '<div></div>',
      restrict: 'AE',
      scope: {
        'index' : '=',
        'highlighted': '=',
        'slides' : '=',
        'currentSlide' : "="
      },
      link: function postLink($scope, element, attrs) {
        window.selectScope = $scope;
        $scope.$watch('highlighted', function(val){
          var slide;
          val = parseInt(val, 10);
          if (val !== null && $scope.slides){
            slide = $scope.slides[$scope.index];
            //console.log('slide is:', slide, 'val is:', val, 'match is: ', (slide.ID === val || slide.id === val));
            if (slide.ID === val || slide.id === val){
              //console.log('hey bitchezzz, we got a match.');
              $scope.currentSlide.active = true;
            }
          }
        });
      }
    };
  });
