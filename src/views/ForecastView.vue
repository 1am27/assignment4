<template>
  <v-container>
    <WeatherForecast />
  </v-container>
</template>

<script>
  import WeatherForecast from '@/components/WeatherForecast.vue' //.vueをインポート

  export default {
    name: 'HomeView',
    components: {
      WeatherForecast,
    },
  }
</script>