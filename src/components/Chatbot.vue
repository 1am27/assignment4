<template>
  <v-main class="pa-0 chat-page">
    <!-- チャット履歴 -->
    <v-container class="chat-container">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="mb-2 d-flex"
        :class="{'justify-end': message.role === 'user', 'justify-start': message.role === 'bot'}"
      >
        <!-- 吹き出し -->
        <v-sheet
          :class="[
            message.role === 'user'
              ? 'user-chat'
              : 'bot-chat',
            'pa-3',
          ]"
          elevation="2"
          max-width="70%"
        >
          <div class="text-pre-line">{{ message.text }}</div>
        </v-sheet>
      </div>
    </v-container>

    <!-- 入力欄 -->
    <div class="chat-input-bar">
      <v-container class="pa-2">
        <v-row>
          <v-col cols="10">
            <v-textarea
              v-model="message"
              placeholder="今日はどんな気分？？"
              auto-grow
              rows="1"
              outlined
              hide-details
              rounded
              class="chat-input"
              @keydown.enter.prevent="handleEnter"
            ></v-textarea>
          </v-col>
          <v-col cols="2" >
            <v-btn color="green darken-2" block class="mt-2 send-btn" @click="sendMessage">
              送信
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "ChatBot",
  data() {
    return {
      message: ""
    };
  },
  computed: {
    messages() {
      return this.$store.state.AI.messages;
    }
  },
  methods: {
    sendMessage() {
      if (!this.message.trim()) return;
      this.$store.commit("AI/setMessage", this.message);
      this.$store.dispatch("AI/sendMessage");
      this.message = "";
    },
    handleEnter(kaigyou) {
    if (kaigyou.shiftKey) {
      this.message += "\n";
    } else {
      this.sendMessage();
    }
    }
  }
};
</script>

<style scoped>
.chat-page {
  background: #121212;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  width: 100%;
  box-sizing: border-box;
}

.chat-container {
  width: 100%;
  margin: 0;
  padding: 16px 0 120px;
}

.user-chat {
  background: #1DB954 !important;
  color: #fff !important;
  border-radius: 20px 20px 0 20px;
}

.bot-chat {
  background: #2a2a2a !important;
  color: #fff !important;
  border-radius: 20px 20px 20px 0;
}

.chat-input-bar {
  position: fixed;
  bottom: 0;
  left: 220px;
  right: 0;
  background: #181818;
  border-top: 1px solid #333;
  padding: 8px 0;
}

.chat-input {
  background: #2a2a2a;
  color: #fff !important;         
}

.chat-input input,
.chat-input textarea {
  color: #fff !important;          
}

.send-btn {
  font-weight: bold;
  text-transform: none;
  color: white !important;
}

.user-chat, .bot-chat {
  word-wrap: break-word;
  white-space: pre-wrap;
  max-width: 70%;
}

:deep(.chat-input textarea) {
  color: #fff !important;
}

:deep(.chat-input textarea::placeholder) {
  color: rgba(255, 255, 255, 0.6) !important; 
}

.chat-icon {
  display: flex;
  align-items: flex-end;
  margin: 0 8px;
}
</style>
