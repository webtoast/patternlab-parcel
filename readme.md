# [Pattern Lab with Parcel](https://github.com/webtoast/patternlab-parcel)

A [Pattern Lab](https://patternlab.io) starter that uses [Parcel](https://parceljs.org).

## Test Drive

Nothing should need to be changed or configured to run Pattern Lab locally.

1. Clone down the repo
2. `npm install`
3. `npm run dev`

## Features

* Compiles Sass into CSS
  * PostCSS optimizations
  * Optionally [namespace](#namespacing) your CSS
* Compiles Javascript
* Javascript unit testing
* Compiles [SVG icons](#svg-icons) into an SVG symbol
* Enforces commit message guidelines with [commitlint](https://commitlint.js.org/#/)
* Build a new [release](#release-builds) of your project

## Configuring

This Pattern Lab starter is a blank project. Running it will produce a website that can be previewed on localhost, but you will not see any patterns until you create some.

Under the `./source` folder, are all the folders that you would be working with to create your patterns, save images, icons, scss and other authored files.

If you are brand new to Pattern Lab the best place to start will be the [docs](https://patternlab.io).

### Patterns

The default folders have been kept in `./source/_patterns` just to serve as a starting point for organizing your patterns. This starter uses handlebars for building pattern files. If you want to see how handlebars are used in pattern development, the [patterns in the starterkit-handlebars-vanilla](https://github.com/pattern-lab/starterkit-handlebars-vanilla/tree/master/dist/_patterns) repo has some good examples.

### Styles

Add your Sass partials in `./source/scss` directory and reference those partials in `./source/scss/style.scss`. How you organize this folder is completely up to you. When `style.scss` is compiled, the resulting css file is output to `./source/css` and then copied into the public folder when you run `npm start`.

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

**It's important to note that the namespace is only added when you build a release of your project. The namespace is not included when you are running Pattern Lab locally during development.**

### Javascript

If needing to add functionality to your components, there is `./source/js/global.js` that allows you to add your own javascript. You should be able to install dependencies or create your own modules that can be imported using ES6 module syntax. When running Pattern Lab, javascript gets compiled to `./source/js/build/global.js` and this is the file that is referenced and used in Pattern Lab.

If you build modules, you can use `./source/js/__tests__` to write unit tests. You can watch unit tests by running `npm test` or `npm start` and unit tests will run when there are updates. A simple module has been added (with tests) as an example.

### SVG Icons

This setup takes individual svg files and combines them using [svg-sprite](https://github.com/svg-sprite/svg-sprite) into a single file with svg symbols. If you would like to use SVG icons, you will want to store them in `./source/icons`. In this directory you want to keep the structure flat and just store the individual svg files without nesting folders. To build the svg symbols file,
 out of your icons, you will need to run `npm run svg`. As additional files are added, you will need to run the npm script again.

The compiled svg is saved in `./source/images/svg` because the images folder is automatically copied into the public directory when pattern lab is run locally.

In order to compile a collection of SVGs, you must make sure that the icons key in `package.json` has been set to true, which is the default. If set to false, no svg file will be created regardless of existing svg files in the directory. Setting the option to false will not delete any svg files or an existing svg symbol file.

#### Steps to build an SVG symbol

1. Save individual svg icons in `./source/icons`
2. Run `npm run svg`
3. Implement the icon in a pattern
4. Run pattern lab locally

## Release Builds

When it is time to build a new release, you can use `npm run release`. This script takes a single parameter that tells the script what version to bump to.

`npm run release --bump=[major | minor | patch | X.X.X]`

Currently, built files are saved to `./dist` which is not tracked by default at this time.

## Known Limitations

A syntax error in a sass partial will cause parcel to stop processing. The only way to resolve is to stop the process and `npm start` again.

Git GUIs may require configuration updates so that git hooks work.
