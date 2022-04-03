// Custom modules
const namespace = require('./build-scripts/namespace')();

const prefix = require('postcss-prefix-selector')({
    prefix: namespace,
    exclude: [
        namespace,
    ]
});

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('@hail2u/css-mqpacker')({ sort: true }),
        require('css-declaration-sorter')({ order: 'smacss' }),
        ...(process.env.NODE_ENV === 'production' ? [prefix] : []),
    ]
}
