import Vue from 'vue';
import VueMaterial from 'vue-material'
import Vuelidate from 'vuelidate'
import { mapState } from 'vuex'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuelidate)
Vue.use(VueMaterial)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  computed: {
    ...mapState({
      isAuthenticated: state => state.signup.isAuthenticated,
    }),
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.push('/');
    } else {
      this.$router.push('/signup');
    }
  }
});
