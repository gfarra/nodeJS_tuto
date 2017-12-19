var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  fs.readFile('./index.html', 'utf-8', function(error, content) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
  });
});

// Load Socket.io
var io = require('socket.io').listen(server);

// When client want to connect, we write in the console
io.sockets.on('Conexion', function(socket) {
  console.log('One client is connected!');
});

server.listen(8080);
