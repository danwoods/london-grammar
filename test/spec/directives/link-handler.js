'use strict';

describe('Directive: linkHandler', function () {

  // load the directive's module
  beforeEach(module('prototypeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<link-handler></link-handler>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the linkHandler directive');
  }));
});
