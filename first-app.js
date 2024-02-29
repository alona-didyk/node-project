// it enables us to work with a file system
// fs modules is a node's core modules shipping together with node js
// const fs = require("fs");
// const http = require("http");

// to use express you should import it
// const express = require("express");

// you create an express application and store it in a const by running express()
// const app = express();

// use allows us to add a new middleware; it accepts an array of so-called request handlers
// this function will be exeuted for every incoming request; must be 3 arguments
// next is a function that will be passed to this function by express; it has to be executed to allow the request to travel on to the next middleware
// this will be always shown
// app.use("/", (req, res, next) => {
//   console.log("This always runs");
//   next();
// });

// the
// app.use("/add-product", (req, res, next) => {
//   console.log("in another middleware");
//   // send allows us to send a response and attach a body
//   res.send("<h1>The Add Product page</h1>");
// });

// app.use("/", (req, res, next) => {
//   console.log("in another middleware");
//   // send allows us to send a response and attach a body
//   res.send("<h1>Hello from express</h1>");
// });
// this method will write a file to out hard drive
// first argument is a path to the file
// second argument is a content of this file
// fs.writeFileSync("hello.txt", "Hello from Node.js");

// we pass app here to create server
// it sets up a certain way of handling incoming requests that defines or that is a key characteristic of express.js
// const server = http.createServer(app);
// server.listen(3000);
// instead of these two lines
// app.listen(3000);

// express is all about middleware(it means that an incoming request is automatically funelled through a bunch of functions by express.js, so instead of having just one request handler, you will actually have a posibility of hooking in multiple functions which the request will go through untill you send a response. This allows to split code into multiple blocks or pieces instead of having one huge function)

// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const app = express();

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// // urlEncoded - registers a middleware
// // pass the config option
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

// app.use((req, res, next) => {
// status - set a 404 error
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });

// app.listen(3000);

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// static serves static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
