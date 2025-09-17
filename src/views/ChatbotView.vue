<template>
  <v-container>
    <Chatbot />
  </v-container>
</template>

<script>
  import Chatbot from '@/components/Chatbot.vue' //.vueをインポート

  export default {
    name: 'HomeView',

    components: {
      Chatbot,
    },
  }
</script>