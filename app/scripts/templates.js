angular.module('prototypeApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/_related.html',
    "<section class=\"summary\">Hi. The following related content types were found: <span ng-repeat=\"(key, value) in post.related\">{{key}},</span></section><section class=\"photos section\"><photo-excerpt class=\"flexibox\" ng-repeat=\"i in post.related.images\" image=\"i\"></photo-excerpt></section><section class=\"videos section\"><article class=\"video\" ng-repeat=\"v in post.related.videos\"><youtube yt-id=\"v.youtube_object.id\"></youtube><h1>{{v.title}}</h1></article></section><section class=\"\"></section>"
  );


  $templateCache.put('views/exmaple-releases.html',
    "<p>This is the exmaple-releases view.</p>"
  );


  $templateCache.put('views/main.html',
    "<section class=\"top-promotion\"><promotion class=\"big\" promotion=\"page.promotions[0]\"></promotion></section><section class=\"videos section\"><h2 class=\"section-title\">Videos</h2><carousel><slide ng-repeat=\"videos in video_chunks\" class=\"slide\"><article class=\"video flexibox\" ng-repeat=\"v in videos\"><ng-include src=\"'partials/video_excerpt.html'\"></ng-include></article></slide></carousel></section><promotion class=\"lyric\" promotion=\"page.promotions[1]\"></promotion><section class=\"tour section\"><h2 class=\"section-title\">Live</h2><div style=\"height:500px;background:grey;max-width:650px; margin:0 auto\"></div></section><promotion class=\"lyric\" promotion=\"page.promotions[2]\"></promotion><section class=\"albums section\"><h2 class=\"section-title\">Music</h2><carousel><slide ng-repeat=\"albums in album_chunks\" class=\"slide\"><ng-include src=\"'partials/album_full.html'\" ng-repeat=\"a in albums\"></ng-include></slide></carousel></section><promotion class=\"lyric\" promotion=\"page.promotions[3]\"></promotion><section class=\"photos section\"><h2 class=\"section-title\">Photos</h2><carousel><slide ng-repeat=\"images in image_chunks\" class=\"slide\"><photo-excerpt class=\"flexibox\" ng-repeat=\"i in images\" image=\"i\"></photo-excerpt></slide></carousel></section><promotion class=\"lyric\" promotion=\"page.promotions[4]\"></promotion><section class=\"sign-up section\"><h2 class=\"section-title\">Sign up</h2><ng-include ng-repeat=\"page in contactPage\" src=\"'views/page.html'\"></ng-include></section>"
  );


  $templateCache.put('views/page.html',
    "<article class=\"page\"><div class=\"page-inner\"><h1 class=\"title\">{{page.title}}</h1><div class=\"content\" ng-bind-html=\"page.content\"></div></div></article>"
  );


  $templateCache.put('views/video.html',
    "<p>This is the video view.</p><div class=\"close\" ng-click=\"close()\"><i class=\"fa fa-times\"></i></div><ng-include src=\"'partials/video_full.html'\"></ng-include>"
  );


  $templateCache.put('partials/album_full.html',
    "<article class=\"album full flexibox\"><div class=\"album-inner\"><div class=\"media-container\"><img src=\"{{a.image.sizes.medium.url}}\" width=\"{{a.image.sizes.medium.width}}\" height=\"{{a.image.sizes.medium.height}}\" alt=\"{{a.image.alt}}\"></div><h2 class=\"title\">{{a.title}}</h2><h3 class=\"subtitle date release-date\">{{ a.date | time }}</h3><div class=\"content\" ng-bind-html=\"a.conten\"></div><div class=\"tracklist\"><div ng-repeat=\"t in a.tracklisting\" class=\"track excerpt\"><div class=\"track-inner\"><div class=\"track-header\"><span class=\"track-number\">{{$index}}</span><span class=\"track-title\">{{t.title}}</span></div><div class=\"extra-information\" ng-show=\"state\"><div class=\"lyrics\" ng-bind-html=\"t.lyrics\"></div></div></div></div></div><div class=\"product-links\"><div class=\"row\" ng-repeat=\"l in a.links\"><i class=\"fa fa-{{l.link_type}}\"></i> <a ng-href=\"{{l.link_url}}\" target=\"{{l.link_target}}\">{{l.link_text}}</a></div></div></div></article>"
  );


  $templateCache.put('partials/blog_full.html',
    "<article class=\"blog full\" blog=\"\" ng-class=\"{ open : state }\"><div class=\"blog-inner\"><div class=\"media-container\"><img src=\"{{b.image.sizes.medium.url}}\" width=\"{{b.image.sizes.medium.width}}\" height=\"{{b.image.sizes.medium.height}}\" alt=\"{{b.image.alt}}\"></div><div class=\"info\"><a href=\"{{ b.link }}\"><h2 class=\"title\">{{ b.title }}</h2></a><div class=\"meta\">Posted by <span class=\"by-line\"><a href=\"{{b.author.link}}\">{{b.author.name}}</a></span> on <span class=\"date\">{{ b.date | time }}</span></div><div class=\"categories\"><span class=\"in\">posted in:</span> <a ng-repeat=\"c in b.terms\" class=\"category\" href=\"{{c.link}}\">{{ c.name }}</a></div></div><div class=\"j-content\" ng-bind-html=\"b.content\"></div><share></share><div class=\"trigger\" ng-click=\"state = !state\"><div class=\"expand\" ng-show=\"!state\">Read More</div></div></div></article>"
  );


  $templateCache.put('partials/generic_full.html',
    "<article class=\"blog full\" blog=\"\" ng-class=\"{ open : state }\"><div class=\"blog-inner\"><div class=\"info\"><a href=\"{{ b.link }}\"><h2 class=\"title\">{{ b.title }}</h2></a><div class=\"meta\">Posted by <span class=\"by-line\"><a href=\"{{b.author.link}}\">{{b.author.name}}</a></span> on <span class=\"date\">{{ b.date | time }}</span></div><div class=\"categories\"><span class=\"in\">posted in:</span> <a ng-repeat=\"c in b.terms\" class=\"category\" href=\"{{c.link}}\">{{ c.name }}</a></div></div><div class=\"j-content\" ng-bind-html=\"b.content\"></div><share></share><div class=\"trigger\" ng-click=\"state = !state\"><div class=\"expand\" ng-show=\"!state\">Read More</div></div></div></article>"
  );


  $templateCache.put('partials/photo_excerpt.html',
    "<article class=\"photo excerpt\"><div class=\"photo-inner\"><div class=\"image-container\"><a ng-href=\"{{i.url}}\" target=\"_blank\"><img ng-src=\"{{i.sizes.thumbnail.url}}\" alt=\"{{i.alt}}\" title=\"{{i.title}}\" height=\"{{i.sizes.thumbnail.height}}\" width=\"{{i.sizes.thumbnail.width}}\"><div class=\"meta overlay\"><div class=\"meta-inner centerer\"><div class=\"center\"><h4 ng-if=\"i.title\" class=\"title\">{{i.title}}</h4><div ng-if=\"i.caption\" class=\"caption\">{{i.caption}}</div><div ng-if=\"i.description\" class=\"description content\" ng-bind-html=\"i.description\"></div></div></div></div></a></div></div></article>"
  );


  $templateCache.put('partials/photo_full.html',
    "<article class=\"photo\"><div class=\"photo-inner\"><div class=\"image-container\"><a ng-href=\"{{i.url}}\" target=\"_blank\"><img ng-src=\"{{i.sizes.thumbnail.url}}\" alt=\"{{i.alt}}\" title=\"{{i.title}}\" height=\"{{i.sizes.thumbnail.height}}\" width=\"{{i.sizes.thumbnail.width}}\"><div class=\"meta overlay\"><div class=\"meta-inner\"><h4 ng-if=\"i.title\" class=\"title\">{{i.title}}</h4><div ng-if=\"i.caption\" class=\"caption\">{{i.caption}}</div><div ng-if=\"i.description\" class=\"description content\" ng-bind-html=\"i.description\"></div></div></div></a></div></div></article>"
  );


  $templateCache.put('partials/product_big.html',
    "<article class=\"product big\"><div class=\"image-container\"><a href=\"{{p.sales_links[0].link_url}}\" target=\"_blank\"><img src=\"{{p.image.sizes.full.url}}\" alt=\"{{p.image.alt}}\" title=\"{{p.image.title}}\" height=\"{{p.image.sizes.full.height}}\" width=\"{{p.image.sizes.full.width}}\"></a></div><div class=\"content-wrapper\"><div class=\"description\" ng-bind-html=\"p.content\"></div><a class=\"button buy-button fade-in\" ng-repeat=\"b in p.sales_links\" ng-href=\"{{b.link_url}}\">{{b.link_text}}</a></div></article>"
  );


  $templateCache.put('partials/product_small.html',
    "<article class=\"product fade-in\"><div class=\"product-inner\"><div class=\"image-container\"><a ng-href=\"{{p.sales_links[0].link_url}}\" target=\"_blank\"><img ng-src=\"{{p.image.sizes.thumbnail.url}}\" alt=\"{{p.image.alt}}\" title=\"{{p.image.title}}\" height=\"{{p.image.sizes.thumbnail.height}}\" width=\"{{p.image.sizes.thumbnail.width}}\"></a></div><a class=\"button buy-button fade-in\" ng-repeat=\"b in p.sales_links\" target=\"_blank\" ng-href=\"{{b.link_url}}\">{{b.link_text}}</a><h4 class=\"product-title\">{{p.title}}</h4><h3 class=\"product-rrp\" ng-if=\"p.rrp\">RRP: £{{p.rrp}}</h3><div class=\"description\" ng-bind-html=\"p.content\"></div></div></article>"
  );


  $templateCache.put('partials/promotion.html',
    "<article class=\"promotion skrollr-promo\"><div class=\"promotion-inner\"><a ng-if=\"p.promo_target != '_self'\" class=\"link-overlay\" ng-href=\"{{p.promo_link}}\" target=\"_blank\"></a> <a ng-if=\"p.promo_target == '_self'\" class=\"link-overlay\" ng-href=\"{{p.promo_link}}\"></a><div class=\"promotion-media\"><div ng-if=\"p.video_background\"><youtube-background yt-id=\"p.video_background.youtube_object.id\"></youtube-background></div><div ng-if=\"!p.video_background\"><div class=\"promo-img skrollr-bg\" style=\"background-image:url({{p.image.sizes.full.url}})\"></div></div></div><div ng-if=\"p.title || p.content\" class=\"text-stuff\"><div class=\"text-stuff-center-container\"><div class=\"text-stuff-center\"><h1 class=\"title\">{{p.title}}</h1><div class=\"content\" ng-bind-html=\"p.content\"></div><div class=\"button promotion-button\">{{p.promo_text}}</div></div></div></div></div></article>"
  );


  $templateCache.put('partials/share.html',
    "<div class=\"share\"><div class=\"addthis_toolbox\"><a class=\"engage-button\" ng-click=\"openTwitterShare()\"><div class=\"engage-button-inner twitter button\"><i class=\"fa fa-twitter\"></i> Tweet</div></a><a class=\"addthis_button_facebook engage-button\" addthis:url=\"{{url}}\" addthis:title=\"{{title}}\" addthis:description=\"{{desc}}\"><div class=\"engage-button-inner facebook button\"><i class=\"fa fa-facebook\"></i> Share</div><!--<div class=\"engage-button facebook-like\">\n" +
    "            <div class=\"engage-button-inner facebook button\">\n" +
    "                <a class=\"addthis_button_facebook_like\"></a>\n" +
    "            </div>\n" +
    "        </div>--></a><a class=\"addthis_button_google_plusone_share engage-button\" addthis:url=\"{{url}}\" addthis:title=\"{{title}}\" addthis:description=\"{{desc}}\"><div class=\"engage-button-inner google button\"><i class=\"fa fa-google-plus\"></i> Share</div></a><a class=\"engage-button\" ng-click=\"sharePinterest()\" addthis:url=\"{{url}}\" addthis:title=\"{{title}}\" addthis:description=\"{{desc}}\"><div class=\"engage-button-inner pinterest button\"><i class=\"fa fa-pinterest\"></i> Pin it</div></a></div></div>"
  );


  $templateCache.put('partials/track-full.html',
    "<div class=\"track\"><div class=\"track-inner\"><span class=\"\"></span></div></div>"
  );


  $templateCache.put('partials/video_excerpt.html',
    "<article class=\"video excerpt\"><a class=\"image-container\" ng-href=\"#/video/{{v.slug}}\"><img class=\"preview-image\" ng-src=\"{{v.youtube_object.snippet.thumbnails.medium.url}}\" width=\"{{v.youtube_object.snippet.thumbnails.medium.width}}\" height=\"{{v.youtube_object.snippet.thumbnails.medium.height}}\" alt=\"{{v.youtube_object.snipper.title}}\"></a><h4>{{v.title}}</h4></article>"
  );


  $templateCache.put('partials/video_full.html',
    "<article class=\"video\"><youtube yt-id=\"v.youtube_object.id\"></youtube><h1>{{v.title}}</h1></article>"
  );


  $templateCache.put('partials/youtube.html',
    "<div class=\"video-container\" itemtype=\"http://schema.org/VideoObject\"><div class=\"video video-replace\"></div><meta itemprop=\"name\" content=\"{{yt.snippet.title}}\"><meta itemprop=\"duration\" content=\"{{yt.contentDetails.duration}}\"><meta itemprop=\"thumbnail\" content=\"{{yt.snippet.thumbnails.standard.url}}\"><meta itemprop=\"description\" content=\"{{yt.snippet.description}}\"><img class=\"seo-kludge\" ng-src=\"{{yt.snippet.thumbnails.standard.url}}\" width=\"{{yt.snippet.thumbnails.standard.width}}\" height=\"{{yt.snippet.thumbnails.standard.height}}\" alt=\"{{yt.snipper.title}}\"></div>"
  );

}]);
