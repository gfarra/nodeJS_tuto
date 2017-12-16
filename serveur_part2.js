var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200);
  res.end("Hello tout le monde!");
});

server.on('close', function()
{
  console.log("Bye!");

})

server.listen(8000);

server.close();
