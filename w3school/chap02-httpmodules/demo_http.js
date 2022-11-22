var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(req.url);
    // res.end();
    var q = url.parse(req.url, true).query;
    var txt = q.month + " " + q.year;
    res.end(txt);
}).listen(8080);
console.log("Server is listening at http://localhost:8080");