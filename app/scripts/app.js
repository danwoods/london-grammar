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
    .run(['$location', 'CacheService', '$rootScope', function($location, CacheService, $rootScope){
        window.$location = $location;
        window.showRelated = function(post){
            CacheService.put('post', post);
            console.log(post);
            $rootScope.$apply(function() {
               $location.path("/_related");
               console.log($location.path());
            });            
        }
    }]);
