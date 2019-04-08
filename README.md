# Vue Custom Console [![npm version](https://badgen.net/npm/v/vue-custom-console)](https://npm.im/vue-custom-console)

Vue command console component can executes user's custom and display the result. 

It's based on [console.js v.1.2.2](https://github.com/amio/console.js/releases/tag/v1.2.0), and console.js dev tells that is for game console.

## Features

- console.js v1.2.2 features.
- hotKeyDisable
- elementShown vs systemShow mode

## Usage

Import And Register this plugin in your app:

```vue
<script>
import console from 'vue-custom-console'
Vue.use(console)

new Vue("some options");
</script>
```

use `<v-custom-console>` inside template:

```vue
<template>
    ......
  <v-custom-console />
    ......
</template>
```