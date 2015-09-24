```js
assemble: {
  options: {
    plugins: ['grunt-assemble-download', '{%= name %}'],
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
