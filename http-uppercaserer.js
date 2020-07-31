const http = require('http');
const map = require('through2-map');

const portNumber = process.argv[2];

const server = http.createServer(function(req,res){
    if(req.method === 'POST'){
        req.pipe(map(function (data){
            return data.toString().toUpperCase();
        }))
        .pipe(res);
    }
});

server.listen(portNumber);
