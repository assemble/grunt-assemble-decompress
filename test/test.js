/**
 * Assemble <http://assemble.io>
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect
var grunt = require('grunt');
var plugin = require('../');

describe('assemble-contrib-decompress', function() {

  describe('when given a file', function() {

    before(function() {
      grunt.config.set('plugin.decompress.done', undefined);
    });

    it('should unzip it', function(done) {
      var params = {
        stage: 'options:pre:configuration',
        assemble: {
          options: {
            decompress: {
              files: ['test/fixtures/files.zip'],
              dest: 'test/actual/'
            }
          }
        },
        grunt: grunt
      };
      plugin(params, done);
    });

  });

  describe('when given a bad file', function() {

    before(function() {
      grunt.config.set('plugin.decompress.done', undefined);
    });

    it('should error', function(done) {
      var params = {
        stage: 'options:pre:configuration',
        assemble: {
          options: {
            decompress: {
              files: ['test/fixtures/error.zip'],
              dest: 'test/actual/'
            }
          }
        },
        grunt: grunt
      };

      try {
        plugin(params, done);
      } catch (err) {
        console.log('error throw!', err);
      }
    });
  });

});