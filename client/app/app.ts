'use strict';

var app = angular.module('learningobjectsApp', [
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
  'angular-loading-bar',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

app.factory('learningObjectiveService', function($http){
  var factory = {};

  factory.getAll = function(){
    return $http.get('/api/learningobjectives');
  };

  return factory;
});
