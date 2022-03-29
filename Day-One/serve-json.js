var http = require('https')
var fs = require('fs');

console.log('Server will listen at : 127.0.0.1:3000 ');
http.createServer(function (req, res) {
    //change the MIME type to 'application/json'
    res.writeHead(200, {'Content-Type':'application/json'});
    //create a json
    let json_res={
        status:200,
        message:'success',
        result:['Sunday','Monday', 'Tuesday', 'Wednesday'],
        code: 2000
    }
    console.log('Server running');
    res.end(JSON.stringify(json_res));
}).listen(3000)