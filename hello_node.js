var http = require ('http')
http.createServer(function(req, res){
  res.writeHead(200,{'Content-type':'text/plain'});
  res.end('Hello Everyone this is a test webpage!\n');
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1::8124');
