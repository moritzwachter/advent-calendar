import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LetItSnow from 'vue-let-it-snow';
 
Vue.use(LetItSnow);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
