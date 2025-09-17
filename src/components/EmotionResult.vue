<template>
  <div class="emotion-page">
    <div class="emotion-card">
      <h2 class="title">あなたの感情を数値化すると...?</h2>

      <!-- ボタン -->
      <div class="btn-area">
        <v-btn 
          color="green darken-2" 
          dark 
          large 
          @click="showResult"
        >
          結果を表示
        </v-btn>
      </div>

      <!-- ボタン押下後に結果表示 -->
      <div v-if="showAnalysis">
        <div v-if="analyzedEmotion">
          <h3 class="subtitle">感情スコア</h3>
          <div class="score-grid">
            <div class="score-box" v-for="(value, key) in analyzedEmotion.emotions" :key="key">
              <p class="label">{{ emotionLabels[key] }}</p>
              <p class="value">{{ value }}</p>
            </div>
          </div>

          <h3 class="subtitle">まとめ</h3>
          <div class="summary-box">
            <p>{{ analyzedEmotion.summary }}</p>
          </div>
        </div>
        <div v-else>
          <div class="summary-box">
            <p>まだ感情分析は実行されていません。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmotionResult",

  data() {
    return {
      showAnalysis: false,
      emotionLabels: {
        joy: "喜び",
        anger: "怒り",
        sadness: "悲しみ",
        anxiety: "不安",
        surprise: "驚き"
      }
    };
  },

  computed: {
    analyzedEmotion() {
      return this.$store.state.AI.analyzedEmotion;
    }
  },

  methods: {
    showResult() {
      this.showAnalysis = true;
    }
  }
};
</script>

<style scoped>
.emotion-page {
  background-color: #121212;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  font-family: "Circular Std", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.emotion-card {
  background-color: #181818;
  padding: 24px;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #1DB954;
  margin-bottom: 20px;
  text-align: center;
}

.btn-area {
  text-align: center;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0 10px;
  color: #fff;
}

.score-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.score-box {
  background: #282828;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.score-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.label {
  font-size: 14px;
  color: #aaa;
  margin: 0;
}

.value {
  font-size: 22px;
  font-weight: bold;
  color: #1DB954;
  margin: 4px 0 0;
}

.summary-box {
  background: #282828;
  padding: 16px;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.6;
}
</style>
