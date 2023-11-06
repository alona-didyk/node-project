// THE CONTENT HERE IS CACHED BY NODE
// THIS SCRIPT IS LOCKED AND NOT ACCESIBLE FROM OUTSIDE, WE CAN ONLY EXPORT AND READ IT

const fs = require("fs");

const requestHandler = (req, res) => {
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
    // node register this code body and then move to setHeaders, it will not execute const parsedBody = Buffe... because its too late, it already executed code with html
    return req.on("end", () => {
      // it will create a new buffer(stop) and add all the chunks from inside body to this parsedBody
      // the bus is waiting at the stop while we converting it to string because the body of input will be text
      // sending the response is statusCode does not mean our listeners bellow are dead
      // if we do something in the event listener we should move the response bellow after event listener
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // the sync stands for synchronicity and this is a special method which will actually block code execution untill this file is created
      // there are two ways of working with files: - synchronous mode(bellow Sync), - if we use fileSync and its a big file, meta data the res will not be done untill this file operation is done, it has a third argument - a callback function which receives an error object(err), we show there that is an eror and otherwise return a normal response
      //       fs.writeFiec("message.txt", message, (err) => {
      //  // allows to write meta information in one go and then we set a status code of 302(redirection) and then we pass some js object with some headers we want to set
      //the response will be sent when we are done working with files
      //  res.statusCode = 302;
      //  res.setHeader("Location", "/");
      //  return res.end();
      //       });

      fs.writeFileSync("message.txt", message);
      // allows to write meta information in one go and then we set a status code of 302(redirection) and then we pass some js object with some headers we want to set
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
    // res.statusCode = 302;
    // res.setHeader("Location", "/");
    // return res.end();
  }
  //   console.log(req.url, req.method, req.headers);
  // quit the server
  // hard exit the loop and therefor programm shut down
  //   process.exit();
  // set a new header
  // it will attach a header to our response where we pass some meta information(Content-Type) saying that the type of a content, which will also be a part of response, is html
  // THIS CODE WILL RUN BEFORE const parsedBody = Buffe... BECAUSE const parsedBody = Buffe IS A CALLBACK TO BE CALLED SOMETIME IN THE FUTURE
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
};

// EXPORT FILES
// method is keyword which is exposed globally to you by nodes which has an exports property and we assign a value to this
module.exports = requestHandler;

// IF WE HAVE TO MANY TO EXPORT WE USE object
// and in first-app.js we should use routes.handler
// module.exports = {
//     handler: requestHandler
// }
// ===
// module.exports.handler = requestHandler;
