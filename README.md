# Easy Storage

> A Browser Package for use local-storage or session-storage easily.

## Useage

Support String, Number, Array, Object. 

| Function       | Example     |
|-----------|-----------|
| set | `es.set('key', value, timeStamp` |
| get | `es.get('key')` |
| remove | `es.remove('key')` |
| clear | `es.clear()` |

Function `set` have a param `timeStamp`, unit is `ms`.

## Installation

### CDN
```html
<script type="text/javascript" src="//unpkg.com/syt-easy-storage@0.0.3/index.js"></script>
<script type="text/javascript">
  const es = new EasyStorage() // Default use localStorage, `new EasyStorage({type: 'session'})` for use sessionStorage
</script>
```

### NPM

```sh
npm install syt-easy-storage --save
```

```javascript
// ES
import EasyStorage 'syt-easy-storage'
// commonjs
const EasyStorage = require('syt-easy-storage')

const es = new EasyStorage()
```

### VueJS

```sh
npm install syt-easy-storage --save
```

```javascript
// plagin.js
import VueEasyStorage 'syt-easy-storage/vue'
const easyStorage = new VueEasyStorage()
export default easyStorage

// entry.js
import Vue from 'vue'
import easyStorage 'path/of/plagin.js'
Vue.use(easyStorage)

// components file
this.$es.set('key', value)
this.$es.get('key')

```

