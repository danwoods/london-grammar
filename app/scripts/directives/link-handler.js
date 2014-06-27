'use strict';

/**
 * @ngdoc directive
 * @name prototypeApp.directive:linkHandler
 * @description
 * # linkHandler
 */
angular.module('prototypeApp')
  .directive('linkHandler', ['$location', '$anchorScroll', '$timeout', '$rootScope', function ($location, $anchorScroll, $timeout, $rootScope) {
    return {
      restrict: 'A',
      scope: {
        link : "="
      },
      link: function postLink($scope, element, attrs) {
          function handle_anchor(link){
            var elem = $( link.url );
            console.log('scrolling', elem.offset().top);
            if (elem.length){
               $('html, body').animate({
                  scrollTop: elem.offset().top
              }, 600);
            }        
          }
          function handle_link(link) {
            if (!link){
              return;
            }
            var type;
            if (link.url.match(/^http/) !== null){
              type = 'ext';
            } else if (link.url.match(/^#/) !== null){
              type = 'anchor';
            }
            console.log('link type is: ', type);
            switch(type){
              case 'ext' :
                  window.location.replace(link.url);
              break;
              case 'anchor' :
                  if ($location.path() !== '/'){
                    $location.path('/');
                    var caller = $rootScope.$on('$routeChangeSuccess', function(){
                      caller();//only run once;
                       $timeout(function(){
                          handle_anchor(link);
                        }, 1500);
                    });
                  } else {
                    handle_anchor(link);
                  }
              break;
              default : //internal link
                  $location.path(link.url);
              break;
            }
          }
          element.on('click', function(event){
            event.preventDefault();
            handle_link($scope.link);
          });
      }
    };
  }]);
