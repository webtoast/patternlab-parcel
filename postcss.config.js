const prefix = require('postcss-prefix-selector')({
    prefix: '.global-experience-language',
    exclude: [
        '.global-experience-language',
    ]
});

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker')({ sort: true }),
        require('css-declaration-sorter')({ order: 'smacss' }),
        ...(process.env.NODE_ENV === 'production' ? [prefix] : []),
    ]
}
