var fs = require('fs');


fs.renameSync('message.txt', 'new.message.txt');
console.log('File renamed successfully');

//
console.log('This method is Synchronous')