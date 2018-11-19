import Vue from 'vue';
import App from './App.vue';
import {router} from './routes.js';
import {store} from './store.js';

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
