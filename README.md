# morphling.js

Super easy to use, pure Javascript data filters collection.

## Install 

**NPM** or **Yard**

`npm install morphling.js`

`yarn add morphling.js`

**CDN**

`https://unpkg.com/morphling.js/dist/morphling.js`
## Apply

*Node*

`import morphling from 'morphling.js'`;

*HTML*

```html
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <!-- Your shits here -->
    ...
    <!-- IMPORTANT: Mophling.js should be imported below here. -->
    <script src="https://unpkg.com/morphling.js/dist/morphling.js"></script>
  </body>
</html>
```

## Use

```javascript
morphling.uppercase('foo');
// FOO

mophling.reverse('bar');
// rab
```

```html
<h1 data-morph.uppercase>foo</h1>
<!-- FOO -->

<h1 data-morph.reverse>bar</h1>
<!-- rab -->
```

Made with ❤️ by Jofferson Ramirez Tiquez