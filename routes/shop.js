// const path = require("path");

// const express = require("express");

// const router = express.Router();

// router.get("/", (req, res, next) => {
//   // sendFile - send file back to the user
//   // join - returns a path but it constructs this path by concatenating the different segments; first we should pass global variable __dirname(global variable that holds the absolute path on our operating system to project folder)
//   // dirname first goes to routes.js folder, them ../ up one level and the to views shop.html
//   res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
// });

// module.exports = router;

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
