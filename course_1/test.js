var http = require("http");
var fs = require("fs");// fs = file system

var request = require("request");

http.createServer(function (req, res){
    var content = '';
    /*fs.readFile("./demo.html",function(err, file){
    content += file;
    res.end(content);
   
    })//file read is killing time
    */
    
    request('http://www.csie.isu.edu.tw/upload/80203/index.html',function (error, response, body){
        content += body;
        res.end(content);
    })
    
}).listen(3000);