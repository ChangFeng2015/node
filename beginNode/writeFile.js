/**
 * Created by Dave on 2017/3/26.
 */
var fs = require('fs');

var data = 'hello,mybatis.js!';

var callBack = function (err) {
    if(err){
        console.log(err);
    }else {
        console.log('OK!');
    }
}

fs.writeFile('sample.txt',data,callBack);

fs.readFile('sample.txt','utf-8',function (err,data) {
    if(err){
        console.log('read error' + err);
    }else {
        console.log(data.toString());
    }
})