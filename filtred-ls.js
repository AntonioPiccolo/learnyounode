const fs = require('fs');

fs.readdir(process.argv[2], function(err,data){
    
    if(!err){
        for(var i = 0; i < data.length; i++){

            if(data[i].includes('.')){

                var ext = data[i].split('.').pop();
                
                if(ext === process.argv[3]){
                    console.log(data[i]);
                }

            }
        } 
    }
});