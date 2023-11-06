const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("html");
    res.write("<head><title>Hello</title></head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name ='create-user'><button type='submit'>Username</button></form></body>"
    );
    res.write("</body>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("html");
    res.write("<head><title>Hello</title></head>");
    res.write(
      "<body><ul><li>User1</li<li>User2</li>><li>User3</li></ul></body>"
    );
    res.write("</body>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      console.log(user);
      fs.writeFileSync("username.txt", user);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = requestHandler;
