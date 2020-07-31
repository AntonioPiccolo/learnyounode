const http = require('http');
const bl = require('bl');

const url = process.argv[2].toString();

http.get(url, function(response){
    response.pipe(bl(function(err,data){
        if(err){
            console.error(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});