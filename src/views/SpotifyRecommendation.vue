<template>
  <v-container>
    <EmotionSpotify />
  </v-container>
</template>

<script>
  import EmotionSpotify from '@/components/EmotionSpotify.vue' //.vueをインポート

  export default {
    name: 'HomeView',

    components: {
      EmotionSpotify,
    },
  }
</script>