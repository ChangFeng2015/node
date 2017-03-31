/**
 * Created by Dave on 2017/3/26.
 */
var fs = require('fs');

try{
    var data = fs.readFileSync('sample.txt','utf-8');
    console.log(data);
}catch (err){
    console.log(err);
}