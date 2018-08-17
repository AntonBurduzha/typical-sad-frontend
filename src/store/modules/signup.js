import SignupApi from '@/api/signup';

const state = {
  fetching: false,
  error: false,
  isAuthenticated: JSON.parse(localStorage.auth),
};

const actions = {
  signup({ commit }, user) {
    commit('signupFetching');
    SignupApi.createUser(
      user,
      () => {
        commit('signupSuccess');
        localStorage.setItem('auth', true);
      },
      () => {
        commit('signupError');
        setTimeout(() => {
          commit('resetError');
        }, 3000);
        localStorage.setItem('auth', false);
      }
    );
  }
};

const mutations = {
  signupFetching(state) {
    state.fetching = true;
  },
  signupSuccess(state) {
    state.fetching = false;
    state.isAuthenticated = true;
  },
  signupError(state) {
    state.fetching = false;
    state.error = true;
  },
  resetError(state) {
    state.error = false;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
