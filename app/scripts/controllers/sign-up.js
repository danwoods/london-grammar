'use strict';

/**
 * @ngdoc function
 * @name lgApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the lgApp
 */
angular.module('prototypeApp')
  .controller('SignUpCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
        Restangular.one('page/').get({
            slug : "sign-up"
        }).then(function(response){
            $scope.page = response.data;
            console.log('sign up', response.data);
        });
  }]);
