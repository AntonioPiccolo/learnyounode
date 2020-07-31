const fs = require('fs');
const http = require('http');

const portNumber = process.argv[2];
const dirFile = process.argv[3];

const server = http.createServer(function(req,res){
        res.writeHead(200, {'content-type':'text/plain'});
        fs.createReadStream(dirFile).pipe(res);
});

server.listen(portNumber);