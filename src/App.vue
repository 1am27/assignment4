<template>
  <v-app>
    <v-app-bar
      app
      color="#7A85C1"
    >
      <div class="d-flex align-center">
        <v-img
          alt="My Logo"
          class="shrink mr-2"
          contain
          src="@/assets/DB2.png"
          transition="scale-transition"
          width="90"
          height="90"
        />

        <v-img
          alt="DB Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=" "
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn text to="/" tag="router-link">DB追加</v-btn>
      <v-btn text to="/list" tag="router-link">一覧</v-btn>
      <v-btn text to="/selectedlist" tag="router-link">業種別一覧</v-btn> <!-- 購入ビューを追加 -->
      <v-btn
        href="https://www.tdb.co.jp/service/u/1000.jsp"
        target="_blank"
        text
      >
        <span class="mr-2">参照</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
