// Core modules
const fs = require('fs');

function namespace() {
    let namespace = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).namespace;
    if (namespace === undefined || namespace === '') {
        return namespace = '';
    } else {
        return namespace;
    }
};

module.exports = namespace;
