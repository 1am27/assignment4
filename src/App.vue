<template>
  <v-app class="app-dark">
    <v-navigation-drawer
      app
      permanent
      class="sidebar-dark"
      width="220"
    >
      <div class="d-flex align-center pa-4">
        <v-img
          alt="My Logo"
          contain
          src="@/assets/icon.png"
          width="40"
          height="40"
          class="mr-2"
        />
        <span class="app-title">Vibes Match</span>
      </div>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item to="/" tag="router-link">
          <v-list-item-icon><v-icon>mdi-robot</v-icon></v-list-item-icon>
          <v-list-item-title>AIチャット</v-list-item-title>
        </v-list-item>

        <v-list-item to="/emotionresult" tag="router-link">
          <v-list-item-icon><v-icon>mdi-emoticon-happy</v-icon></v-list-item-icon>
          <v-list-item-title>感情分析結果</v-list-item-title>
        </v-list-item>

        <v-list-item to="/spotify" tag="router-link">
          <v-list-item-icon><v-icon>mdi-music</v-icon></v-list-item-icon>
          <v-list-item-title>Spotifyおすすめ曲</v-list-item-title>
        </v-list-item>

        <v-list-item to="/db" tag="router-link">
          <v-list-item-icon><v-icon>mdi-database</v-icon></v-list-item-icon>
          <v-list-item-title>プレイリスト</v-list-item-title>
        </v-list-item>
        

        
      </v-list>
    </v-navigation-drawer>

    <v-main class="main-dark">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.app-dark {
  background: #121212;
  color: #fff;
  min-height: 100vh;
}

.sidebar-dark {
  background: #000 !important;
  color: #fff;
  border-right: 1px solid #222;
}

.app-title {
  font-size: 18px;
  font-weight: bold;
  color: #1DB954;
  font-family: "Circular Std", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.main-dark {
  background: #121212;
  padding: 16px;
  min-height: 100vh;
}

.sidebar-dark .v-list-item-title,
.sidebar-dark .v-list-item,
.sidebar-dark .v-icon {
  color: #fff !important;
}

.sidebar-dark .v-list-item:hover .v-list-item-title,
.sidebar-dark .v-list-item:hover .v-icon {
  color: #1DB954 !important;
}
</style>
