/**
 * file_server
 *
 * Created by Dave on 2017/3/26.
 */
var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve('.' || process.argv[2]);

console.log('Static root dir: ' + root);

var server = http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);
    
    fs.stat(filepath,function (err,stats) {
        if(!err && stats.isFile()){
            console.log('200' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 is not found!');
        }
    });
});

server.listen(8080);
console.log('server is running!');
