// it enables us to work with a file system
// fs modules is a node's core modules shipping together with node js
// const fs = require("fs");

// this method will write a file to our hard drive
// first argument is a path to the file
// second argument is a content of this file
// fs.writeFileSync("hello.txt", "Hello from Node.js");

// require is way you import file to node js
const http = require("http");
const fs = require("fs");

// createServer takes a request listener - a function that will execute for every incoming request, as an argument
// this function has to receive 2 arguments: request - incoming message, response - server response
// node js give us an object that represents an incoming request and allows us to read data from our request and it gives us an object - response which we can use to return that response to whoever sent that request
// function rqListener(req, res) {}

// // its a callback function
// http.createServer(rqListener);

// this returns a server and we need to store in a const
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    // action is a url this request should be send to which will be generated automatically
    // a GET request is automatically send when you click a link or entering url
    // POST request has to be set up by me and it will send a POST request to /message
    // it will automatically put a message into request it sends to our server
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name ='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</body>");
    // we put return to return from this anonymous function and not execute the html code bellow
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    // we listen to sertain events
    // the data event will be fired whenever a new chunk(data piece) is ready to be read
    // second argument is a function that will be executed for every event(first argument)
    // here we collect chunks into body
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    // this will be done when it stops parsing the incoming request data or incoming request
    // the stop where we can interact with chunks
    req.on("end", () => {
      // it will create a new buffer(stop) and add all the chunks from inside body to this parsedBody
      // the bus is waiting at the stop while we converting it to string because the body of input will be text
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    // allows to write meta information in one go and then we set a status code of 302(redirection) and then we pass some js object with some headers we want to set
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  //   console.log(req.url, req.method, req.headers);
  // quit the server
  // hard exit the loop and therefor programm shut down
  //   process.exit();
  // set a new header
  // it will attach a header to our response where we pass some meta information(Content-Type) saying that the type of a content, which will also be a part of response, is html
  res.setHeader("Content-Type", "text/html");
  // write allows to write some code to the response higher in text/html
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my Node.js server</h1></body>");
  res.write("</body>");
  // we are telling that we are done writing html code
  // you must not change the response after you ended it
  // this is a part where we sending the response back to the client(browser)
  res.end();
});

//node js will listen to incoming request
// it should have port and hostname
server.listen(3000);

// headers - meta data, meta information added to the request

// url is a / and everything after host

// method - get/set

// A BUFFER IS A CONSTRUCT WHICH ALLOWS YOU TO HOLD MULTIPLE CHUNKS OF DATA AND WORK WITH THEM BEFORE THEY ARE RELEASED ONCE YOU ARE DONE
