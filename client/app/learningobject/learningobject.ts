'use strict';

angular.module('learningobjectsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('learningobject', {
        url: '/learningobject',
        template: '<learningobject></learningobject>'
      })
      .state('learningobject.new', {
        url: '/new',
        template: '<learningobject></learningobject>'
      });
  });
