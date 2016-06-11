'use strict';
(function(){

class LearningobjectComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('learningobjectsApp')
  .component('learningobject', {
    templateUrl: 'app/learningobject/learningobject.html',
    controller: LearningobjectComponent
  });

})();
