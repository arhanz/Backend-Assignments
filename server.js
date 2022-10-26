const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/javascript" });
  fs.readFile("./assignment1.js", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something Went Wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});
