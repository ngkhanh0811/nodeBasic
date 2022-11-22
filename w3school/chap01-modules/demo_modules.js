var http = require('http');
var dt = require("./myfirstmodules");

http.createServer(function(req, res){
    res.writeHead(200, 'Content-Type: text/html');
    res.write("The date and time currently: " + dt.myDateTime());
    res.end();
}).listen(8080);
console.log("Server is listening at http://localhost:8080");