'use strict';

angular.module('prototypeApp')
  .controller('RelatedCtrl', ['$scope', 'Restangular', '$routeParams', function ($scope, Restangular, $routeParams) {
     // $scope.post = CacheService.get('post');
     console.log('$routeParams', $routeParams);
     Restangular.one($routeParams.type + '/').get({
         id : $routeParams.id,
         include : 'related'
     }).then(function(response){
         console.log(response);
        $scope.post = response.data;
     })
  }]);
