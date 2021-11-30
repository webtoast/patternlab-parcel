// Core modules
const fs = require('fs');
const path = require('path');

// Public modules
const prettify = require('postcss-prettify');

// Code
const version = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version;
const versionStr = '/*! v' + version + '*/';
const buildCacheDir = '.build-cache';

try {
    const css = fs.readFileSync(`${buildCacheDir}/scss/style.css`, 'utf-8');
    const js = fs.readFileSync(`${buildCacheDir}/js/global.js`, 'utf-8');
    const cssDist = versionStr + css;
    const jsDist = versionStr + js;

    fs.mkdirSync(path.join(__dirname, '../dist'));
    fs.writeFileSync('./dist/global.min.css', cssDist);
    fs.writeFile('./dist/global.css', prettify.process(cssDist).css, (err) => {
        return err;
    });
    fs.writeFileSync('./dist/global.js', jsDist);
} catch(error) {
    console.log('error', error);
}
