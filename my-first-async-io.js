const fs = require('fs');   // Modulo per utilizzare operazioni file system

fs.readFile(process.argv[2], function(err,data){
    if(!err){
        console.log(data.toString().split('\n').length-1);
    }
});