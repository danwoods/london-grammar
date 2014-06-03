'use strict';

describe('Directive: promotion', function () {

  // load the directive's module
  beforeEach(module('prototypeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<promotion></promotion>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the promotion directive');
  }));
});
