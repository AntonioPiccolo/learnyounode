const fs = require('fs');   // Modulo per utilizzare operazioni file system

myFirstIO(process.argv[2]);

function myFirstIO(fileText){

    var link = fs.readFileSync(fileText);
    var string = link.toString();
    
    var counter = 0;

    var array_di_stringhe = string;

    for(var i = 0; i < array_di_stringhe.length; i++){
        if(array_di_stringhe[i] === '\n' ){
            counter++;
        }
    }

    console.log(counter);

}