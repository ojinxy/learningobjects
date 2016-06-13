'use strict';

angular.module('learningobjectsApp')
  .directive('learningObjectiveSelection', function () {
    return {
      templateUrl: 'app/learningobject/directives/learningObjectiveSelection/learningObjectiveSelection.html',
      restrict: 'EA',
      scope: {
        learningObjective : '=',
        selectedObjective: '='
      },
      link: function (scope, element, attrs) {

        this.learningObjective = scope.learningObjective;
        this.selectedObjective = scope.learningObjective;

        console.log(this.selectedObjective.name);

        if (this.selectedObjective._id === this.learningObjective) {
          angular.element('#selectionDiv').removeClass('not-selected');
          angular.element('#selectionDiv').addClass('selected');
        } else {
          angular.element('#selectionDiv').addClass('not-selected');
        }
      }
    };
  });
