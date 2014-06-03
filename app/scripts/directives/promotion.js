angular.module('prototypeApp').directive('promotion', ['Restangular', function(Restangular) {
    return {
        replace : true,
        templateUrl : 'partials/promotion.html',
        restrict : 'E',
        scope : {
            p : '=promotion'
        },
        link : function postLink(scope, element, attrs) {
            //stuff
            if (scope.p.video_background){
                console.log('hs vbg', scope.p.video_background[0]);
                Restangular.one('video/').get({
                    id : scope.p.video_background[0]
                }).then(function(response) {
                    scope.p.video_background = response.data;
                    console.log('vids', response.data);
                });                  
            }
        }
    };
}]);
