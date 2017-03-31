/**
 * Created by Dave on 2017/3/26.
 */
var fs = require('fs');

var callback = function (err,data) {
    if(err){
        console.log(err);
    }else {
        console.log(data.toString());
        var buf = new Buffer('abcd','utf-8');
        console.log(buf);
        console.log(buf.toString());
    }
}

fs.readFile('sample.txt','utf-8',callback);