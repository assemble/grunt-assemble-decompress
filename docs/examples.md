```js
assemble: {
  options: {
    plugins: ['{%= name %}'],
    decompress: {
      files: ['tmp/foo.zip'],
      dest: 'tmp/foo/'
    }
  }
}
```
