/**
 * Created by Dave on 2017/3/26.
 */
var fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('sample3.txt');

rs.pipe(ws);
console.log(fs.readFileSync('sample3.txt','utf-8'));