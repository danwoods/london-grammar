'use strict';

/**
 * @ngdoc service
 * @name prototypeApp.scrollTo
 * @description
 * # scrollTo
 * Service in the prototypeApp.
 */
angular.module('prototypeApp')
  .service('ScrollTo',['$location', '$anchorScroll', '$timeout', function ScrollTo($location, $anchorScroll, $timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return function(id){
      function do_scroll(){
        id = id.replace('#', '');
        elem = $( '#' + id );
        if (elem.length){
           $('html, body').animate({
              scrollTop: elem.offset().top
          }, 600);
        }        
      }
      var elem;
      console.log('scrollTo', id);
      if ($location.path() !== '/'){
        $location.path('/');
        $timeout(do_scroll, 1000);
      } else {
        do_scroll();
      }

      //$location.hash(id);
      //$anchorScroll();
    };
  }]);
