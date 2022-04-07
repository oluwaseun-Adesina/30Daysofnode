var fs = require('fs')
var filename = 'message.txt'; 
var content = fs.readFileSync(filename);
console.log('Content : ' + content)