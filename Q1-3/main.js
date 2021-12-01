const http = require("http");
const port = 4000;

const httpServer = http.createServer((req, res) => {
  if (req.url === "/address/return" && req.method === "GET") {
    console.log(req.url);
    res.end();
  }
});

httpServer.listen(port);
console.log("Listening on port " + port);
