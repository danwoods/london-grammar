'use strict';

/**
 * @ngdoc service
 * @name prototypeApp.back
 * @description
 * # back
 * Service in the prototypeApp.
 */
angular.module('prototypeApp')
  .service('Back', ['$rootScope', '$location', function Back($rootScope, $location) {
    var back = false,
    watcher = $rootScope.$on('$routeChangeSuccess', function(ev, data){
      back = true;
      watcher();//stop watching, we have everything we need.
    });
    return function(){
      console.log('okay to use history to go back?', back);
      if (back){
        window.history.back();
      }
      else {
        $location.path('/');
      }
    };
  }]);
