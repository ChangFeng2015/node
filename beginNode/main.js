/**
 * Created by Dave on 2017/2/23.
 */
var greet = require('./hello');

var s = 'Michael';

greet(s);

if(typeof (window) === 'undefined'){
    console.log('node.js');
}else{
    console.log('brower');
}