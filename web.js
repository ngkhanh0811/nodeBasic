var path = require('path'),
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    mime = require('mime');

var server = http.createServer();

function genericSend(code, message, response) {
    response.writeHead(code, {"Content-Type":"text/plain"});
    response.end(message);
};

server.on('request', function(request, response){
    //possible response codes
    //404
    //500
    //200 OK

    var urlParams = url.parse(request.url),
    //pathname: /index.html ==> index.html
        filename = path.join('.',urlParams.pathname);
    
    path.exists(filename, function(exists){
        if(!exists)
        //404
        return genericSend(404, 'not found', response);

        fs.readFile(filename, 'binary', function(err, file){
            if(err)
            //500
            return genericSend(500, 'internal server error', response);

            var type = mime.lookup(filename);
            response.writeHead(200, {'Content-Type':type});
            response.end();
        });
    });
});