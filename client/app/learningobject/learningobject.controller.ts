'use strict';
(function(){

class LearningobjectComponent {
  constructor($http, $scope) {
    this.learningObjectives = [];
    this.selectedObjective = null;
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/learningobjectives').then(response => {
      this.learningObjectives = response.data;
    });
  }

  selectObjective(learningObjective) {
    this.selectedObjective = learningObjective;
  }
}

angular.module('learningobjectsApp')
  .component('learningobject', {
    templateUrl: 'app/learningobject/learningobject.html',
    controller: LearningobjectComponent
  });

})();
