const http = require("http");
const port = 4000;

const httpServer = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write("Hello, world!");
    res.end();
  }
});

httpServer.listen(port);
console.log("Listening on port " + port);
