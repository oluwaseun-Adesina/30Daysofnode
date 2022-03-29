var http = require('https')
var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request, response) =>{
    response.writeHead(200, {"content-type": "text/plain"});
    console.log("server working")
    response.end('Server working success');
})
server.listen(port, host , (error) => {
    if(error){
        return console.log('Error occured : ', error);
    }
    console.log('server is listening on '+host+ ':'+port);
})