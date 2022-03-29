var http = require('http');

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((req, res) =>{
    res.writeHead(200, {"content-type": "text/plain"});
    res.write("Hello World");
    res.end();
});

server.listen(port, port, (error) => {
    if(error){
        return console.log('Error occured: ', error);
    }
    console.log('Server is listening on ' + host+ ':' + port);
})