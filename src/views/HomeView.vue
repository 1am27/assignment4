<template>
  <div>
    <SelectRegion @regionSelected="RegionChange" />
    <p>選択されたコード: {{ selectedCode }}</p>
    <router-link to="/forecast">
      <v-btn>画面遷移する</v-btn>
    </router-link>
  </div>
</template>

<script>
import SelectRegion from "@/components/SelectRegion.vue";

export default {
  components: { SelectRegion },
  data() {
    return {
      selectedCode: null,
    };
  },
  methods: {
    RegionChange(code) {
      this.selectedCode = code;
      this.$store.dispatch("forecast/fetchForecast", code); 
    },
    pagechange(){
      this.$rounter.push('/forecast');
    }
  }
};
</script>
