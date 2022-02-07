<template>
  <div class="mv">
    <div class="title">
      <h2>精选MV</h2>
    </div>
    <div class="content" v-if="list">
      <div class="card" v-for="mv in list" :key="mv.mv_id">
        <img :src="mv.mv_img_url" />
        <p class="name">{{ mv.mv_name }}</p>
        <p class="author">{{ mv.musician_name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { repMV } from '@/api/find.js'
export default {
  name: 'mv',
  data() {
    return {
      list: null,
    }
  },
  created() {
    repMV().then((data) => {
      this.list = data.data.list
    })
  },
}
</script>

<style lang="scss" scoped>
.mv {
  margin-top: 30px;
  .title {
    height: 40px;
    border-bottom: 2px solid #a7a7a7;
    h2 {
      font-size: 20px;
      font-weight: bold;
      color: #db3f2b;
      line-height: 40px;
      margin-left: 5px;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .card {
      width: 450px;
      height: 280px;
      margin-top: 10px;
      img {
        width: 450px;
        height: 225px;
        cursor: pointer;
      }
      .name {
        font-size: 20px;
        line-height: 30px;
        color: #2c3e50;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .author {
        font-size: 15px;
        color: #2c3e50;
      }
    }
  }
}
</style>
