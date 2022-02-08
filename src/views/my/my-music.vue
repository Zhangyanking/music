<template>
  <div class="myMusic">
    <div class="title">
      <p>{{ user }}的收藏歌单</p>
    </div>
    <!-- <h1 v-if="collection_list.length == 0">您的列表空空如也</h1> -->
    <transition-group name="act" mode="out-in" tag="div">
      <h1 v-if="collection_list.length == 0" key="asasa">您的列表空空如也</h1>
      <div class="cord" v-for="data in collection_list" :key="data.song_id">
        <img :src="data.disc_img_url" alt="" @click="play(data.song_id)" />
        <p class="song" @click="play(data.song_id)">{{ data.song_name }}</p>
        <p class="name" @click="play(data.song_id)">{{ data.musician_name }}</p>
        <p class="delete" @click="dele(data.song_id)">删除</p>
      </div>
    </transition-group>
    <div class="buttom"></div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'myMusic',
  computed: {
    ...mapState('loginModule', ['userData']),
    ...mapState('playerModule', ['collection_list']),
    user() {
      return this.userData.name
    },
  },
  methods: {
    ...mapMutations('playerModule', ['songID', 'collection_dele']),
    ...mapActions('playerModule', ['reqSong']),
    play(songId) {
      this.songID(songId)
      this.reqSong()
      console.log(this.collection_list)
    },
    dele(id) {
      this.collection_dele(id)
    },
  },
  mounted() {
    console.log(this.collection_list)
  },
}
</script>

<style lang="scss" scoped>
.myMusic {
  width: 1000px;
  margin: 0 auto;
  padding-top: 30px;
  h1 {
    text-align: center;
    font-size: 28px;
    color: #2c3e50;
  }
  .title {
    width: 500px;
    margin: 0 auto;
    padding-bottom: 30px;
    p {
      color: #2c3e50;
      font-size: 50px;
      font-weight: bold;
      text-align: center;
    }
  }
  .cord {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 50px;
    margin: 0 auto;
    background-color: #dfdfdf;
    margin-bottom: 10px;
    img {
      width: 48px;
      height: 48px;
      margin-right: 10px;
      cursor: pointer;
    }
    .song {
      max-width: 100px;
      margin-right: 10px;
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
    .name {
      max-width: 100px;
      margin-right: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
    .delete {
      cursor: pointer;
      background-color: none;
      margin-right: 5px;
    }
  }
  .cord:hover {
    background-color: #a8a8a8;
  }
  //动画
  .act-enter-active { /* 进场动画 */
    animation: act 1.5s;
  }

  .act-leave-active { /* 退场动画 */
    animation: act 1.5s reverse;
  }

  @keyframes act {
    from {
      opacity: 0;
      transform: translateX(100px);
    }

    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .buttom {
    height: 60px;
  }
}
</style>
