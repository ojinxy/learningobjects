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

        element.on('click', function(event) {
          this.learningObjective = scope.learningObjective;
          this.selectedObjective = scope.learningObjective;

          $('div[id*=selectionDiv]').removeClass('selected');
          $('div[id*=selectionDiv]').addClass('not-selected');

          if (this.selectedObjective._id === this.learningObjective._id) {
            element.find('#selectionDiv').removeClass('not-selected');
            element.find('#selectionDiv').addClass('selected');
          } else {
            element.find('#selectionDiv').addClass('not-selected');
          }
      });

      }
    };
  });
