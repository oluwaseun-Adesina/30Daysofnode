var fs = require('fs');
var content = "This is the content in the file";
fs.writeFile('message.text', content, (err)=>{
    if (err)
        throw err;
    console.log('It\'s saved!');
});