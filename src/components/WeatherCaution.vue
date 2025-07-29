<template>
  <v-container>
      <h1 class="text-center mb-4">東京の警戒情報</h1>
      <div class="custom-warning-bar">
         <span>⚠{{ headline }}</span>
      </div>
    </v-container>
</template>

<script>
export default {
  name: 'WeatherCaution',

  computed: {
  headline() {
    return this.$store.state.caution.headline;
  }
},

  mounted() {
    this.$store.dispatch('caution/fetchCaution');
  }
}
</script>