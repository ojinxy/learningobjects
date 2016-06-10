'use strict';

angular.module('learningobjectsApp.auth', [
  'learningobjectsApp.constants',
  'learningobjectsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
