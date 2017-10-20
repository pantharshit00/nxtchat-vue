import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const initialState = {
  user: null,
};

const store = new Vuex.Store({
  state: initialState,
  mutations,
  getters,
  actions,
});

export default store;
