import TableApi from '@/api/table';
import router from '@/router';

const state = {
  fetching: false,
  error: false,
  data: [],
};

const actions = {
  getRegions({ commit }) {
    commit('regionsFetching');
    TableApi.getRegions(
      data => {
        setTimeout(() => {
          commit('regionsSuccess', data);
        }, 1500);
      },
      () => commit('regionsError')
    );
  }
};

const mutations = {
  regionsFetching(state) {
    state.fetching = true;
    state.error = false;
  },
  regionsSuccess(state, regions) {
    state.fetching = false;
    state.data = regions;
  },
  regionsError(state) {
    state.fetching = false;
    state.error = true;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
