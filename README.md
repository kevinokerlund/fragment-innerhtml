# DocumentFragment innerHTML
Use an `innerHTML` getter and setter with `DocumentFragments`

### NPM Use
```bash
npm install --save fragment-innerhtml
```

### CDN Use
```html
<script src="https://unpkg.com/fragment-innerhtml@latest/dist/fragment-innerhtml.min.js"></script>
```

It needs to be sourced to the window.
```javascript
import 'fragment-innerhtml';
```

## Usage

In order to add `fragment-innerhtml` to the window, use the method below:
```javascript
import 'fragment-innerhtml';
```

You can then use `innerHTML` with `DocumentFragments`:
```javascript
const fragment = document.createDocumentFragment();

fragment.innerHTML = '<div>This HTML is about to become DOM!</div';

console.log(fragment.innerHTML);
```
