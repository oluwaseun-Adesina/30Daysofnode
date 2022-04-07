var fs = require('fs');

var content = "We are appending this file synchrounously using node.js";
fs.appendFileSync('message.txt', content);
console.log("File Appended Successfully")