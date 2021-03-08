var http = require('http');

http.createServer(function (req, res) {
  res.write("<h1>Hejka Co U Ciebie!</h1>");
  res.end();
}).listen(8080);