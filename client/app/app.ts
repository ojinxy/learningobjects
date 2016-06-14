'use strict';

angular.module('learningobjectsApp', [
  'learningobjectsApp.auth',
  'learningobjectsApp.admin',
  'learningobjectsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'mgo-angular-wizard',
  'angular-loading-bar'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
