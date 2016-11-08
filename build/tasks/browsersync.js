'use strict';

const autoClose = require('browser-sync-close-hook');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

var webpack = require('webpack');
var webpackConfig = require('./../../webpack.config.js');
var bundler = webpack(webpackConfig);

var bs = require("browser-sync").create('BrowserSync Server');



module.exports = function (gulp, config, $) {
  
  gulp.task('browsersync', 'Local web server. Live reloads when CSS, HTML, or JavaScript changes.', function(){
  
    bs.use({
      plugin() {},
      hooks: {
        'client:js': '(function (bs) {bs.socket.on("disconnect", function (client) { if (document.visibilityState !== "visible"){window.close()}});})(___browserSync___);'
        // 'client:js': autoClose // <-- important part 
      },
    });
    
    bs.init({
      ui: false,
      notify: false,
      open: true,
      ghostMode: {
        clicks: false,
        forms: false,
        scroll: false
      },
      server: {
        baseDir: 'public',
        middleware: [
          // webpackDevMiddleware(bundler, {
          //   publicPath: webpackConfig.output.publicPath,
          //   stats: { colors: true }
          // }),
          // webpackHotMiddleware(bundler)
        ]
      },
    });
    
  });
};