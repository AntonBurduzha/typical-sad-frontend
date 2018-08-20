import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import signup from './modules/signup';
import table from './modules/table';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signup,
    table,
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
