<template>
  <v-container>
    <div class="text-center mb-4">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            ロケーションを選択する
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="region in regions"
            :key="region.code"
            @click="selectRegion(region.code)"
          >
            <v-list-item-title>{{ region.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "SelectRegion",
  data() {
    return {
      regions: [
        { name: "東京", code: "130000" },
        { name: "大阪", code: "270000" },
        { name: "北海道", code: "160000" },
        { name: "福岡", code: "400000" },
        { name: "沖縄", code: "471000" },
      ],
    };
  },
  methods: {
    selectRegion(code) {
      this.$emit("regionSelected", code); // 親に送る
    },
  },
};
</script>
