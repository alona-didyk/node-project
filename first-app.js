// it enables us to work with a file system
// fs modules is a node's core modules shipping together with node js
const fs = require("fs");

// this method will write a file to out hard drive
// first argument is a path to the file
// second argument is a content of this file
fs.writeFileSync("hello.txt", "Hello from Node.js");
