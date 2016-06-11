'use strict';

angular.module('learningobjectsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('learningobject', {
        url: '/learningobject',
        template: '<learningobject></learningobject>'
      });
  });
