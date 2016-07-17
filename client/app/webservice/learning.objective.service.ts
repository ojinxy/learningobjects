'use strict';

angular.module('learningobjectsApp').factory('learningObjectiveService', function($http){
  var factory = {};

  factory.getAll = function(){
    return $http.get('/api/learningobjectives');
  };

  return factory;
});
