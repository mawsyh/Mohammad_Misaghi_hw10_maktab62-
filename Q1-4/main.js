const fs = require("fs");
const http = require("http");
const port = 4000;
let homePage;
let productsPage;
let rulesPage;
let aboutUsPage;
let contactUsPage;
try {
  homePage = fs.readFileSync("./src/index.html");
  productsPage = fs.readFileSync("./src/products.html");
  rulesPage = fs.readFileSync("./src/rules.html");
  aboutUsPage = fs.readFileSync("./src/about.html");
  contactUsPage = fs.readFileSync("./src/contact.html");
} catch (e) {
  console.log(e);
}

const httpServer = http.createServer((req, res) => {
  pageLoader(req.url, res);
});

httpServer.listen(port);
console.log("Listening on port " + port);

// function which page to load
function pageLoader(page, request) {
  switch (page) {
    case "/":
      request.write(homePage);
      request.end();
      break;
    case "/products":
      request.write(productsPage);
      request.end();
      break;
    case "/rules":
      request.write(rulesPage);
      request.end();
      break;
    case "/about":
      request.write(aboutUsPage);
      request.end();
      break;
    case "/contact":
      request.write(contactUsPage);
      request.end();
      break;
    default:
      request.write("Sry, Page Not Found!");
      request.end();
  }
}
