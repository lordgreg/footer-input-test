'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      templateUrl: 'main/templates/main.html',
      controller: 'MainCtrl as ctrl'
    });
});
