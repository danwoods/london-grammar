'use strict';

angular
  .module('prototypeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngRoute',
    'restangular',
    'services.config',
    'nt-youtube',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url : "/home",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('home.videos', {
        url : "^/videos?id",
        //templateUrl: "views/videos.html",
        controller: "VideosCtrl",
        reloadOnSearch : false,
        templateUrl : function ($stateParams){
          console.log('LOADNG VDEOS VEW');
          return 'views/videos.html';
        }
      })
      .state('home.photos', {
        url : "^/photos?id",
        //templateUrl: "views/videos.html",
        controller: "PhotosCtrl",
        reloadOnSearch : false,
        templateUrl : 'views/photos.html'
      })
      ;
     /*
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        name : 'home'
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
      .when('/videos/:id?', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl',
        reloadOnSearch : false
      })
      .when('/photos/:id?', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl',
        reloadOnSearch : false
      })
      .otherwise({
        redirectTo: '/'
      });
      */
  }])
  .config(['RestangularProvider', 'env', function(RestangularProvider, env) {
        RestangularProvider.setBaseUrl(env.API);
        RestangularProvider.setDefaultHttpFields({
            cache : false
        });
    
        // Response extractor for each request
        RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
            //var extractedResponse;
            return response;
            //return extractedResponse;
        });    
    }])
    .run(['$location', 'CacheService', '$rootScope', 'Restangular', '$route', '$anchorScroll', '$state', 'env', 'packageInfo', function($location, CacheService, $rootScope, Restangular, $route, $anchorScroll, $state, env, packageInfo){      
        window.$anchorScroll = $anchorScroll;
        window.env = env;
        window.packageInfo = packageInfo;   
        window.$location = $location;
        window.$rootScope = $rootScope;
        window.$state = $state;
        $rootScope.$state = $state;
        window.showRelated = function(post){
            CacheService.put('post', post);
            console.log(post);
            $rootScope.$apply(function() {
               $location.path("/_related");
               console.log($location.path());
            });            
        };
        $rootScope.$on('$routeChangeSuccess', function(ev, data){
          console.log('route change, bazinga!', ev, data);
          if (data.$$route){
                $rootScope.currentController = data.$$route.controller;
          }
        });
        $rootScope.$on("$stateChangeSuccess", function(ev, toState, toParams){
          console.log('$stateChangeSuccess', ev, toState);
        });
        
        //bootstrap data.        
        Restangular.one('menu/').get({
        }).then(function(response){
          $rootScope.menus = response.data;
        });
    }]);
