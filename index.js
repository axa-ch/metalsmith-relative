var path = require('path')
var extend = require('extend')
var normalizePath = require('./lib/normalize-path')
var makePathBrowserCompliant = require('./lib/make-path-browser-compliant')

module.exports = plugin;

function plugin(opts) {
  opts = extend({ methodName: 'relative' }, opts);

  return function(files, metalsmith, done) {

    Object.keys(files).forEach(function(file) {
      var from = path.dirname(normalizePath(file));

      files[file][opts.methodName] = function(to) {
        return to == undefined || to == null ? '' + to : makePathBrowserCompliant(path.relative(from, normalizePath(to)));
      }

    });

    done();

  }
}
