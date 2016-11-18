var path = require('path'),
    webpack = require('webpack');

module.exports = {
  // cache: true,
  // context: __dirname,
  context: __dirname + "/../../source/scripts",
  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}'
  },
  entry: {
    app: [
      // 'webpack/hot/dev-server',
      // 'webpack-hot-middleware/client',
      './app.js'
    ],
    critical: './critical.js',
    styleguide: './styleguide.js'
  },
    // styleguide: [
    //   // 'webpack/hot/dev-server',
    //   // 'webpack-hot-middleware/client',
    //   //  path.join(process.cwd(), './source/scripts/styleguide.js')
    // ],
    // critical: [
    //   // 'webpack/hot/dev-server',
    //   // 'webpack-hot-middleware/client',
    //    path.join(process.cwd(), './source/scripts/critical.js'),
    //   //  'jquery',
    //   //  'jquery-once',
    //   //  require.resolve('./source/scripts/libs/drupal-and-jquery.js')
    //     // require.resolve('./node_modules/drupal/misc/drupal.js')
    //   //  require.resolve('jquery'),
    //   //  require.resolve('jquery-once'),
    // ]
  output: {
    path: path.resolve('public'),
    // path: __dirname + "/public/scripts",
    publicPath: '/scripts/',
    filename: '[name].built.js',
    chunkFilename: '[chunkhash].bundle.js'
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: "vendor",
    //     chunks: ["app", "critical"]
    // }),
    new webpack.optimize.UglifyJsPlugin({
     mangle: false,
     compress: {
       properties: true,
       dead_code: true,
       unused: true,
       warnings: false
     }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.ProvidePlugin({
  //      $: 'jquery',
  //      jQuery: 'jquery',
  //      'window.jQuery': 'jquery'
  //  })
  ],
  // resolve: {
  //   extensions: ['', '.js', '.json']
  //   },
  // debug: $.env.development(),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(bower_components|critical)/,
        // include: [
        //   path.join(process.cwd(), './source/scripts/app.js'),
        //   path.join(process.cwd(), './source/scripts/styleguide.js')
        //   // path.resolve(__dirname, "app/test")
        // ],
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    // {
    //   test: /bootstrap\/js\/src/,
    //   loader: 'babel',
    //   query: {
    //     presets: ['es2015'],
    //     plugins: ['transform-runtime']
    //   }
    // }
    // { 
    //   test: require.resolve('jquery/src/jquery'), 
    //   loader: "expose?$!expose?jQuery"
    // },
    // { 
    //   test: require.resolve('jquery-once'), 
    //   loader: "imports?jQuery=jquery"
    // },
    // { 
    //   test: require.resolve('./node_modules/drupal/misc/drupal.js'), 
    //   loader: "script"
    // }
  ]}
};

