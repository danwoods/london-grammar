'use strict';

describe('Service: scrollTo', function () {

  // load the service's module
  beforeEach(module('prototypeApp'));

  // instantiate service
  var scrollTo;
  beforeEach(inject(function (_scrollTo_) {
    scrollTo = _scrollTo_;
  }));

  it('should do something', function () {
    expect(!!scrollTo).toBe(true);
  });

});
