'use strict';

describe('Service: back', function () {

  // load the service's module
  beforeEach(module('prototypeApp'));

  // instantiate service
  var back;
  beforeEach(inject(function (_back_) {
    back = _back_;
  }));

  it('should do something', function () {
    expect(!!back).toBe(true);
  });

});
