```js
assemble: {
  options: {
    plugins: ['assemble-contrib-download', '{%= name %}'],
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
