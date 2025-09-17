<template>
  <v-container>
    <v-row justify="center" class="mb-6">
      <v-col cols="12" class="text-center">
        <h1 class="text-h4 font-weight-bold">日本企業DB 管理画面</h1>
        <p class="text-subtitle-1 text-grey">企業情報の登録と一覧表示</p>
      </v-col>
    </v-row>

    <v-card class="pa-4 mb-6" outlined>
      <v-card-title class="text-h6 font-weight-bold">企業情報登録フォーム</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="ID"
              label="企業ID"
              placeholder="例: C100"
              :rules="[rules.required, rules.prefix]"
              outlined
              dense
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="CustomerName"
              label="企業名"
              placeholder="例: 第一生命テクノクロス"
              :rules="[rules.required, rules.name]"
              outlined
              dense
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="Contact"
              label="連絡先"
              placeholder="例: 030-1234-5678"
              outlined
              dense
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="indigo" dark @click="addData">登録</v-btn>
      </v-card-actions>
    </v-card>

    <v-card outlined>
      <v-card-title class="text-h6 font-weight-bold">
        登録済み企業一覧
        <v-spacer></v-spacer>
        <v-btn small outlined @click="readData">再読み込み</v-btn>
      </v-card-title>
      <v-divider></v-divider>
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
  name: 'CustomerForm',
  data() {
    return {
      ID: '',
      CustomerName: '',
      Contact: '',
    rules: {
      required: v => !!v || "必須項目です",
      prefix: 
      v => {
        const regex = /^[A-Z]\d{3}$/;
        return regex.test(v) || "A～Zで始まり数字3桁で入力してください";
      },
      name: 
      v => {
        const regex = /^[\u4E00-\u9FAF\u3040-\u309F\u30A0-\u30FFa-zA-Z\s]+$/;
        return regex.test(v) || "企業名は全角文字・アルファベットで入力してください";
      }
    }
  };
},

  methods: {
    addData() {
      this.$store.commit('data/setID', this.ID);
      this.$store.commit('data/setCustomerName', this.CustomerName);
      this.$store.commit('data/setContact', this.Contact);
      this.$store.dispatch('data/addData');
    },
    readData() {
      this.$store.dispatch('data/readData');
    },
  },

  computed: {
    dataList() {
      return this.$store.state.data.dataList;
    }
  }
};
</script>
