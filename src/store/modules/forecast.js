import axios from 'axios';

export default {
  namespaced: true,
  state: {
    regions: [
      { name: '東京', code: '130000' },
      { name: '大阪', code: '270000' },
      { name: '北海道', code: '160000' },
      { name: '福岡', code: '400000' },
      { name: '沖縄', code: '471000' }
    ],
    reportDatetime: null,
    description: null,
  },
  getters: {    
    formattedDescription(state) {
      return state.description.replace(/\n/g, '<br>');
    }
  },
  mutations: {
    setForecast(state, data) {
      state.reportDatetime = data.reportDatetime;
      state.description = data.text;
    }
  },
  actions: {
  async fetchForecast({ commit }, code) {
  const response = await axios.get(`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${code}.json`);
  commit('setForecast', response.data);
    }
  }
};
