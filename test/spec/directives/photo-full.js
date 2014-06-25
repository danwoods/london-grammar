'use strict';

describe('Directive: photoFull', function () {

  // load the directive's module
  beforeEach(module('prototypeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<photo-full></photo-full>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the photoFull directive');
  }));
});
