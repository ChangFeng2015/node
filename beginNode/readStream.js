/**
 * Created by Dave on 2017/3/26.
 */
var fs = require('fs');

var rs = fs.createReadStream('sample.txt','utf-8');

rs.on('data',function (chunk) {
    console.log('Data');
    console.log(chunk);
});

rs.on('end',function () {
    console.log('end');
});

rs.on('error',function (err) {
    console.log('ERROR:' + err.toString());
});