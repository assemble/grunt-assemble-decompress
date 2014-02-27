# assemble-contrib-decompress [![NPM version](https://badge.fury.io/js/assemble-contrib-decompress.png)](http://badge.fury.io/js/assemble-contrib-decompress) 

> Assemble plugin for extracting zip, tar and tar.gz archives.

## Quickstart
In the command line, run:

```bash
npm install assemble-contrib-decompress --save
```

Next, to register the plugin with Assemble in your project's Gruntfile you can either specify the direct path to the plugin(s) (e.g. `./path/to/plugins/*.js`), or if installed via npm, make sure the plugin is in the `devDependencies` of your project.js package.json, and simply add the module's name to the `plugins` option:

```js
assemble: {
  options: {
    plugins: ['assemble-contrib-decompress', 'other/plugins/*.js']
  }
}
```
Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.



## Options
### files
Type: `String`
Default: `undefined`

Path the file or files to decompress.

### dest
Type: `String`
Default: `undefined`

Destination for the decompressed files.



## Usage Examples
```js
assemble: {
  options: {
    plugins: ['assemble-contrib-download', 'assemble-contrib-decompress'],
    download: {
      repo: 'assemble/handlebars-helpers',
      files: ['docs/helpers.zip'],
      dest: 'tmp/'
    }
    decompress: {
      files: ['tmp/helpers.zip'],
      dest: 'docs/helpers/'
    }
  }
}
```



## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/assemble/assemble-contrib-decompress/issues).

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][], and build the documentation with [grunt-readme](https://github.com/assemble/grunt-readme).

Pull requests are also encouraged, and if you find this project useful please consider "starring" it to show your support! Thanks!


## Assemble plugins
Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.  

#### [assemble-contrib-anchors](https://github.com/assemble/assemble-contrib-anchors) [![NPM version](https://badge.fury.io/js/assemble-contrib-anchors.png)](http://badge.fury.io/js/assemble-contrib-anchors)
> Assemble plugin for creating anchor tags from generated html.  

#### [assemble-contrib-contextual](https://github.com/assemble/assemble-contrib-contextual) [![NPM version](https://badge.fury.io/js/assemble-contrib-contextual.png)](http://badge.fury.io/js/assemble-contrib-contextual)
> Generates a JSON file containing the context of each page. Basic plugin to help see what's happening in the build.  

#### [assemble-contrib-download](https://github.com/assemble/assemble-contrib-download) [![NPM version](https://badge.fury.io/js/assemble-contrib-download.png)](http://badge.fury.io/js/assemble-contrib-download)
> Assemble plugin for downloading files from GitHub.  

#### [assemble-contrib-i18n](https://github.com/assemble/assemble-contrib-i18n) [![NPM version](https://badge.fury.io/js/assemble-contrib-i18n.png)](http://badge.fury.io/js/assemble-contrib-i18n)
> Plugin for adding i18n support to Assemble projects.  

#### [assemble-contrib-lunr](https://github.com/assemble/assemble-contrib-lunr) [![NPM version](https://badge.fury.io/js/assemble-contrib-lunr.png)](http://badge.fury.io/js/assemble-contrib-lunr)
> Assemble plugin for creating a search engine within your static site using lunr.js.  

#### [assemble-contrib-markdown](https://github.com/assemble/assemble-contrib-markdown) [![NPM version](https://badge.fury.io/js/assemble-contrib-markdown.png)](http://badge.fury.io/js/assemble-contrib-markdown)
> HEADS UP! This isn't ready for prime time! Convert markdown files to HTML using marked.js. This plugin is an alternative to Assemble's markdown Handlebars helpers. Both are useful in different scenarios.  

#### [assemble-contrib-pagination](https://github.com/assemble/assemble-contrib-pagination) [![NPM version](https://badge.fury.io/js/assemble-contrib-pagination.png)](http://badge.fury.io/js/assemble-contrib-pagination)
> Pagination plugin for Assemble, the static site generator for Grunt.js and Yeoman. This plugin enables adding pagable list pages.  

#### [assemble-contrib-permalinks](https://github.com/assemble/assemble-contrib-permalinks) [![NPM version](https://badge.fury.io/js/assemble-contrib-permalinks.png)](http://badge.fury.io/js/assemble-contrib-permalinks)
> Permalinks plugin for Assemble, the static site generator for Grunt.js and Yeoman. This plugin enables powerful and configurable URI replacement patterns, presets, uses Moment.js for parsing dates, and much more.  

#### [assemble-contrib-sitemap](https://github.com/assemble/assemble-contrib-sitemap) [![NPM version](https://badge.fury.io/js/assemble-contrib-sitemap.png)](http://badge.fury.io/js/assemble-contrib-sitemap)
> Sitemap generator plugin for Assemble  

#### [assemble-contrib-toc](https://github.com/assemble/assemble-contrib-toc) [![NPM version](https://badge.fury.io/js/assemble-contrib-toc.png)](http://badge.fury.io/js/assemble-contrib-toc)
> Create a table of contents in the generated HTML, using Cheerio.js  

#### [assemble-contrib-wordcount](https://github.com/assemble/assemble-contrib-wordcount) [![NPM version](https://badge.fury.io/js/assemble-contrib-wordcount.png)](http://badge.fury.io/js/assemble-contrib-wordcount)
> Assemble plugin for displaying a word-count on blog posts or pages. 

Visit [assemble.io/plugins](http:/assemble.io/plugins/) for more information about [Assemble](http:/assemble.io/) plugins.


## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2014 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated by [grunt-readme](https://github.com/assemble/grunt-readme) on Thursday, February 27, 2014._

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

