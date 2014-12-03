var path = require('path');

module.exports = normalizePath;

function normalizePath(p) {
  p = path.normalize(p);

  // it's save to use path.sep instead of checking for / and \\ since
  // path.normalize will handle that
  if(p.charAt(0) == path.sep) {
    p = p.substring(1);
  }

  return p;
}
