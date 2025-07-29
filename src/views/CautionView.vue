<template>
  <v-container>
    <WeatherCaution />
  </v-container>
</template>

<script>
  import WeatherCaution from '@/components/WeatherCaution.vue' //.vueをインポート

  export default {
    name: 'HomeView',

    components: {
      WeatherCaution,
    },
  }
</script>