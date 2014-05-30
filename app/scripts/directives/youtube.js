'use strict';

angular.module('prototypeApp').directive('youtube', ['makeYoutube', '$rootScope', '$http', '$timeout',
function(makeYoutube, $rootScope, $http, $timeout) {
    return {
        templateUrl : 'partials/youtube.html',
        restrict : 'E',
        replace : true,
        scope : {
            youtubeID : '=ytId'
        },
        link : function postLink(scope, element, attrs) {
            function updateMeta(id) {//we have a cached version of the youtube api response in the DB, but want to refresh this with up to date info.
                $rootScope.youtubeReady.promise.then(function(){
                            var baseURL = 'https://www.googleapis.com/youtube/v3',
                                    resource = '/videos?',
                                    parts = 'part=' + encodeURIComponent( 'id,contentDetails,snippet, statistics, contentDetails' ),
                                    url = baseURL + resource + parts + '&id=' + id + '&key=' + 'AIzaSyAk8_yaPxoxPmEJQSwd8x1uYj1J6LaKNHg';
                            $http({method: 'GET', url: url}).success(function(data, status, headers, config) {
                                 // console.log('data!', data);
                                    scope.yt = data.items[0];
                            }).error(function(data,status,headers,config){
                                console.log('error fetching yt meta', data, status)
                            })
                    });
            }
            function construct(youtubeID) {
                makeYoutube.construct(youtubeID, element.children()[0], {
                    playerVars : {
                        theme : 'light',
                        modestbranding : 1,
                        rel : 0
                    },
                    events : {
                        onReady : function() {
                            element.fitVids();
                            $(element).animate({
                                opacity : 1
                            }, 1000);
                        }
                    }
                });
            }
            scope.$watch('youtubeID', function(val) {
                
                if (val){
                        construct(val);
                    updateMeta(val);
                }
            });
            element.css({
                opacity : 0
            });
        }
    };
}]);
