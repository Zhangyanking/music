<template>
  <div class="recommend" v-if='list'>
    <!-- <div class="title">
      <h1>热门单曲</h1>
    </div> -->
    <div class="list" v-for="(song,index) in list" :key="song.songId" >
      <div class="box">
        <div class="ranking">
          <p>NO.{{index+1}}</p>
        </div>
        <div class="author" @click="play(song.songId)">
          <p class="name">{{song.songName}}</p>
          <p class="people">{{song.musicianName}}</p>
        </div>
        <div class="number">
          <p><span>{{song.playCount}}</span>人在听</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { repRcommend } from '@/api/find.js'
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'recommend',
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
    repRcommend().then((data) => {
      this.list = data.data.list
    })
  },
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 1000px;
  margin: 0 auto;
  .title {
    width: 1000px;
    height: 50px;
    border-bottom: 2px solid #a7a7a7;
    h1 {
      color: #db3f2b;
      font-size: 20px;
      line-height: 50px;
      margin-left: 10px;
    }
  }
  .list {
    border-top: 4px solid #ffff;
    .box {
      width: 1000px;
      height: 50px;
      background-color: #dfdfdf;
      display: flex;
      .ranking {
        width: 150px;
        height: 50px;
        p {
          line-height: 50px;
          font-size: 20px;
          text-align: center;
          font-weight: bold;
          color: #db3f2b;
        }
      }
      .author {
        width: 550px;
        height: 46px;
        padding-left: 50px;
        padding-top: 4px;
        .name {
          font-size: 18px;
          padding: 5px;
          color: #2c3e50;
          cursor:pointer;
        }
        .people {
          color: #2c3e50;
          padding-left: 5px;
          cursor:pointer;
        }
      }
      .number {
        width: 250px;
        height: 50px;
        line-height: 50px;
        p {
          text-align: center;
          font-size: 12px;
          color:  #2c3e50;
          span {
            font-size: 20px;
            color: #db3f2b;
          }
        }
      }
    }
  }
}
</style>
