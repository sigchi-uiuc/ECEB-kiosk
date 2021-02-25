import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueFirestore from 'vue-firestore';
import Vuex from 'vuex';
import IdleVue from 'idle-vue';

const eventsHub = new Vue();

// turns off the 'You are running Vue in development mode.' msg
Vue.config.productionTip = false;

Vue.use(VueFirestore);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    homeActive: false
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 8000, // 3 seconds
  startAtIdle: false
});

new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
