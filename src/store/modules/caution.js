import axios from 'axios';

export default {
  namespaced: true, // モジュール名でアクセスするための設定
  state: {
    headline: null,
    selectedCode: null
  },
  getters: {
     
  },

  mutations: {
    setCaution(state, data) {
      state.headline = data.headlineText;
    }
  },
  actions: {
    async fetchCaution({ commit }) {
      const response = await axios.get('https://www.jma.go.jp/bosai/warning/data/warning/130000.json');
      commit('setCaution', response.data);
    },
  }
}