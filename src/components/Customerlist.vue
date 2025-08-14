<template>
  <v-container>
    <!-- タイトル -->
    <v-row justify="center" class="mb-4">
      <v-col cols="12" class="text-center">
        <h1 class="text-h5 font-weight-bold">登録済み企業一覧</h1>
        <v-btn color="primary" @click="fetchData">再読み込み</v-btn>
      </v-col>
    </v-row>

    <!-- 一覧テーブル -->
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
            <tr v-for="data in dataList" :key="data.ID">
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
      ID: '',
      CustomerName: '',
      Contact: ''
    };
  },
  computed: {
    // Vuexストアからデータを取得
    dataList() {
      return this.$store.state.data.dataList;
    }
  },
  methods: {
    // 再読み込み
    fetchData() {
      this.$store.dispatch("data/readData");
    }
  },
  mounted() {
    // ページ表示時に読み込み
    this.fetchData();
  }
};
</script>
