const path = require("path");

// a function that helps to construct a path to the parent directory
// Return the directory name of a path.
// mainModule will refer to main js file
// gives the path to the root files
module.exports = path.dirname(require.main.filename);
