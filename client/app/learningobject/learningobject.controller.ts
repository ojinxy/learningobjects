'use strict';
(function(){

class LearningobjectComponent {
  constructor($http, $scope, learningObjectiveService) {
    $scope.learningObjectives = {};
    this.selectedObjective = null;
    this.$http = $http;
    this.learningObjectiveService = learningObjectiveService;
  }



  $onInit() {
    /*this.$http.get('/api/learningobjectives').then(response => {
      this.learningObjectives = response.data;
    });*/

    this.learningObjectiveService.getAll().then(response => {
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
