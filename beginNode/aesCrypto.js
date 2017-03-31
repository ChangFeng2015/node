/**
 * Created by Dave on 2017/3/26.
 */
const crypto = require('crypto');

function aesEncrypt(data,key) {
    const cipher = crypto.createCipher('aes192',key);
    var crypted = cipher.update(data,'utf-8','hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted,key) {
    const  decipher = crypto.createDecipher('aes192',key);
    var decrypted = decipher.update(encrypted,'hex','utf-8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'hello,this is a secret message!';
var key = "password!";
var encrypted = aesEncrypt(data,key);
var decrypted = aesDecrypt(encrypted,key);

console.log('plain text: ' + data);
console.log('encrypted text: ' + encrypted);
console.log('decrypted text: ' + decrypted);