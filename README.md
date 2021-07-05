## UArray

Provides `UArray`, an `Array` type that supports negative indices/indexes, just wrap your _regular_ JavaScript array with `UArray()` and you are all set! 🎉🙌

<br>

<blockquote align="center"> ⚠ Uses the built-in <code>Proxy</code> object, check browser compatibility on the <a href="https://caniuse.com/proxy)"><strong>website</strong></a>.
</blockquote>

<blockquote align="center">📢 This is the pure vanilla JavaScript version of this project, if you are looking for the npm-version, check <a href="https://github.com/igorskyflyer/npm-uarray"><strong>here</strong></a>.</blockquote>

<br>

### Usage

> ℹ Works like negative indices in other languages, e.g. **-1** picks that **last** element, **-2,** the **second to last**, etc.

<br>

```js
const food = UArray(['🍟', '🌭', '🍿', '🥙', '🥓'])

console.log(food[-1]) // prints '🥓'
console.log(food[-3]) // prints '🍿'
```
