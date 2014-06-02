'use strict';

describe('Controller: ExmapleReleasesCtrl', function () {

  // load the controller's module
  beforeEach(module('prototypeApp'));

  var ExmapleReleasesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExmapleReleasesCtrl = $controller('ExmapleReleasesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
