import Vue from 'vue'
import App from './App.vue'
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
