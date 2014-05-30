'use strict';

angular.module('prototypeApp')
  .controller('MainCtrl', ['$scope', 'Restangular',  function ($scope, Restangular) {
        Restangular.one('page/').get({
            slug : 'home',
            meta : 1,
            include : 'seo'
        }).then(function(response) {
            $scope.page = response.data;
            console.log('page', response.data);
        });
        
        Restangular.one('video/').get({
        }).then(function(response) {
            $scope.videos = response.data;
            console.log('vids', response.data);
        });
        
        Restangular.one('image/').get({
        }).then(function(response) {
            $scope.images = response.data;
            console.log('imgs', response.data);
        });        
        
        Restangular.one('posts/').get({
        }).then(function(response) {
            $scope.news = response.data;
            console.log('news', response.data);
        });
        
        Restangular.one('page/').get({
            slug : "contact"
        }).then(function(response){
            $scope.contactPage = [response.data];
            console.log('contact', response.data);
        }) 
  }]);
