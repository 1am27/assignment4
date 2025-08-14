<template>
  <v-container>
    <Customerlist />
  </v-container>
</template>

<script>
  import Customerlist from '@/components/Customerlist.vue' //.vueをインポート

  export default {
    name: 'HomeView',
    components: {
      Customerlist,
    },
  }
</script>