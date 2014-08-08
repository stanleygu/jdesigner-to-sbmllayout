'use strict';

describe('Service: jdesignerToSbmlLayout', function () {

  // load the service's module
  beforeEach(module('jdesignerToSbmllayoutApp'));

  // instantiate service
  var jdesignerToSbmlLayout;
  beforeEach(inject(function (_jdesignerToSbmlLayout_) {
    jdesignerToSbmlLayout = _jdesignerToSbmlLayout_;
  }));

  it('should do something', function () {
    expect(!!jdesignerToSbmlLayout).toBe(true);
  });

});
