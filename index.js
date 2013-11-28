/**
 * assemble-decompress
 * Assemble plugin for unzipping .zip files
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

'use strict';


// Node.js
var path    = require('path');
var fs      = require('fs');

// node_modules
var decompress = require('decompress');
var _          = require('lodash');


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
    var opts = _.extend({
      // Add "decompress" object to assemble options
      decompress: {
        files: [
          'tmp/helpers.zip',
        ]
      }
    }, options.decompress, config);

    opts.decompress.dest = opts.decompress.dest || 'tmp/helpers/';
    opts.decompress.ext = opts.decompress.ext   || '.zip';

    grunt.util.async.forEach(opts.decompress.files, function (file, next) {

      var filename = path.basename(file);
      var zipfile = fs.createReadStream(file);

      var unzipped = decompress.extract({
        path: opts.decompress.dest,
        ext: opts.decompress.ext
      });

      // Unzip the files.
      try {
        zipfile.pipe(unzipped);
      } catch(e) {
        grunt.log.writeln('Error decompressing: ' + filename);
        grunt.log.writeln(e);
      }

      // Log a success message.
      grunt.log.writeln('>> Decompressed:'.green, file + ' >> '.yellow + opts.decompress.dest + ' OK'.green);
      next();

    }, function () {
      grunt.config.set('plugin.decompress.done', true);
      callback();
    });
  }
};


// export the plugin and options.
plugin.options = config;
module.exports = plugin;
