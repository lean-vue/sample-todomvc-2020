import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';

// TodoMVC styles
import 'todomvc-app-css/index.css';
import todos from '@/store/todos';

Vue.config.productionTip = false

// Vuex
Vue.use(Vuex);
const store = new Vuex.Store(todos);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
