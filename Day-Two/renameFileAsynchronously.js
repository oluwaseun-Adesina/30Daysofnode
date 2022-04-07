var fs = require('fs');

fs.rename('message.txt', 'new_message.txt', (err)=>{//The file is in the current working directory
    if (err)
        throw err;
    else
        console.log('File Renamed Successfully')
});
//
console.log("This method is Asynchronous")