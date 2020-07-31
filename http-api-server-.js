const url = require('url');
const http = require('http');

const portNumber = process.argv[2];

http.createServer(function (req, res) {
    var urlObject = url.parse(req.url, true),
    pathname = urlObject.pathname,
    startTime = urlObject.query.iso,
    result;

    if (pathname === '/api/unixtime') {
        result = getUnixTimeStamp(startTime);
        }
    else if (pathname === '/api/parsetime') {
        result = getTimeObj(startTime);
    }

    if (result) {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(result));
        }
    else {
        res.writeHead(404);
        res.end();
    }
    })
    .listen(portNumber)


    function getUnixTimeStamp(startTime) {
        return {
        unixtime: getTimeStamp(startTime)
        };
    }

    function getTimeStamp(startTime) {
        return Date.parse(startTime);
    }

    function getTimeObj(startTime) {
        var date = new Date(getTimeStamp(startTime));
                    
        return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
        };
    }

