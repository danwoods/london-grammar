'use strict';

/**
 * @ngdoc service
 * @name prototypeApp.back
 * @description
 * # back
 * Service in the prototypeApp.
 */
angular.module('prototypeApp')
  .service('Back', ['$rootScope', '$location', '$route', '$timeout', function Back($rootScope, $location, $route, $timeout) {
    return; //DEPRECATED;
    var back = false,
    y,
    watcher = $rootScope.$on('$routeChangeSuccess', function(ev, url, old){
      back = true;
      //watcher();//stop watching, we have everything we need.
      //console.log('location change success', url, old);
    });
    function getBaseUrl(){
      var s = $location.$$protocol + '://';
          s += $location.$$host;
          if ($location.$$port){ 
              s += ':' + $location.$$port;
            }
          s += '/#/';
      return s;
    }
    $rootScope.$on('$locationChangeStart', function(event, next, current) {
      //if current === home, save y;
      console.log( 'x', current === getBaseUrl(), getBaseUrl(), current);
      if (current === getBaseUrl()){
        console.log('yeyy');
        y = $(window).scrollTop();
      }
      //console.log('location change start', (current === getBaseUrl()), event, next, current, getBaseUrl());
    });    
    return function(){
      //console.log('okay to use history to go back?', back);
        $location.search('id', null);
        $location.path('/');
        $timeout(function(){
          $(window).scrollTop(y);
        }, 1000);
        imagesLoaded($('.view'), function(){
           $(window).scrollTop(y);
        });
    };
  }]);
