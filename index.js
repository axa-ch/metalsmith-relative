var path = require('path')
var extend = require('extend')

module.exports = plugin;

function normalizePath(p) {
  p = path.normalize(p);

  if(p.charAt(0) == path.sep) {
    p = p.substring(1);
  }

  return p
}

function plugin(opts) {
  opts = extend({ methodName: 'relative' }, opts);

  return function(files, metalsmith, done) {

    Object.keys(files).forEach(function(file) {
      var from = path.dirname(normalizePath(file));

      files[file][opts.methodName] = function(to) {
        return to == undefined || to == null ? '' + to : path.relative(from, normalizePath(to));
      }

    });

    done();

  }
}
