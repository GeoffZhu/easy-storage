# Easy Storage

> A Browser Package for use local-storage or session-storage easily.

## Useage

### CDN
```html
<script type="text/javascript" src="//unpkg.com/syt-easy-storage@0.0.2/index.js"></script>
<script type="text/javascript">
  const es = new EasyStorage() // default use localStorage
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
// entry.js
import Vue from 'vue'
import EasyStorage 'syt-easy-storage/vue'

Vue.use(EasyStorage)

// components file
this.$es.set('key', value)
this.$es.get('key')

```

