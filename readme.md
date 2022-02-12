# [Pattern Lab with Parcel](https://github.com/webtoast/patternlab-parcel)

A [Pattern Lab](https://patternlab.io) starter that uses [Parcel](https://parceljs.org).

## Test Drive

Nothing should need to be changed or configured to run Pattern Lab locally.

1. Clone down the repo
2. `npm install`
3. `npm start`

## Features

* Compiles your Sass into CSS
  * PostCSS optimizations
  * Optionally [namespace](#namespacing) your CSS
  * Optionally add defense css in case your project has to play nicely with existing CSS (coming soon)
* Compiles your Javascript
* Javascript unit testing
* Compiles SVG icons into an SVG symbol
* Enforces commit message guidelines with [commitlint](https://commitlint.js.org/#/)
* Build new releases of your project (coming soon)
* Track file size with each release (coming soon)
* Lint scss (coming soon)

## Configuring

The `./source` folder was originally generated from [starterkit-handlebars-vanilla](https://github.com/pattern-lab/starterkit-handlebars-vanilla). Some modificatiions have been made to the scss folder structure for this starter.

### Styles

Add your Sass partials in `./source/scss` directory and reference those partials in `./source/scss/style.scss`. How you organize this folder is completely up to you. When `style.scss` is compiled, the resulting css file is output to `./source/css` and then copied into the public folder when you run `npm start`.

The current folder structure is based on the starterkit with the exception of the components folder. Originally, these partials were stored with the relevant pattern. However, importing a glob pattern in `@import` statements isn't working. To get the starter up and running, I moved all the partials to `./source/scss/components` and updated `style.scss` with `@import` statements for each partial.

### Namespacing

For various reasons, you may want to namespace your CSS. You can do this with the namespace key in `package.json`. The default is set to an empty string value, but if you update this key with a class selector like `.project` then all your css selectors will be namespaced. For example:

In `package.json`
```json
"namespace": ".project"
```

Sass partial input
```css
.foo {
    display: block;
}

.bar {
    display: flex;
}
```

CSS output
```css
.project .foo {
    display: block;
}

.project .bar {
    display: flex;
}
```

### Javascript

If needing to add functionality to your components, there is `./source/js/global.js` that allows you to add your own javascript. You should be able to install dependencies or create your own modules that can be imported using ES6 module syntax. When running Pattern Lab, javascript gets compiled to `./source/js/build/global.js` and this is the file that is referenced and used in Pattern Lab.

If you build modules, you can use `./source/js/__tests__` to write unit tests. You can watch unit tests by running `npm test` or `npm start` and unit tests will run when there are updates. A simple module has been added (with tests) as an example.

### SVG Icons

This setup takes individual svg files and combines them using [svg-sprite](https://github.com/svg-sprite/svg-sprite) into a single file with svg symbols. If you would like to use SVG icons, you will want to store them in `./source/icons`. In this directory you want to keep the structure flat and just store the individual svg files without nesting folders. To build the svg symbols file out of your icons, you will need to run `npm run svg`. As additional files are added, you will need to run the npm script again.

The compiled svg is saved in `./source/images/svg` because the images folder is automatically copied into the public directory when pattern lab is run locally.

In order to compile a collection of SVGs, you must make sure that the icons key in `package.json` has been set to true, which is the default. If set to false, no svg file will be created regardless of existing svg files in the directory. Setting the option to false will not delete any svg files or an existing svg symbol file.

#### Steps to build an SVG symbol

1. Save individual svg icons in `./source/icons`
2. Run `npm run svg`
3. Implement the icon in a pattern
4. Run pattern lab locally

## Known Limitations

A syntax error in a sass partial will cause parcel to stop processing. The only way to resolve is to stop the process and `npm start` again.

Git GUIs may require configuration updates so that git hooks work.
