var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hello word')
}).listen(8887)
console.log("running at 8887")
