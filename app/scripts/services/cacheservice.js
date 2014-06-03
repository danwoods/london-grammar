'use strict';

angular.module('prototypeApp')
  .service('CacheService',['$cacheFactory', function CacheService($cacheFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $cacheFactory('item');
  }]);
