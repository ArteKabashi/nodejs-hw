/**
Kerkesa
Krijoni nje server qe varesisht se cfare shkruaj ne url te me shfaqen keto mesazhe:

* localhost:8000/ te shfaqet nje h1 qe thote this is the home page
* localhost:8000/about te shfaqet nje h1 qe thote this is  the about page
* localhost:8000/career te shfaqet nje h1 qe thote this is  the career page
* localhost:8000/contact te shfaqet nje h1 qe thote this is  the contact page

Bonus
Nese useri shkruan dicka tjeter ne url perveq ketyre qe i cekem larte, shfaqni nje h1 qe thote Error 404.

Instruksionet
Bazohuni ne ushtrimin e fundit qe beme ne klase.

Verejtje
Mund te zgjedhni ndonje port tjeter perveq atij 8000, por pastaj duhet edhe ne browser te shkruani localhost:"numri i portit qe keni zgjedhur".
 */

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.writeHead(200, { "Content-Type": "text/html" });

  if (url === "/") {
    pageContent("This is the home page", res);
  } else if (url === "/about") {
    pageContent("This is the about page", res);
  } else if (url === "/career") {
    pageContent("This is the career page", res);
  } else if (url === "/contact") {
    pageContent("This is the contact page", res);
  } else {
    pageContent("Error 404", res);
  }
  return res.end();
});
server.listen(7000);

function pageContent(message, res) {
  res.write("<html>");
  res.write("<head><title>Serveri</title></head>");
  res.write(`<body><h1>${message}</h1></body>`);
  res.write("</html>");
}
