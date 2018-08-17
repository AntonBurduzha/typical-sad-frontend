import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import signup from './modules/signup';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signup,
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
