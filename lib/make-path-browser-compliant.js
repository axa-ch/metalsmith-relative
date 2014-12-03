
module.exports = makePathBrowserCompliant;

function makePathBrowserCompliant(path) {
  return path.replace(/\\/g, '/');
}
