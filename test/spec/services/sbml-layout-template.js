'use strict';

describe('Service: sbmlLayoutTemplate', function () {

  // load the service's module
  beforeEach(module('jdesignerToSbmllayoutApp'));

  // instantiate service
  var sbmlLayoutTemplate;
  beforeEach(inject(function (_sbmlLayoutTemplate_) {
    sbmlLayoutTemplate = _sbmlLayoutTemplate_;
  }));

  it('should do something', function () {
    expect(!!sbmlLayoutTemplate).toBe(true);
  });

});
