angular.module('prototypeApp').directive('promotion', function() {
    return {
        replace : true,
        templateUrl : 'partials/promotion.html',
        restrict : 'E',
        scope : {
            p : '=promotion'
        },
        link : function postLink(scope, element, attrs) {
            //stuff
        }
    };
});
