<template>
  <v-container>
      <h1 class="text-center mb-4">天気予報</h1>
      <div class="weather-summary">
        <p>発表日時：{{ reportDatetime }}</p>
        <p>概要：</p>
        <p v-html="descriptionHtml"></p>
      </div>
    </v-container>
</template>

<script>
export default {
  name: 'WeatherForecast',
  props: ['selectedCode'],

  computed: {
  reportDatetime() {
    return this.$store.state.forecast.reportDatetime;
  },
  descriptionHtml() {
    return this.$store.getters['forecast/formattedDescription'];
  }
},

 watch: {
    selectedCode(newCode) {
      if (newCode) {
        this.$store.dispatch('forecast/fetchForecast', newCode);
      }
    }
  },

  mounted() {
    if (this.selectedCode) {
      this.$store.dispatch('forecast/fetchForecast', this.selectedCode);
    }
  }
}
</script>
