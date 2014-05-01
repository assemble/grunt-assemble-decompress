/**
 * assemble-contrib-decompress
 * Assemble plugin for decompressing .zip files
 *
 * Copyright (c) 2014 Jon Schlinkert
 * MIT License
 */

'use strict';


// Node.js
var path = require('path');
var fs = require('fs');

// node_modules
var async = require('async');
var chalk = require('chalk');
var decompress = require('decompress');
var _ = require('lodash');


// Console colors
var bold     = chalk.bold;
var success  = chalk.green;
var error    = chalk.red;
var info     = chalk.cyan;


// Run this plugin before the 'configuration' stage.
var config = {
  stage: 'options:pre:configuration'
};

var plugin = function(params, callback) {

  var grunt   = params.grunt;
  var options = params.assemble.options;
  options.decompress = options.decompress || {};

  if(grunt.config.get('plugin.decompress.done') === undefined) {

    grunt.log.subhead('Running:'.bold, '"assemble-decompress"');
    grunt.log.writeln('Stage:  '.bold, '"options:pre:configuration"\n');

    // Plugin defaults.
    // Add "decompress" object to assemble options
    var opts = _.extend({decompress: {files: ['tmp/helpers.zip']}}, options, config);

    opts.decompress.dest = opts.decompress.dest || 'tmp/helpers/';
    opts.decompress.ext  = opts.decompress.ext  || '.zip';

    async.forEach(opts.decompress.files, function (file, next) {

      var filename = path.basename(file);
      var zipfile = fs.createReadStream(file);

      var unzipped = decompress({
        path: opts.decompress.dest,
        ext: opts.decompress.ext
      });

      var error = false;
      // Unzip the files.
      zipfile.pipe(unzipped)
      // Log a success message.
      .on('close', function () {
        grunt.log.writeln(success('>> Decompressing:'), filename);
        if (!error) {
          next();
        }
      })
      .on('error', function (e) {
        error = true;
        grunt.log.writeln('Error decompressing: ' + filename);
        grunt.log.writeln(e);
        next(e);
      });

    }, function (err) {
      grunt.config.set('plugin.decompress.done', true);
      callback();
    });

  } else {
    callback();
  }
};


// export the plugin and options.
plugin.options = config;
module.exports = plugin;
