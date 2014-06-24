'use strict';

angular.module('prototypeApp')
  .controller('VideoCtrl', ['$scope', '$routeParams', 'Restangular', "$location", function ($scope, $routeParams, Restangular, $location) {
       $scope.close = function(){
           $location.path('/');
       };
       Restangular.one('video/').get({
           slug : $routeParams.slug
        }).then(function(response) {
            $scope.v = response.data;
            console.log('vid', response.data);
        });
  }]);
