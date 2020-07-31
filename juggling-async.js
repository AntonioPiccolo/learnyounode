const http = require('http');
const bl = require('bl');

function myPrint(url){
    http.get(url, function(response){
        response.pipe(bl(function(err,data){
            if(err){
                console.log(err);
            }
            data = data.toString();
            console.log(data);
        }));

    });
}

for(var i=0; i<3; i++){
    myPrint(process.argv[i+2]);
}

