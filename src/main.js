import VueKinesis from 'vue-kinesis';
import Vue from 'vue';
import App from './app.vue';
import './components';
import './assets/styles/main.less';
import './mixins/global';
import store from './store';

Vue.use(VueKinesis);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
