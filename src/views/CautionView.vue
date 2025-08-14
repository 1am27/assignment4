<template>
  <v-container>
    <SelectedCustomerlist />
  </v-container>
</template>

<script>
  import SelectedCustomerlist from '@/components/SelectedCustomerlist.vue' //.vueをインポート

  export default {
    name: 'HomeView',

    components: {
      SelectedCustomerlist,
    },
  }
</script>