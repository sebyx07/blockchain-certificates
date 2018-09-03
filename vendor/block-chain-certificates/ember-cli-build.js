'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const sass = require('sass');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      implementation: sass
    }
  });

  const themeDirectory = 'vendor/theme/';
  const themeFiles = [
    'assets/css/simple-line-icons.css',
    'assets/css/cryptocoins.css',
    'assets/css/style-inline.css',
    'assets/css/media-screens.css',
    'assets/css/owl.carousel.css',
    'assets/css/animate.css',
    'assets/css/responsive.css',
    'assets/css/style.css',
    'assets/css/skin-colors/skin0.css',
    'assets/plugins/font-awesome/css/font-awesome.min.css',
    'assets/plugins/select2/select2.min.css',
    'assets/plugins/amcharts/export.css',
    'assets/js/jquery.js',
    'assets/js/bitwallet-plugins.js',
    'assets/js/bitwallet-custom.js',
    'assets/js/jquery.mb.YTPlayer.min.js',
    'assets/plugins/webticker/jquery.webticker.min.js',
    'assets/js/jquery.mb.YTPlayer.min.js',
    'assets/plugins/webticker/jquery.webticker.min.js',
    'assets/plugins/flipclock/flipclock.js',
    'assets/plugins/select2/select2.min.js',
    'assets/plugins/bootstrap/bootstrap.min.js',
    'assets/plugins/magnific-popup/jquery.magnific-popup.js',
    'assets/plugins/amcharts/amcharts.js',
    'assets/plugins/amcharts/pie.js',
    'assets/plugins/amcharts/animate.min.js',
    'assets/plugins/amcharts/depthChart/export.min.js',
    'assets/plugins/amcharts/depthChart/light.js'
  ];

  themeFiles.forEach((file) => {
    file = themeDirectory + file;
    app.import(file);
  });

  // blockstack
  app.import('node_modules/blockstack/dist/blockstack.js');


  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
