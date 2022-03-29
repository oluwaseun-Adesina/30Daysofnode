var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    console.log("Port Number : 3000");
    // Change the MIME type from 'text/plain' to 'text/html'
    res.writeHead(200, {'content-type': 'text/html'});
    //reading the connecnt file 
    fs.readFile('index.html', (err, data) => {
        //checking for errorrs
        if (err)
            throw err;
        console.log("Operation Success");
        //sending the response
        res.end(data);
    });
}).listen(3000)