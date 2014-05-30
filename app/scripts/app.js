'use strict';

angular
  .module('prototypeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'restangular',
    'services.config',
    'nt-youtube'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
    });