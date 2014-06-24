'use strict';

angular
  .module('prototypeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'restangular',
    'services.config',
    'nt-youtube',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/exmaples/releases', {
        templateUrl: 'views/exmaple-releases.html',
        controller: 'ExmapleReleasesCtrl'
      })
      .when('/_related/:type/:id', {
        templateUrl: 'views/_related.html',
        controller: 'RelatedCtrl'
      })
      .when('/video/:slug', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl'
      })
      .when('/sign-up', {
        templateUrl: 'views/sign-up.html',
        controller: 'SignUpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(RestangularProvider, configuration) {
        RestangularProvider.setBaseUrl(configuration.API);
        RestangularProvider.setDefaultHttpFields({
            cache : false
        });
    
        // Response extractor for each request
        RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
            //var extractedResponse;
            return response;
            //return extractedResponse;
        });    
    })
    .run(['$location', 'CacheService', '$rootScope', 'Restangular', function($location, CacheService, $rootScope, Restangular){
        window.$location = $location;
        window.showRelated = function(post){
            CacheService.put('post', post);
            console.log(post);
            $rootScope.$apply(function() {
               $location.path("/_related");
               console.log($location.path());
            });            
        };
        $rootScope.$on('$routeChangeSuccess', function(ev, data){
          if (data.$$route){
                $rootScope.currentController = data.$$route.controller;
          }
        });
        
        //bootstrap data.        
        Restangular.one('menu/').get({
        }).then(function(response){
          $rootScope.menus = response.data;
        });
    }]);
