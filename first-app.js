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

// npm - node package manager, allows to manage our projects and its dependencies, initialize the project with npm init

//npm-init - create a package.json file

// nodemon - automatically restart server when smth changes

// Global Features vs Core Modules vs Third-Party Modules
// The last lectures contained important concepts about available Node.js features and how to unlock them.

// You can basically differentiate between:

// Global features: Keywords like const or function but also some global objects like process

// Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

// Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

// Global features are always available, you don't need to import them into the files where you want to use them.

// Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

// Example:

// const fs = require('fs');

// You can now use the fs object exported by the "fs" module.

// Third-party Modules need to be installed (via npm install in the project folder) AND imported.

// Example (which you don't need to understand yet - we'll cover this later in the course):

// // In terminal/ command prompt
// npm install --save express-session
// // In code file (e.g. app.js)
// const sessions = require('express-session');

// Global & Local npm Packages
// In the last lecture, we added nodemon as a local dependency to our project.

// The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run npm install in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.

// The attached course code snippets also are shared in that way, hence you need to run npm install in the extracted packages to be able to run my code!

// I showed that nodemon app.js would not work in the terminal or command line because we don't use local dependencies there but global packages.

// You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): npm install -g nodemon would do the trick. Specifically the -g flag ensures that the package gets added as a global package which you now can use anywhere on your machine, directly from inside the terminal or command prompt.

// Types of errors: - syntax(typo in code, {}, [] etc), - runtime(the code breaks when it runs), logical(dont show error message, the app just dont work as it should)
