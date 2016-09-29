'use strict';
angular.module('main')
.controller('MainCtrl', function (
  $timeout
) {

  this.data = {};
  this.data.content = ['array'];

  this.ionNavView = document.querySelector('ion-nav-view');
  this.html = document.querySelector('html');

  if (window.isFB && ionic.Platform.isIOS()) {

    $timeout(function () {
      // recalculate ion-nav-view height
      this.html.style.height = window.innerHeight + 'px';
    }.bind(this), 500);
  }



  $timeout(function () {
    this.data.content.push('TEST YOLO TEST');
  }.bind(this), 2000);

  this.resizeView = function (type) {
    switch (type) {
      case 'focus':

        break;

      case 'blur':

        break;

      case 'change':
        $timeout(function () {
          this.html.scrollTop = this.html.scrollHeight;
        }.bind(this), 500);

        break;
    }
  };

});
