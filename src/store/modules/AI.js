import axios from "axios";

export default {
  namespaced: true,
  state: {
    message: "",
    messages: [],
    analyzedEmotion: null
  },

  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
    addUserMessage(state, text) {
      state.messages.push({ role: "user", text });
    },
    addBotMessage(state, text) {
      state.messages.push({ role: "bot", text });
    },
    setAnalyzedEmotion(state, emotionjson) {
      state.analyzedEmotion = emotionjson; 
    }
  },

  actions: {
    async sendMessage({ state, commit }) {
      const trimmed = state.message.trim();
      if (!trimmed) return; 

      commit("addUserMessage", trimmed);
      const response = await axios.post("https://m3h-murakami-final.azurewebsites.net/api/Function1?", {messages: state.messages});

      const result = response.data;

      console.log("バックエンドから:", result);

      let analysis = null;
      if (result.Content?.[0]?.Text) {
        try {
          analysis = JSON.parse(result.Content[0].Text);//Textの部分をJSON化している
        } catch {
          analysis = null;
        }
      }

      if (analysis && analysis.emotions) {
        commit("setAnalyzedEmotion", analysis);
        console.log(this.state.AI.analyzedEmotion);//確認用
        const contentText = response.data.Content?.[0].Text;
        commit("addBotMessage", contentText);
      } else {
          const contentText = response.data.Content?.[0].Text;
          commit("addBotMessage", contentText);
        }
    }
  }
};
