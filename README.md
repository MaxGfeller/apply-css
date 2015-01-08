# apply-css

Scoped CSS was a planned web platform feature in multiple browsers but was later
[retracted due to high code complexity](https://www.chromestatus.com/features/5374137958662144).

With `apply-css` this is possible in the browser using [browserify](http://browserify.org).

There is a demo project using bootstrap + a theme [here](https://github.com/MaxGfeller/apply-css-demo). Or see it directly live [here](http://www.maxgfeller.com/projects/apply-css-demo).

## Usage

### `apply(element, css)`

- `element` is the element to apply the css to
- `css` is the stylesheet as a string to apply

## Example

See the example folder.

## Using browserify

With the browserify transfrom [brfs](https://npmjs.org/package/brfs) it is
possible to static-inline the css from a file:

```javascript
var fs = require('fs')
var cssString = fs.readFileSync('style.css', { encoding: 'utf8' })
```

## Tests

To run the tests simply run `npm test`.
