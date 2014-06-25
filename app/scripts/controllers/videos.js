'use strict';

angular.module('prototypeApp')
  .controller('VideosCtrl', ['$scope', '$routeParams', 'Restangular', "$location", function ($scope, $routeParams, Restangular, $location) {
       $scope.highlighted = $routeParams.id;
       Restangular.one('video/').get({
        }).then(function(response) {
            $scope.videos = response.data;
            console.log('vids', response.data);
        });
  }]);
