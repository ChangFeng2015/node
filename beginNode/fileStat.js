/**
 * Created by Dave on 2017/3/26.
 */
var fs = require('fs');

var callBack = function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(data.isFile());
        console.log(data.isDirectory());

        if(data.isFile()){
            console.log(data.size);
            console.log(data.birthtime);
            console.log(data.mtime);
        }
    }
}

fs.stat('sample.txt',callBack);