'use strict';

angular.module('prototypeApp').directive('share', ['$timeout', 'configuration', '$rootScope',
function($timeout, configuration, $rootScope) {
	return {
		replace : true,
		scope : {
			title : '=',
			slug : '=slug',
			desc : '=',
			text : '@',
			image: '@'
		},
		templateUrl : 'partials/share.html',
		restrict : 'E',
		link : function postLink(scope, element, attrs) {

			var url = window.location.href;
			scope.url = window.location.href;
			scope.$watch('slug', function(val) {
				if (val) {
					scope.url = configuration.baseURL + val;
					url = scope.url;
				}
			});

			function serialize(obj) {
				var str = [];
				for (var p in obj) {
					if (obj.hasOwnProperty(p)) {
						str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					}
				}
				return str.join("&");
			}

			function buildTwitter() {
				var uri, config = {
					text : scope.text || ('Check out ' + document.title),
					via : 'myvirginkitchen',
					related : 'myvirginkitchen',
					url : scope.url || window.location.href,
					counturl : scope.url || window.location.href,
					hashtags : 'myvirginkitchen'
				}, query = serialize(config);
				uri = 'https://twitter.com/intent/tweet?' + query;
				console.log('x', query, config, uri);
				return uri;
			}

            scope.sharePinterest = function(){
                var config = {
                        media : scope.img || $rootScope.og.image,
                        url : scope.url || window.location.href
                    },
                    query = serialize(config),
                    uri = "http://www.pinterest.com/pin/create/bookmarklet/?" + query;
                window.open(uri, 'share');
                //var url = 'http://www.pinterest.com/pin/create/bookmarklet/?media=https://i1.ytimg.com/vi/AoWVMGkzFFU/sddefault.jpg&url=http://www.myvirginkitchen.com/recipe/lasagne'
            };
            
			scope.openTwitterShare = function() {
				var width = 575, height = 400, left = ($(window).width() - width) / 2, top = ($(window).height() - height) / 2, url = buildTwitter(), opts = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
				window.open(url, 'tweet', opts);
				return false;
			}
			function init() {
				if (!window.addthis) {
					addthis.init();
				}
				var addthis_config = {};
				var addthis_share = {
					url : url
				};
				addthis.url = url;
				addthis.toolbox(element.get(), addthis_config, addthis_share);
				element.animate({
				    opacity: 1
				}, 1000)
			}


			element.css({
				opacity : 0
			});
			$timeout(function() {
				init();
			}, 4000);
		}
	};
}]);
