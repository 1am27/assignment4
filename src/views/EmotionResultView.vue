<template>
  <v-container>
    <EmotionResult />
  </v-container>
</template>

<script>
  import EmotionResult from '@/components/EmotionResult.vue' //.vueをインポート

  export default {
    name: 'HomeView',

    components: {
      EmotionResult,
    },
  }
</script>