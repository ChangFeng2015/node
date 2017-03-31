/**
 * Created by Dave on 2017/3/26.
 */
const crypto = require('crypto');
// const hash = crypto.createHash('sha256');
// hash.update('hello,world!');
// hash.update('hello,nodejs!');
// console.log(hash.digest('hex'));
const hmac = crypto.createHmac('sha256','secret-key');
hmac.update('hello,world!');
hmac.update('hello,nodejs');
console.log(hmac.digest('hex'))
