/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2014 Assemble.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect
var grunt = require('grunt');
var plugin = require('../');

describe('assemble-contrib-decompress', function() {

  describe('when given a file', function() {
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