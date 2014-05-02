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



module.exports = function (assemble) {
  var grunt = assemble.config.grunt;
  var options = assemble.config;
  options.decompress = options.decompress || {};

  var middleware = function(params, next) {

    if(grunt.config.get('plugin.decompress.done') === undefined) {

      // Plugin defaults.
      // Add "decompress" object to assemble options
      var opts = _.extend({decompress: {files: ['tmp/helpers.zip']}}, options);

      opts.decompress.dest = opts.decompress.dest || 'tmp/helpers/';
      opts.decompress.ext  = opts.decompress.ext  || '.zip';

      async.forEach(opts.decompress.files, function (file, nextFile) {

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
            nextFile();
          }
        })
        .on('error', function (e) {
          error = true;
          grunt.log.writeln('Error decompressing: ' + filename);
          grunt.log.writeln(e);
          nextFile(e);
        });

      }, function (err) {
        grunt.config.set('plugin.decompress.done', true);
        next(err);
      });

    } else {
      next();
    }
  };

  middleware.event = 'assemble:before:configuration';

  return {
    'assemble-middleware-decompress': middleware
  };
};
