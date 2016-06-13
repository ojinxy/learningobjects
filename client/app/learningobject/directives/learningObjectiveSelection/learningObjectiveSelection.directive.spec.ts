'use strict';

describe('Directive: learningObjectiveSelection', function () {

  // load the directive's module and view
  beforeEach(module('learningobjectsApp.learningObjectiveSelection'));
  beforeEach(module('app/learningobject/directives/learningObjectiveSelection/learningObjectiveSelection.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<learning-objective-selection></learning-objective-selection>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the learningObjectiveSelection directive');
  }));
});
