import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from 'vue-router'
import {routes} from './routes'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false;

new Vue({
  store,
  routes,
  render: h => h(App)
}).$mount("#app");
