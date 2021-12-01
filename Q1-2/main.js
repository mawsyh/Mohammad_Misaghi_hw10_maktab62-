const http = require("http");
const port = 4000;
const testJsonFile = {
  name: "Mina",
  familyName: "Alipoor",
  age: "52",
  job: "Nurse",
};

const httpServer = http.createServer((req, res) => {
  if (req.url === "/api/json" && req.method === "GET") {
    res.write(JSON.stringify(testJsonFile));
    res.end();
  }
});

httpServer.listen(port);
console.log("Listening on port " + port);
