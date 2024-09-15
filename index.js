const url = require("url");
const http = require("http");
const PORT = 8000;

function urlHandler(req, res) {
  const parsed_url = url.parse(req.url, true);
  const pathname = parsed_url.pathname;
  const query = parsed_url.query;

  if (pathname == "/favicon.ico") {
    return;
  }

  console.log("pathname ", pathname);
  console.log("query ", query);

  switch (pathname) {
    case "/":
      res.end("Home");
      break;
    case "/about":
      res.end("About");
      break;
    case "/contact":
      res.end("Contact");
      break;
    default:
      res.end("404!");
      break;
  }
}

const server = http.createServer((req, res) => {
  urlHandler(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  console.log("==================================================");
});
