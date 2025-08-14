<template>
  <v-container>
    <v-row justify="center" class="mb-4">
      <v-col cols="12" class="text-center">
        <h1 class="text-h5 font-weight-bold">業種別一覧</h1>
        <!-- 接頭辞選択 -->
        <v-select 
        v-model="selectedIndustry"
          :items="Prefixes"
          label="接頭辞を選択"
          outlined
          dense
          class="mb-3"
        />
      </v-col>
    </v-row>

    <p>業種 {{ selectedJP }}</p>

    <v-card outlined>
      <v-card-text>
        <v-simple-table dense>
          <thead>
            <tr>
              <th class="text-left">企業ID</th>
              <th class="text-left">企業名</th>
              <th class="text-left">連絡先</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in filteredDataList" :key="data.ID">
              <td>{{ data.ID }}</td>
              <td>{{ data.CustomerName }}</td>
              <td>{{ data.Contact }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CustomerList",
  data() {
    return {
      selectedIndustry: "", // 選択された接頭辞
      Prefixes: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                "U", "V", "W", "X", "Y", "Z"],
      IndustryJP: {
      "" : "選択なし",
      "A": "A : 保険",
      "B": "B : IT",
      "C": "C : 商社",
      "D": "D : 飲食",
      "E": "E : 製造",
      "F": "F : コンビニ",
      "G": "G : 航空",
      "H": "H : エンタメ",
      "I": "I : 銀行",
      "J": "J : 不動産" }
    };
  },
  methods: {
    fetchData() {
    this.$store.dispatch("data/readData");
    }
  },
  computed: {
    filteredDataList() {
      return this.$store.getters['data/filteredDataList'](this.selectedIndustry);
    },
    selectedJP() {
      return this.IndustryJP[this.selectedIndustry];
    }
  }
};
</script>
