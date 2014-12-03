var should = require('should');
var path = require('path');
var normalizePath = require('../lib/normalize-path')

describe('normalize-path', function() {

  it('should normalize ../', function() {
    normalizePath('a/b/../c').should.equal(path.join('a/c'));
  });

  it('should remove starting slashes /', function() {
    normalizePath('/a/b/c').should.equal(path.join('a/b/c'));
  });

});
