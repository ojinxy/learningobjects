'use strict';

describe('Component: LearningobjectComponent', function () {

  // load the controller's module
  beforeEach(module('learningobjectsApp'));

  var LearningobjectComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LearningobjectComponent = $componentController('LearningobjectComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
