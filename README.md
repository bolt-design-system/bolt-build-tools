[![PegaKit](https://img.shields.io/badge/PK-PegaKit-0092f8.svg)](http://pegakit.io/)
[![dependencies Status](https://david-dm.org/pega-digital/pegakit-build-tools/status.svg)](https://david-dm.org/pega-digital/pegakit-build-tools)

# PegaKit Build Tools
A collection of helpful front-end gulp tasks and build processes. Originally inspired by the awesome [fourkitchens/fourk-gulp](https://github.com/fourkitchens/emulsify-gulp) project.

## How to use it
* `npm i --save-dev pega-digital/pegakit-build-tools`
  * This will install the `master` branch. Please add `#tag/branchname` at the end if you need a certain branch/tag.
* Add the following to your project's gulp file (ex. gulpfile.babel.js) in the root of your project. This will pass gulp and any local configuration overrides along to the newly installed build tasks.

```
const gulp = require('gulp-help')(require('gulp'));
const _ = require('lodash');
let localConfig = {},
    webpackConfig = {};

// Attempt to load an optional local configuration file.
try {
  localConfig = require('./local.gulp-config');
}
catch (e) {}

// Attempt to load an optional local configuration file.
try {
  webpackConfig = require('./local.webpack.config.js');
}
catch (e) {}

// Load all gulp tasks.
require('pegakit-build-tools')(gulp, localConfig, webpackConfig);
```

* You'll now be able to execute any task in this repo. Run `gulp help` for more info on these tasks.


## Roadmap
* **@TODO**: Add in ESLint default config + JS validation options
* **@TODO**: Lint existing default configs + Gulp tasks
* **@TODO**: Merge Webpack config with local Gulp config options.
* **@TODO**: Refactor gulp tasks to actually USE the local config options. The Webpack configuration / overrides work however everything else is still hard-coded in the individual build tasks themselves.
* **@TODO**: Document an example of adding additional build tasks to the default set of pre-defined tasks.
* **@TODO**: Work through ways of auto-generating the initial gulpfile + config. Possibly via Yeoman...
* **@TODO**: Document Webpack config + available options
* **@TODO**: Document high-level summary of currently available gulp tasks (ex. what you get by running `gulp help`)

<!-- In Progress -->
<!--* The gulp-config.js file is still used and most likely would be committed to the project repo. The local.gulp-config could be used to override config for your machine and should be gitignored.-->