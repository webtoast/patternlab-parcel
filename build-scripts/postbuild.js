// Core modules
const fs = require('fs');
const path = require('path');

// Public modules
const cssbeautify = require('cssbeautify');

// Code
const version = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version;
const versionStr = '/*! v' + version + '*/';
const versionStrHtml = '<!-- v' + version + '-->';
const buildCacheDir = '.build-cache';

try {
    const css = fs.readFileSync(`${buildCacheDir}/scss/style.css`, 'utf-8');
    const js = fs.readFileSync(`${buildCacheDir}/js/global.js`, 'utf-8');
    const svg = fs.readFileSync(`${buildCacheDir}/svg/icons.svg`, 'utf-8');
    const cssDist = versionStr + css;
    const jsDist = versionStr + js;
    const svgDist = versionStrHtml + svg;

    fs.mkdirSync(path.join(__dirname, '../dist'));
    fs.writeFileSync('./dist/global.min.css', cssDist);
    fs.writeFile('./dist/global.css', cssbeautify(cssDist), (err) => {
        return err;
    });
    fs.writeFileSync('./dist/global.js', jsDist);
    fs.writeFileSync('./dist/icons.svg', svgDist);
} catch(error) {
    console.log('error', error);
}
