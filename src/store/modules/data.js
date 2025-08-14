import axios from 'axios';

export default {
  namespaced: true,
  state: {
    ID: '',
    CustomerName: '',
    Contact: '',
    dataList: []
  },

  getters: {
    filteredDataList: (state) => (prefix) => {
    if (!prefix) return state.dataList;
    return state.dataList.filter(item => item.ID.startsWith(prefix));
  }
  },

  mutations: {
    setID(state, id) {
      state.ID = id;
    },
    setCustomerName(state, name) {
      state.CustomerName = name;
    },
    setContact(state, contact) {
      state.Contact = contact;
    },
    setDataList(state, list) {
      state.dataList = list;
    }
  },
  actions: {
    async addData({ state }) {

      const url = `https://m3h-murakami-assignment4.azurewebsites.net/api/INSERT?ID=${encodeURIComponent(state.ID)}&Name=${encodeURIComponent(state.CustomerName)}&Contact=${encodeURIComponent(state.Contact)}`;

      try {
        const response = await axios.post(url);
        console.log('DB登録成功:', response.data);
      } catch (error) {
        console.error('DB登録エラー:', error.message);
      }
    },

    async readData({ commit }) {
      const response = await axios.get('https://m3h-murakami-assignment4.azurewebsites.net/api/SELECT?');
      console.log(response.data);
      commit('setDataList', response.data.List);
    }
  }
};
