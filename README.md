# Morphling

Super easy to use, pure Javascript data filters collection.

> WARNING: If you are looking for the morphling for vuejs, I renamed it to vue-morphling. This new library is the NEW vanilla javascript version of morphling. For questions please feel free to contact me.

> NOTE: This library is currently in development stage and is not yet ready for production use.

# Install 

**NPM** or **Yard**

`npm install morphling.js`

`yarn add morphling.js`

**CDN**

`https://unpkg.com/morphling.js/dist/morphling.js`
# Apply

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

# Use

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

# API

**Filters**

- [Capitalize](#capitalize)

## capitalize

> foo -> Foo

Capitalize the first character of a giver string. 

```javascript
morphling.capitalize('foo'); // -> Foo
```

```html
<span data-morph.capitalize>foo</span> // -> Foo
```

[Back to top ↑](#api)

----



Made with ❤️ by Jofferson Ramirez Tiquez