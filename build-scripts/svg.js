// Core Modules
const path = require('path');
const fs = require('fs');

// Public Modules
const SVGSpriter = require('svg-sprite');

// Code
const svgPaths = {
    source: path.join(__dirname, "../source/icons"),
    dest: path.join(__dirname, "../source/css")
};

const config = {
    mode: {
        stack: {
            dest: "source/images/svg",
            sprite: "icons.svg"
        }
    }
}

const spriter = new SVGSpriter(config);

fs.readdir(svgPaths.source, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach((file) => {
            filePath = `${svgPaths.source}/${file}`
            spriter.add(filePath, null, fs.readFileSync(filePath, 'utf-8'));
        });

        spriter.compile(function(error, result) {
            for (var mode in result) {
                for (var resource in result[mode]) {
                    fs.mkdirSync(path.dirname(result[mode][resource].path), { recursive: true });
                    fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
                }
            }
        });
    }
})
