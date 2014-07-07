'use strict';

angular.module('prototypeApp')
  .controller('RelatedCtrl', ['$scope', 'Restangular', '$stateParams', function ($scope, Restangular, $stateParams) {
     // $scope.post = CacheService.get('post');
     console.log('$stateParams', $stateParams);
     Restangular.one($stateParams.type + '/').get({
         id : $stateParams.id,
         include : 'related'
     }).then(function(response){
         console.log(response);
        $scope.post = response.data;
     })
  }]);
