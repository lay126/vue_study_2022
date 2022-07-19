// import Vue from 'vue'
// import App from './App.vue'
// import { store } from './components/store/store.js'

// new Vue({
//   el: '#app',
//   store,
//   render: h => h(App)
// })


import { createApp } from 'vue'
import App from './App.vue'
import { store } from './components/store/store.js'

createApp(App).mount('#app').mount(store);