/**
 * Created by Dave on 2017/3/26.
 */
var url = require('url');
var path = require('path');

console.log(url.parse('http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345015296018cac40c198b543fead5c549865b9bd4a000'));

var workDir = path.resolve('.');
var filePath = path.join(workDir,'pub','index.html');
console.log(filePath);

