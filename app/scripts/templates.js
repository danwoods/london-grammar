angular.module('prototypeApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/_related.html',
    "<section class=\"summary\">\n" +
    "\tHi. The following related content types were found:\n" +
    "\t<span ng-repeat=\"(key, value) in post.related\"> {{key}},\n" +
    "\t</span>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"photos section\">\n" +
    "\t<photo-excerpt class=\"flexibox\" ng-repeat=\"i in post.related.images\" image=\"i\"></photo-excerpt>\t\n" +
    "</section>\n" +
    "<section class=\"videos section\">\n" +
    "\t<article class=\"video\" ng-repeat=\"v in post.related.videos\">\n" +
    "\t    <youtube yt-id=\"v.youtube_object.id\"></youtube>\n" +
    "\t    <h1>{{v.title}}</h1>\n" +
    "\t</article>\n" +
    "</section>\n" +
    "<section class=\"\">\n" +
    "\t\n" +
    "</section>"
  );


  $templateCache.put('views/exmaple-releases.html',
    "<p>This is the exmaple-releases view.</p>"
  );


  $templateCache.put('views/main.html',
    "<h1>{{page.title}}</h1>\n" +
    "<div class=\"content\" ng-bind-html=\"page.content\"></div>\n" +
    "<section class=\"promotions\">\n" +
    "    <promotion ng-repeat=\"p in page.promotions\" promotion=\"p\"></promotion>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"videos\">\n" +
    "    <article class=\"video\" ng-repeat=\"v in videos\">\n" +
    "        <youtube yt-id=\"v.youtube_object.id\"></youtube>\n" +
    "        <h1>{{v.title}}</h1>\n" +
    "    </article>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"photos\">\n" +
    "\t<photo-excerpt class=\"flexibox\" ng-repeat=\"i in images\" image=\"i\"></photo-excerpt>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"albums\">\n" +
    "    <ng-include src=\"'partials/album_full.html'\" ng-repeat=\"a in albums\"></ng-include>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"news\">\n" +
    "    <ng-include src=\"'partials/blog_full.html'\" ng-repeat=\"b in news\"></ng-include>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"contact\">\n" +
    "    <ng-include ng-repeat=\"page in contactPage\" src=\"'views/page.html'\"></ng-include>\n" +
    "</section>"
  );


  $templateCache.put('views/page.html',
    "<article class=\"page\">\n" +
    "    <div class=\"page-inner\">\n" +
    "        <h1 class=\"title\">{{page.title}}</h1>\n" +
    "        <div class=\"content\" ng-bind-html=\"page.content\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</article>"
  );


  $templateCache.put('partials/album_full.html',
    "<article class=\"album full\">\n" +
    "\t<div class=\"album-inner\">\n" +
    "\t\t<div class=\"media-container\">\n" +
    "\t\t\t<img src=\"{{a.image.sizes.medium.url}}\" width=\"{{a.image.sizes.medium.width}}\" height=\"{{a.image.sizes.medium.height}}\" alt=\"{{a.image.alt}}\">\n" +
    "\t\t</div>\t\t\n" +
    "\t\t<h2 class=\"title\">{{a.title}}</h2>\n" +
    "\t\t<h3 class=\"subtitle date release-date\">{{ a.date | time }}</h3>\n" +
    "\t\t<div class=\"content\" ng-bind-html=\"a.conten\"></div>\n" +
    "\t\t<div class=\"tracklist\">\n" +
    "\t\t\t<div ng-repeat=\"t in a.tracklisting\" class=\"track excerpt\">\n" +
    "\t\t\t\t<div class=\"track-inner\">\n" +
    "\t\t\t\t\t<div class=\"track-header\">\n" +
    "\t\t\t\t\t\t<span class=\"track-number\">{{$index}}</span><span class=\"track-title\">{{t.title}}</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"extra-information\" ng-show=\"state\">\n" +
    "\t\t\t\t\t\t<div class=\"lyrics\" ng-bind-html=\"t.lyrics\"></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"product-links\">\n" +
    "\t\t\t<div class=\"row\" ng-repeat=\"l in a.links\">\n" +
    "\t\t\t\t<i class=\"fa fa-{{l.link_type}}\"></i>\n" +
    "\t\t\t\t<a ng-href=\"{{l.link_url}}\" target=\"{{l.link_target}}\">{{l.link_text}}</a>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</article>"
  );


  $templateCache.put('partials/blog_full.html',
    "<article class=\"blog full\" blog=\"\" ng-class=\"{ open : state }\">\n" +
    "\t<div class=\"blog-inner\">\n" +
    "\t\t<div class=\"media-container\">\n" +
    "\t\t\t<img src=\"{{b.image.sizes.medium.url}}\" width=\"{{b.image.sizes.medium.width}}\" height=\"{{b.image.sizes.medium.height}}\" alt=\"{{b.image.alt}}\">\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"info\">\n" +
    "\t\t\t<a href=\"{{ b.link }}\"><h2 class=\"title\">{{ b.title }}</h2></a>\n" +
    "\t\t\t<div class=\"meta\">\n" +
    "\t\t\t\tPosted by \n" +
    "\t\t\t\t<span class=\"by-line\"><a href=\"{{b.author.link}}\">{{b.author.name}}</a></span>\n" +
    "\t\t\t\ton \n" +
    "\t\t\t\t<span class=\"date\">{{ b.date | time }}</span>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"categories\">\n" +
    "\t\t\t\t<span class=\"in\">posted in: </span>\n" +
    "\t\t\t\t<a ng-repeat=\"c in b.terms\" class=\"category\" href=\"{{c.link}}\">{{ c.name }}</a>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"j-content\" ng-bind-html=\"b.content\">\n" +
    "\t\t</div>\n" +
    "\t\t<share></share>\t\t\n" +
    "\t\t<div class=\"trigger\" ng-click=\"state = !state\">\n" +
    "\t\t\t<div class=\"expand\" ng-show=\"!state\">Read More</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</article>"
  );


  $templateCache.put('partials/generic_full.html',
    "<article class=\"blog full\" blog=\"\" ng-class=\"{ open : state }\">\n" +
    "\t<div class=\"blog-inner\">\n" +
    "\t\t<div class=\"info\">\n" +
    "\t\t\t<a href=\"{{ b.link }}\"><h2 class=\"title\">{{ b.title }}</h2></a>\n" +
    "\t\t\t<div class=\"meta\">\n" +
    "\t\t\t\tPosted by \n" +
    "\t\t\t\t<span class=\"by-line\"><a href=\"{{b.author.link}}\">{{b.author.name}}</a></span>\n" +
    "\t\t\t\ton \n" +
    "\t\t\t\t<span class=\"date\">{{ b.date | time }}</span>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"categories\">\n" +
    "\t\t\t\t<span class=\"in\">posted in: </span>\n" +
    "\t\t\t\t<a ng-repeat=\"c in b.terms\" class=\"category\" href=\"{{c.link}}\">{{ c.name }}</a>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"j-content\" ng-bind-html=\"b.content\">\n" +
    "\t\t</div>\n" +
    "\t\t<share></share>\t\t\n" +
    "\t\t<div class=\"trigger\" ng-click=\"state = !state\">\n" +
    "\t\t\t<div class=\"expand\" ng-show=\"!state\">Read More</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</article>"
  );


  $templateCache.put('partials/photo_excerpt.html',
    "<article class=\"photo\">\n" +
    "    <div class=\"photo-inner\">\n" +
    "        <div class=\"image-container\">\n" +
    "            <a ng-href=\"{{i.url}}\" target=\"_blank\">\n" +
    "            <img ng-src=\"{{i.sizes.thumbnail.url}}\" alt=\"{{i.alt}}\" title=\"{{i.title}}\" height=\"{{i.sizes.thumbnail.height}}\" width=\"{{i.sizes.thumbnail.width}}\">\n" +
    "           \t<div class=\"meta overlay\">\n" +
    "           \t\t<div class=\"meta-inner\">\n" +
    "           \t\t\t<h4 ng-if=\"i.title\" class=\"title\">{{i.title}}</h4>\n" +
    "           \t\t\t<div ng-if=\"i.caption\" class=\"caption\">{{i.caption}}</div>\n" +
    "           \t\t\t<div ng-if=\"i.description\" class=\"description content\" ng-bind-html=\"i.description\">\n" +
    "           \t\t\t</div>\n" +
    "           \t\t</div>\n" +
    "           \t</div>\n" +
    "           </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</article>"
  );


  $templateCache.put('partials/photo_full.html',
    "<article class=\"photo\">\n" +
    "    <div class=\"photo-inner\">\n" +
    "        <div class=\"image-container\">\n" +
    "            <a ng-href=\"{{i.url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{i.sizes.full.url}}\" alt=\"{{i.alt}}\" title=\"{{i.title}}\" height=\"{{i.sizes.full.height}}\" width=\"{{i.sizes.full.width}}\">\n" +
    "           </a>\n" +
    "        </div>\n" +
    "        <h1>{{i.title}}</h1>\n" +
    "        <h2>{{i.caption}}</h2>\n" +
    "        <div>{{i.description}}</div>\n" +
    "    </div>\n" +
    "</article>"
  );


  $templateCache.put('partials/product_big.html',
    "<article class=\"product big\">\n" +
    "    <div class=\"image-container\">\n" +
    "        <a href=\"{{p.sales_links[0].link_url}}\" target=\"_blank\">\n" +
    "            <img src=\"{{p.image.sizes.full.url}}\" alt=\"{{p.image.alt}}\" title=\"{{p.image.title}}\" height=\"{{p.image.sizes.full.height}}\" width=\"{{p.image.sizes.full.width}}\">\n" +
    "       </a>\n" +
    "    </div>\n" +
    "    <div class=\"content-wrapper\">\n" +
    "        <div class=\"description\" ng-bind-html=\"p.content\"></div>\n" +
    "        <a class=\"button buy-button fade-in\" ng-repeat=\"b in p.sales_links\" ng-href=\"{{b.link_url}}\">{{b.link_text}}</a>\n" +
    "    </div>\n" +
    "</article>"
  );


  $templateCache.put('partials/product_small.html',
    "<article class=\"product fade-in\">\n" +
    "    <div class=\"product-inner\">\n" +
    "        <div class=\"image-container\">\n" +
    "        \t<a ng-href=\"{{p.sales_links[0].link_url}}\" target=\"_blank\">\n" +
    "            <img ng-src=\"{{p.image.sizes.thumbnail.url}}\" alt=\"{{p.image.alt}}\" title=\"{{p.image.title}}\" height=\"{{p.image.sizes.thumbnail.height}}\" width=\"{{p.image.sizes.thumbnail.width}}\">\n" +
    "           </a>\n" +
    "        </div>\n" +
    "        <a class=\"button buy-button fade-in\" ng-repeat=\"b in p.sales_links\" target=\"_blank\" ng-href=\"{{b.link_url}}\">{{b.link_text}}</a>        \n" +
    "        <h4 class=\"product-title\">{{p.title}}</h4>\n" +
    "        <h3 class=\"product-rrp\" ng-if=\"p.rrp\">RRP: £{{p.rrp}}</h3>\n" +
    "        <div class=\"description\" ng-bind-html=\"p.content\"></div>\n" +
    "    </div>\n" +
    "</article>"
  );


  $templateCache.put('partials/promotion.html',
    "<article class=\"promotion\">\n" +
    "    <div class=\"promotion-inner\">\n" +
    "\t\t<a ng-if=\"p.promo_target != '_self'\" class=\"link-overlay\" ng-href=\"{{p.promo_link}}\" target=\"_blank\"></a>\n" +
    "\t\t <a ng-if=\"p.promo_target == '_self'\" class=\"link-overlay\" ng-href=\"{{p.promo_link}}\"></a>\n" +
    "\t\t <div class=\"promotion-media\">\n" +
    "\t\t     <div ng-if=\"p.video_background\">\n" +
    "\t\t           <youtube-background yt-id=\"p.video_background.youtube_object.id\"></youtube-background>\n" +
    "\t\t     </div>\n" +
    "\t\t     <div ng-if=\"!p.video_background\">\n" +
    "\t\t         <div class=\"promo-img\" style=\"background-image:url({{p.image.sizes.full.url}})\"></div>\n" +
    "\t\t     </div>\n" +
    "\t\t </div>\n" +
    "        <div ng-if=\"p.title || p.content\" class=\"text-stuff\">\n" +
    "        \t<div class=\"text-stuff-center-container\">\n" +
    "\t        \t<div class=\"text-stuff-center\">\n" +
    "\t\t\t\t\t\t <h1 class=\"title\">{{p.title}}</h1>\n" +
    "\t\t\t\t\t\t <div class=\"content\" ng-bind-html=\"p.content\"></div>\n" +
    "\t\t\t\t\t\t <div class=\"button promotion-button\">{{p.promo_text}}</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</article>"
  );


  $templateCache.put('partials/share.html',
    "<div class=\"share\">\n" +
    "    <div class=\"addthis_toolbox\">\n" +
    "        <a class=\"engage-button\" ng-click=\"openTwitterShare()\">\n" +
    "            <div class=\"engage-button-inner twitter button\">\n" +
    "                <i class=\"fa fa-twitter\"></i> Tweet\n" +
    "            </div>\n" +
    "        \n" +
    "        </a><a class=\"addthis_button_facebook engage-button\" addthis:url=\"{{url}}\" addthis:title=\"{{title}}\" addthis:description=\"{{desc}}\">\n" +
    "            <div class=\"engage-button-inner facebook button\">\n" +
    "                <i class=\"fa fa-facebook\"></i> Share\n" +
    "            </div>\n" +
    "        \n" +
    "        <!--<div class=\"engage-button facebook-like\">\n" +
    "            <div class=\"engage-button-inner facebook button\">\n" +
    "                <a class=\"addthis_button_facebook_like\"></a>\n" +
    "            </div>\n" +
    "        </div>-->\n" +
    "        </a><a class=\"addthis_button_google_plusone_share engage-button\" addthis:url=\"{{url}}\" addthis:title=\"{{title}}\" addthis:description=\"{{desc}}\">    \n" +
    "            <div class=\"engage-button-inner google button\">\n" +
    "                <i class=\"fa fa-google-plus\"></i> Share\n" +
    "            </div>\n" +
    "</a><a class=\"engage-button\" ng-click=\"sharePinterest()\" addthis:url=\"{{url}}\" addthis:title=\"{{title}}\" addthis:description=\"{{desc}}\">        \n" +
    "            <div class=\"engage-button-inner pinterest button\">\n" +
    "                <i class=\"fa fa-pinterest\"></i> Pin it\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('partials/track-full.html',
    "<div class=\"track\">\n" +
    "\t<div class=\"track-inner\">\n" +
    "\t\t<span class=\"\"></span>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('partials/video_excerpt.html',
    "<article class=\"video\">\n" +
    "    <youtube yt-id=\"v.youtube_object.id\"></youtube>\n" +
    "    <h1>{{v.title}}</h1>\n" +
    "</article>"
  );


  $templateCache.put('partials/youtube.html',
    "<div class=\"video-container\" itemtype=\"http://schema.org/VideoObject\">\n" +
    "\t<div class=\"video video-replace\"></div>\n" +
    "\t<meta itemprop=\"name\" content=\"{{yt.snippet.title}}\">\n" +
    "\t<meta itemprop=\"duration\" content=\"{{yt.contentDetails.duration}}\">\n" +
    "\t<meta itemprop=\"thumbnail\" content=\"{{yt.snippet.thumbnails.standard.url}}\">\n" +
    "\t<meta itemprop=\"description\" content=\"{{yt.snippet.description}}\">\n" +
    "\t<img class=\"seo-kludge\" ng-src=\"{{yt.snippet.thumbnails.standard.url}}\" width=\"{{yt.snippet.thumbnails.standard.width}}\" height=\"{{yt.snippet.thumbnails.standard.height}}\" alt=\"{{yt.snipper.title}}\">\n" +
    "</div>"
  );

}]);
