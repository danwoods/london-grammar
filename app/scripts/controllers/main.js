'use strict';

angular.module('prototypeApp')
  .controller('MainCtrl', ['$scope', 'Restangular', '$timeout',  function ($scope, Restangular, $timeout) {
    

    function getIncrement(multiplier) {
        var increment, multiplier = multiplier || 1,
        width = $(window).width();
        if (width > 700 && width < 800){//FIXME: we should really have a service or something to handle all this responsive shit.
           increment = 3; 
        }
        else if (width > 800) {
            increment = 4;
        } else {
            increment = 2;
        }
        return increment * multiplier;        
    }
    
    function breakIt(data, multiplier) {
        var i, j, arr, all = [], n = getIncrement(multiplier);
        if (data.length){
            for ( i = 0, j = data.length; i < j; i += n) {
                arr = data.slice(i, i + n);
                all.push(arr);
            }
        }
        return all;
    }
          
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
            $scope.video_chunks = breakIt($scope.videos, 2);
            console.log('vids', response.data);
        });
        
        Restangular.one('image/').get({
          tag: 'gallery,instagram'
        }).then(function(response) {
            $scope.images = response.data;
            $scope.image_chunks = breakIt($scope.images, 2);
            console.log('imgs', response.data);
        });        
        
        Restangular.one('posts/').get({
        }).then(function(response) {
            $scope.news = response.data;
            console.log('news', response.data);
        });

        Restangular.one('album/').get({
        }).then(function(response) {
            $scope.albums = response.data;
            $scope.albums.forEach(function(item, idx, arr){//kludge
              if (item.tracklisting){
              item.tracklisting.forEach(function(track, idx, arr){
                Restangular.one('track/').get({
                  id : track.ID
                }).then(function(response){
                  //console.log('fetched track:', response);
                  arr[idx] = response.data;
                });
              });
              }
            });
            
            $scope.album_chunks = breakIt($scope.albums);
            console.log('albums', response.data);
        });
        
        Restangular.one('page/').get({
            slug : "contact"
        }).then(function(response){
            $scope.contactPage = [response.data];
            console.log('contact', response.data);
        });
        
        
        if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){//skrollr breaks mobile atm...
          $timeout(function(){
              console.log('starting skrollr.');
              var s = skrollr.init({
                forceHeight : false
              });
              s.refresh();
              window.skroll = s;
          }, 4000);
          $scope.$on('$destroy', function(){
            if (typeof s !== 'undefined'){
              s.destroy();
            }
          });
        }
  }]);
