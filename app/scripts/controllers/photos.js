'use strict';

/**
 * @ngdoc function
 * @name prototypeApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the prototypeApp
 */
angular.module('prototypeApp')
  .controller('PhotosCtrl', ['$scope', '$stateParams', 'Restangular', "$location", function ($scope, $stateParams, Restangular, $location) {
       $scope.highlighted = $stateParams.id;
       if (!$scope.images){
         Restangular.one('image/').get({
          }).then(function(response) {
              $scope.images = response.data;
              console.log('imgs', response.data);
          });
        }
  }]);
