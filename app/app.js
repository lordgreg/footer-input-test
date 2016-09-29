'use strict';
angular.module('facebookBrowserFooterInput', [
  // load your modules here
  'main', // starting with the main module
])
.run(function ($rootScope) {
  var ua = window.navigator.userAgent;
  if (ua.indexOf('MSIE ') > 1 || ua.indexOf('Trident/') > 1 || ua.indexOf('Edge/') > 1) {
    angular.element(document.querySelector('body')).addClass('browser-ie');
    $rootScope.isIE = window.isIE = true;
  }
  if (ua.indexOf('FBAN ') > -1 || ua.indexOf('FBAV') > -1) {
    angular.element(document.querySelector('html')).addClass('facebook');
    angular.element(document.querySelector('body')).addClass('browser-fb');
    $rootScope.isFB = window.isFB = true;
  }

});
