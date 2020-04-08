const handlers = require("./handlers");

function router(request, response) {
  const { url, method } = request;
  if (url === "/" && method === "GET") {
    handlers.homeHandler(request, response);
  } else if (url === "/" && method === "POST") {
    handlers.homeHandler(request, response);
  } else if (url.includes("public")) {
    handlers.publicHandler(request, response);
  } else if (url === "/add" && method == "GET") {
    handlers.addPageHandler(request, response);
  } else if (url === "/create-tool" && method == "POST") {
    handlers.addToolHandler(request, response);
  } else if ( url == "./newUserPage"  && method == "GET") {
    handlers.newUserPage(request, response)
  } else if (url == "./newUserPage" && method == "POST" ) {
    handlers.addUser(request, response)
  } else if ( url == "loginPage" && method == "GET") {
    handlers.loginPage(request, response)
  } else if ( url == "loginPage" && method == "POST" ) {
    handlers.login(request, response)
  } else {
    handlers.missingHandler(request, response);
  }
}

module.exports = router;
