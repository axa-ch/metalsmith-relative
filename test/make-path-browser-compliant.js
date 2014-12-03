var should = require('should');
var makePathBrowserCompliant = require('../lib/make-path-browser-compliant')

describe('normalize-path', function() {

  it('should replace \\ with /', function() {
    makePathBrowserCompliant('a\\b\\c').should.equal('a/b/c');
  });

});
