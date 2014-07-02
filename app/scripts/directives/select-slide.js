'use strict';

/**
 * @ngdoc directive
 * @name prototypeApp.directive:selectSlide
 * @description
 * # selectSlide
 */
angular.module('prototypeApp').directive('selectSlide', ['$location', '$stateParams',
function($location, $stateParams) {//directive for setting the slide on a carousel as active, based upon a check
  return {
    template : '<div></div>',
    restrict : 'AE',
    scope : {
      'index' : '=',
      'highlighted' : '=',
      'slides' : '=',
      'currentSlide' : "="
    },
    link : function postLink($scope, element, attrs) {
      window.selectScope = $scope;
      var ran = 0;
      function init() {
        $scope.$watch('highlighted', function(val) {
          var slide;
          val = parseInt(val, 10);
          if (val !== null && $scope.slides) {
            slide = $scope.slides[$scope.index];
            //console.log('slide is:', slide, 'val is:', val, 'match is: ', (slide.ID === val || slide.id === val));
            if (slide.ID === val || slide.id === val) {
              console.log('hey, we got a match.', $scope.slides[$scope.index].ID);
              $scope.currentSlide.active = true;
            }
          }
        });
        $scope.$watch('currentSlide.active', function(val) {
          function getID() {
            return $scope.slides[$scope.index].ID || $scope.slides[$scope.index].id;
          }//kludge;

          //console.log('current slide is active?: ', val);
          if (val && getID !== $scope.highlighted) {//avoid double setting.
            window.$location = $location;
            window.$stateParams = $stateParams;
            //console.log($location.path().replace($stateParams.id, 'lol.'));
            //var newUrl = $location.path().replace($stateParams.id, getID() );
            //console.log(newUrl, $scope.slides[$scope.index], getID());
            //$location.path(newUrl);
             $location.search('id', getID());
          }
        }); 
      } 

      $scope.$watch('currentSlide', function(val) {
        //console.log('watching...', (val), $scope.slides[$scope.index].ID);
        if (val && !ran) {
          init();
          ran = 1;
        }
      });
    }
  };
}]);
