// it enables us to work with a file system
// fs modules is a node's core modules shipping together with node js
// const fs = require("fs");

// this method will write a file to our hard drive
// first argument is a path to the file
// second argument is a content of this file
// fs.writeFileSync("hello.txt", "Hello from Node.js");

// require is way you import file to node js
const http = require("http");
const routes = require("./routes");
// const fs = require("fs");

// createServer takes a request listener - a function that will execute for every incoming request, as an argument
// this function has to receive 2 arguments: request - incoming message, response - server response
// node js give us an object that represents an incoming request and allows us to read data from our request and it gives us an object - response which we can use to return that response to whoever sent that request
// function rqListener(req, res) {}

// // its a callback function
// http.createServer(rqListener);

// this returns a server and we need to store in a const
// const server = http.createServer((req, res) => {
//   // const url = req.url;
//   // const method = req.method;
// });

const server = http.createServer(routes);

//node js will listen to incoming request
// it should have port and hostname
server.listen(3000);

// headers - meta data, meta information added to the request

// url is a / and everything after host

// method - get/set

// A BUFFER IS A CONSTRUCT WHICH ALLOWS YOU TO HOLD MULTIPLE CHUNKS OF DATA AND WORK WITH THEM BEFORE THEY ARE RELEASED ONCE YOU ARE DONE

// WE CAN REGISTER CODE/FUNCTION WHICH RUNS SOMETIME IN THE FUTURE BUT NOT NECESSARILY NOW

// NODE JS USES ONLY ONE SINGLE JAVASCRIPT THREAD(A PROCESS IN A OPERATING SYSTEM)
// THE EVENT LOOP IS AUTOMATICALLY STARTED BY NODE JS WHEN YOUR PROGRAMM STARTS
// EVENT LOOP RESPONSIBLE FOR HANDLING EVENT CALLBACKS THAT CONTAINING FAST FINISHING CODE
// AT THE BEGGINING OF ANY ITTERATIONS IT CHECKS IF THERE ANY TIMER CALLBACKS IT SHOULD EXECUTE(SETTIMEOUT, SETINTERVAL). YOU SET A TIMER AND ALWAYS PASS THE METHOD, A FUNCTION THAT SHOULD BE EXECUTED, ONCE THE TIMER COMPLETES
// THE NEXT STEP IT CHECKS OTHER CALLBACKS, E.X. IF WE HAD WRITE OR READ FILE WE MIGHT HAVE A CALLBACK, BECAUSE THAT OPERATION IS FINISHED AND IT WILL THEN EXECUTE THESE CALLBACKS (ALSO I/O (INPUT/OUTPUT) RELATED CALLBACKS; CALLBACKS THAT WERE DEFERRED)
// AFTER FINISHING ALL THESE CALLBACKS IT WILL ENTER THE POLL PHASE - A PHASE WHERE NODE JS WILL LOOK FOR NEW I/O EVENTS AND DO ITS BEST TO EXECUTE THEIR CALLBACKS IMMEDIATELLY IF POSSIBLE. IF ITS NOT POSSIBLE IT WILL DEFFER(PUT OFF) ITS EXECUTION AND REGISTER ITS AS A PENDING(IN WAITING) CALLBACK. IT ALSO CHECKS IF THERE ARE ANY TIMER CALLBACKS DUE TO BE EXECUTED AND IF IT IS IT WILL JUMP TO THAT TIMER PHASE AND EXECUTE THEM RIGHT AWAY
// SETIMMEDIATE(EXECUTE IMMEDIATLY BUT AFTER ANY OPEN CALLBACKS) CALLBACK WILL BE EXECUTED IN A CHECK PHASE
// END - NODE JS WILL EXECUTE ANY CLOSE EVENT CALLBACKS
// THEN WE EXIT PROCESS.EXIT NODE JS PROGRAMM BUT ONLY IF THERE ARE NO REMAINING EVENT HANDLERS WHICH ARE REGISTERED. IT HAS A COUNTER REFS == 0 OF THESE REGISTERED AND IT REDUCES THAT COUNTER BY ONE FOR EVERY EVENT LISTENER THAT IT DOESNT NEED ANYMORE

// FILE SYSTEM(AND OTHERS) ARE SENT TO WORKER POOL - IT RESPONSIBLE FOR ALL THE HEAVY LIFTING. IT RUNS ON DIFFERENT THREADS. ITS TOTALLY DETACHED FROM EVENT LOOP/CODE/REQUEST
// THE ONLY DETACH IT WILL HAVE IS WHEN THE WORK IS DONE, E.X. WE READ A FUNCTION, IT WILL TRIGGER THE CALLBACK FOR THAT READ FILE OPERATION AND THIS WILL END UP IN THE EVENT LOOP(SINCE ITS RESPONSIBLE FOR THIS)
