In the command line, run:

```bash
npm install assemble-contrib-decompress --save
```

Next, register the plugin with Assemble in your project's Gruntfile:

```js
assemble: {
  options: {
    plugin: ['{%= name %}', 'other/plugins/*.js']
  }
}
```
Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.
