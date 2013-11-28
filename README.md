# assemble-contrib-decompress [![NPM version](https://badge.fury.io/js/assemble-contrib-decompress.png)](http://badge.fury.io/js/assemble-contrib-decompress) 

> Assemble plugin for extracting zip, tar and tar.gz archives.

## Quickstart
In the command line, run:

```bash
npm install assemble-contrib-decompress --save
```

Next, register the plugin with Assemble in your project's Gruntfile:

```js
assemble: {
  options: {
    plugin: ['assemble-contrib-decompress', 'other/plugins/*.js']
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
    plugins: ['plugins/decompress.js'],
    decompress: {
      files: ['tmp/foo.zip'],
      dest: 'tmp/foo/'
    }
  }
}
```



## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/assemble/assemble-contrib-decompress/issues). Pull requests are also encouraged.
If you find this project useful, please consider "starring" it to show your support! Thanks!


## Assemble plugins
Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.  

#### [assemble-contrib-anchors](https://github.com/assemble/assemble-contrib-anchors) [![NPM version](https://badge.fury.io/js/assemble-contrib-anchors.png)](http://badge.fury.io/js/assemble-contrib-anchors)
> Assemble plugin for creating anchor tags from generated html.  

#### [assemble-contrib-contextual](https://github.com/assemble/assemble-contrib-contextual) [![NPM version](https://badge.fury.io/js/assemble-contrib-contextual.png)](http://badge.fury.io/js/assemble-contrib-contextual)
> Generates a JSON file containing the context of each page. Basic plugin to help see what's happening in the build.  

#### [assemble-contrib-lunr](https://github.com/assemble/assemble-contrib-lunr) [![NPM version](https://badge.fury.io/js/assemble-contrib-lunr.png)](http://badge.fury.io/js/assemble-contrib-lunr)
> Assemble plugin for creating a search engine within your static site using lunr.js.  

#### [assemble-contrib-markdown](https://github.com/assemble/assemble-contrib-markdown) [![NPM version](https://badge.fury.io/js/assemble-contrib-markdown.png)](http://badge.fury.io/js/assemble-contrib-markdown)
> Convert markdown files to HTML using marked.js. This plugin is an alternative to Assemble's markdown Handlebars helpers. Both are useful in different scenarios.  

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
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated by [grunt-readme](https://github.com/assemble/grunt-readme) on Thursday, November 28, 2013._

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

