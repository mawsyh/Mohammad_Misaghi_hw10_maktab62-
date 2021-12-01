const fs = require("fs");
const http = require("http");
const port = 4000;
let htmlPage;
try {
  htmlPage = fs.readFileSync("./index.html", "utf-8");
} catch (e) {
  console.log(e);
}

const httpServer = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write(htmlPage);
    res.end();
  }
});

httpServer.listen(port);
console.log("Listening on port " + port);
