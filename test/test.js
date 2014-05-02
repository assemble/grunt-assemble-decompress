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
      var assemble = {
        config: {
          decompress: {
            files: ['test/fixtures/files.zip'],
            dest: 'test/actual/'
          },
          grunt: grunt
        }
      };

      var params = {
        event: 'assemble:before:configuration',
      };

      plugin(assemble)['assemble-middleware-decompress'](params, done);
    });

  });

  describe('when given a bad file', function() {

    before(function() {
      grunt.config.set('plugin.decompress.done', undefined);
    });

    it('should error', function(done) {
      var assemble = {
        config: {
          decompress: {
            files: ['test/fixtures/error.zip'],
            dest: 'test/actual/'
          },
          grunt: grunt
        }
      };

      var params = {
        event: 'assemble:before:configuration',
      };

      try {
        plugin(assemble)['assemble-middleware-decompress'](params, function (err) {
          if (err) {
            done();
          } else {
            done(new Error('Should have thrown an error'));
          }
        });
      } catch (err) {
        console.log('error thrown!', err);
        done();
      }
    });
  });

});
