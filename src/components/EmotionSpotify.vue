<template>
  <div class="music-page">
    <h2 class="title">気分に合ったおすすめ曲</h2>

    <div v-if="tracks.length">
      <ul class="track-list">
        <li v-for="track in tracks" :key="track.id" class="track-item">
          <img :src="track.albumImage" alt="Album cover" class="album-img" />
          <div class="track-info">
            <strong class="track-name">{{ track.name }}</strong><br />
            <span class="track-artist">{{ track.artist }}</span><br />
            <span class="track-album">アルバム: {{ track.albumName }}</span><br />
            <div class="actions">
              <a :href="track.link" target="_blank" class="btn listen-btn">Spotifyで聴く</a>
              <button @click="InsertDB(track)" class="btn save-btn">プレイリストに保存する</button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>まだおすすめ曲はありません。感情分析を実行してください。</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EmotionMusic",
  data() {
    return {
      tracks: []
    };
  },
  computed: {
    analyzedEmotion() {
      return this.$store.state.AI.analyzedEmotion;
    }
  },
  methods: {
    async fetchSpotifyTracks() {
      if (!this.analyzedEmotion) return;

      const emotions = this.analyzedEmotion.emotions;
      const maxValue = Object.values(emotions).reduce((max, num) => (max > num ? max : num));
      const maxKey = Object.keys(emotions).find(key => emotions[key] === maxValue);

      const genreMap = {
        joy: "pop r&b, dance",
        anger: "j-rock",
        sadness: "pop r&b",
        anxiety: "j-pop",
        surprise: "j-pop dance"
      };
      const genre = genreMap[maxKey] || "pop";

      const res = await axios.get("https://m3h-murakami-final.azurewebsites.net/api/SpotifySearch?", {
        params: { q: genre }
      });

      const tracksArray = res.data.tracks.items;
      this.tracks = tracksArray.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists.map(a => a.name).join(", "),
        albumImage: track.album?.images?.[0]?.url,
        albumName: track.album?.name,
        link: track.external_urls.spotify
      }));
    },

    async InsertDB(track) {
      try {
        const res = await axios.post("https://m3h-murakami-finaldb.azurewebsites.net/api/INSERT?", {
          TrackId: track.id,
          TrackName: track.name,
          ArtistName: track.artist,
          AlbumName: track.albumName,
          Link: track.link
        });
        console.log("保存結果:", res.data);
        alert("保存しました: " + track.name);
      } catch (error) {
        console.error("保存エラー:", error);
        alert("保存に失敗しました");
      }
    }
  },
  mounted() {
    this.fetchSpotifyTracks();
  }
};
</script>

<style scoped>
.music-page {
  background: #121212;
  color: white;
  min-height: 100vh;
  padding: 30px;
  font-family: "Circular Std", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1DB954;
}

.track-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.track-item {
  display: flex;
  align-items: center;
  background: #181818;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 8px;
  transition: background 0.2s;
}

.track-item:hover {
  background: #242424;
}

.album-img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 16px;
}

.track-info {
  flex: 1;
  text-align: left;
}

.track-name {
  font-size: 16px;
  color: #fff;
}

.track-artist {
  font-size: 14px;
  color: #bbb;
}

.track-album {
  font-size: 13px;
  color: #888;
}

.actions {
  margin-top: 6px;
}

.btn {
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 13px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.listen-btn {
  background: #1DB954;
  color: #fff;
}

.listen-btn:hover {
  background: #1ed760;
}

.save-btn {
  background: #282828;
  color: #fff;
  border: 1px solid #1DB954;
}

.save-btn:hover {
  background: #1DB954;
  color: #000;
}

</style>
