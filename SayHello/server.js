const { appendFile } = require("fs");
var http = require("http");
var url = require("url");


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    var q = url.parse(req.url, true).query;
    var content = "Hello" + " " + q.title + " " + q.name
    res.end(content);
}).listen(8081);

console.log('Server is running at http://127.0.0.1:8081');

