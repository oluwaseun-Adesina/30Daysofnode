var fs = require('fs');
new_data = "This data will be appended at the end of the file.";
fs.appendFile('message.txt', new_data, (err) =>{
    if (err)
        throw err;
    else
        console.log('The new_content was appended successfully');
})