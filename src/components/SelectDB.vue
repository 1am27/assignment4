<template>
  <div class="saved-page">
    <h2 class="title">保存済みの楽曲一覧</h2>

    <div v-if="savedTracks.length">
      <table class="playlist-table">
        <thead>
          <tr>
            <th>#</th>
            <th>曲名</th>
            <th>アーティスト</th>
            <th>アルバム</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(track, index) in savedTracks" :key="track.TrackId">
            <td>{{ index + 1 }}</td>
            <td>{{ track.TrackName }}</td>
            <td>{{ track.ArtistName }}</td>
            <td>{{ track.AlbumName }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else>保存された楽曲はまだありません。</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SelectDB",
  data() {
    return { 
      savedTracks: [] 
    };
  },
  methods: {
    async fetchSavedTracks() {
      try {
        const res = await axios.get(
          "https://m3h-murakami-finaldb.azurewebsites.net/api/SELECT?"
        );
        console.log("APIレスポンス:", res.data);
        this.savedTracks = res.data.List;
      } catch (err) {
        console.error("取得エラー:", err);
      }
    }
  },
  mounted() {
    this.fetchSavedTracks();
  }
};
</script>

<style scoped>
.saved-page {
  background:#121212;
  color: white;
  min-height: 100vh;
  padding: 30px;
}

.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1DB954;
}

.playlist-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.playlist-table thead {
  color: #aaa;
  text-align: left;
  border-bottom: 1px solid #333;
}

.playlist-table th,
.playlist-table td {
  padding: 12px 16px;
}

</style>
