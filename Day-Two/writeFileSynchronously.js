var fs = require('fs')

var content = " We are writing this file synchronously using node.js "
fs.writeFileSync('message.txt', content)