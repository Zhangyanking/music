<template>
  <div class="fdRanking" v-if="list">
    <div class="card" v-for="top in list" :key=top.sort>
      <div class="title">
        <p>{{top.top.slice(2)}}</p>
      </div>
      <ul>
        <li v-for="(songList,index) in top.list" :key=songList.song_id>
          <p class="rank">{{index+1}}</p>
          <img :src="songList.song_img_url" @click="play(songList.song_id)">
          <p class="song"  @click="play(songList.song_id)">{{songList.song_name}}</p>
          <p class="name">{{songList.musician_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { repRanking } from '@/api/find.js'
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'fdRanking',
  data() {
    return {
      list: null,
    }
  },
  methods: {
    ...mapMutations('playerModule', ['songID']),
    ...mapActions('playerModule', ['reqSong']),
    play(songId) {
      this.songID(songId)
      this.reqSong()
    },
  },
  created() {
    repRanking().then((data) => {
      this.list = data.data.list
    })
  },
}
</script>

<style lang="scss" scoped>
.fdRanking {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  .card {
    width: 300px;
    .title {
      width: 300px;
      height: 40px;
      border-bottom: 2px solid #a7a7a7;
      p {
        font-size: 20px;
        font-weight: bold;
        color: #db3f2b;
        line-height: 50px;
        text-align: center;
      }
    }
    li {
      border-top: 5px solid #ffff;
      display: flex;
      width: 300px;
      height: 65px;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfdf;
      .rank {
        width: 50px;
        color: #2c3e50;
        font-size: 20px;
        height: 20px;
        font-weight: bold;
        text-align: center;
      }
      img {
        width: 50px;
        height: 50px;
        cursor:pointer;
      }
      .song {
        color: #2c3e50;
        font-size: 15px;
        width: 100px;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor:pointer;
      }
      .name {
        color: #2c3e50;
        font-size: 12px;
        width: 50px;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 5px;
      }
    }
  }
}
</style>
