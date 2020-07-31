const fs = require('fs');
const path = require('path');

function filterFiles(list,ext){
    return list.filter(function(file){
        return path.extname(file) == '.' + ext;
    });
};

module.exports = function (dir,ext,callback){

    fs.readdir(dir, function(err,list){
        if(err){
            return callback(err);
        }
        var filtred = filterFiles(list,ext);
        return callback(null,filtred);
    });
}