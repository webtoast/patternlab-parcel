// Core modules
const fs = require('fs');

console.log('Files to process for release');
fs.readdir('.build-cache', (err, folders) => {
    folders.forEach((folder) => {
        fs.readdir('.build-cache/' + folder, (err, files) => {
            console.log(files);
        })
    })
});
