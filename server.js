var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("Node server!!");
}).listen(3000, '127.0.0.1');
