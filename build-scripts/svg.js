// Core Modules
const path = require('path');
const fs = require('fs');

// Public Modules
const SVGSpriter = require('svg-sprite');

// Code
if (process.env.npm_package_icons === 'false') {
    console.log('SVG Icon compliation has not been configured.')
    return;
}

const env = process.env.NODE_ENV;
const svgPaths = {
    source: path.join(__dirname, "../source/icons"),
    dest: path.join(__dirname, "../source/css")
};

const config = {
    mode: {
        stack: {
            dest: env === 'production' ? ".build-cache/svg" : "source/images/svg",
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
