const http = require("http");
const fs = require("fs");

const port = 3000;
const hostName = "127.0.0.1";

// creating server
const myServer = http.createServer((req, res) => {
  // get requested url inputed by user
  console.log(req.url);

  const handleReadFile = (statusCode, filePath) => {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(statusCode, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./pages/home.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./pages/about.html");
  } else {
    handleReadFile(404, "./pages/err.html");
  }
});

// adding port to the server

myServer.listen(port, hostName, () => {
  console.log(`Server is running successfully at ${hostName}:${port} `);
});
