<template>
  <div class="musicPlayer">
    <div class="title">
      <img :src="img_url" />
      <div>
        <p>{{ song_name }}</p>
        <span>{{song_ather}}</span>
      </div>
    </div>
    <audio :src="song_url" controls @ended="overAudio" autoplay></audio>
    <!-- <audio>标签里有个ended属性，是用来判断音频是否播放完毕，在vue中可以利用用事件监听音乐是否播放完毕 -->
  <div class="like"><button @click="add()">收藏</button></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'musicPlayer',
  computed: {
    ...mapState('playerModule', ['song_url', 'img_url', 'song_name', 'song_ather']),
    ...mapState('loginModule', ['sw']),
  },
  methods: {
    ...mapActions('playerModule', ['reqSong']),
    ...mapMutations('playerModule', ['collection']),
    overAudio() {
      this.reqSong()
    },
    add() {
      if (this.sw) {
        if (this.img_url) {
          alert('添加成功')
          this.collection()
        } else {
          alert('请选择歌曲')
        }
      } else {
        this.$router.push({ path: '/my/login' })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.musicPlayer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 240, 240);
  .title {
    height: 60px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 50px;
      margin-right: 5px;
      border-radius: 10px;
    }
    div {
      p {
        width: 100px;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  audio {
    width: 600px;
  }
  .like {
    button {
      width: 70px;
      height: 30px;
      border-radius: 50px;
      border: none;
      background-color: rgb(165, 165, 165);
      cursor: pointer;
      cursor: hand;
    }
  }
}
</style>
