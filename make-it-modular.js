const mymodule = require('./mymodule');

const directory = process.argv[2];
const extention = process.argv[3];

var callback = function(err, filtred){
    if(err){
        console.log(err);
        console.log('err');
    }
    for(var index in filtred){
        console.log(filtred[index]);
    }
};

mymodule(directory,extention,callback);