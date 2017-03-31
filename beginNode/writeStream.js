/**
 * Created by Dave on 2017/3/26.
 */
var fs = require('fs');

var ws1 = fs.createWriteStream('sample2.txt','utf-8');
ws1.write('use stream to write into file...\n');
ws1.write('END');
ws1.end();

console.log(fs.readFileSync('sample2.txt','utf-8'));

var ws2 = fs.createWriteStream('sample.txt');
ws2.write(new Buffer('使用stream写入二进制数据...\n','utf-8'));
ws2.write(new Buffer('END','utf-8'));
ws2.end();
console.log(fs.readFileSync('sample.txt','utf-8'));