'use strict';

angular.module('prototypeApp')
  .directive('skrollrPromo', ['$timeout', function ($timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
           function init(){
                var bg = element.find('.promo-img'),
                text = element.find('.text-stuff');
               bg.attr({
                    //0 top bottom: 0
                    //0 bottom top: 0
                    //"data-center" : "background-position: 0px 50%;",
                    "data-0-top-bottom" : "background-position: 0px 100%",
                    //"data-0-top-bottom" : "baackground-position: 0px 50%",
                    "data-0-bottom-top" : "background-position: 0px 0%;"
                    //"data-top-bottom" : "background-position: 0 50%;"
                });
                text.attr({
                    "data-center" : "transform: translateY(0%) scale(1);",
                    "data-bottom-top" : "transform: translateY(-20%) scale(0.9);",
                    "data-top-bottom" : "transform: translateY(20%) scale(0.9);"
                });               
           }
           $timeout(init, 1000);
      }
    };
  }]);
