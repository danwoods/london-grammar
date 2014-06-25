'use strict';

describe('Directive: videoExcerpt', function () {

  // load the directive's module
  beforeEach(module('prototypeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<video-excerpt></video-excerpt>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the videoExcerpt directive');
  }));
});
