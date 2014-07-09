'use strict';

angular.module('prototypeApp').controller('VideosCtrl', ['$scope', '$routeParams', 'Restangular', "$location", '$stateParams',
function($scope, $routeParams, Restangular, $location, $stateParams) {
  $scope.highlighted = $stateParams.id;
  window.videoScope = $scope;
  console.log('r', $routeParams, 's', $stateParams);
  if (!$scope.videos && true === false){//not running atm cuz inheritance.
    Restangular.one('video/').get({
    }).then(function(response) {
      // $scope.videos = response.data;
      console.log('vids', response.data);
    });
  }
}]);
