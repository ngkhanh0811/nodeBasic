var http = require("http");
var url = require("url");


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var d = new Date().getFullYear();
    var q = url.parse(req.url, true).query;
    var age = d-q.year;
    var content = q.name + " is " + age + " years old ";

    res.end(content);
}).listen(8081)

console.log('Server is running at http://127.0.0.1:8081');