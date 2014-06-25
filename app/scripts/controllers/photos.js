'use strict';

/**
 * @ngdoc function
 * @name prototypeApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the prototypeApp
 */
angular.module('prototypeApp')
  .controller('PhotosCtrl', ['$scope', '$routeParams', 'Restangular', "$location", function ($scope, $routeParams, Restangular, $location) {
       $scope.highlighted = $routeParams.id;
       Restangular.one('image/').get({
        }).then(function(response) {
            $scope.images = response.data;
            console.log('imgs', response.data);
        });
  }]);
