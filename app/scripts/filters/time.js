'use strict';

angular.module('prototypeApp')
  .filter('time',  ['$window', function ($window) {
  'use strict';
  
  return function (value, format, inputType) {
   if (typeof value === 'undefined' || value === null) {
     return '';
   }
   
   /* if (!isNaN(parseFloat(value)) && isFinite(value)) {//not sure why this was needed.
     // Milliseconds since the epoch
     value = new Date(parseInt(value, 10));
   }
   format = format || 'MMMM Do YYYY, h:mm a';
   */
   return $window.moment(value, inputType).format(format);
  };
 }]);
