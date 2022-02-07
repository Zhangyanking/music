<template>
  <div class="fdMusician" v-if="list">
    <div class="box" v-for="mag in list" :key="mag.musician_id"  @click="jumpRecord(mag.musician_id)">
      <div class="box-top">
        <img :src="mag.img_url" />
        <div class="introduce">
          <p class="name">{{ mag.name }}</p>
          <p class="type">{{ mag.sect }}</p>
        </div>
      </div>
      <div class="box-bottom">
        <p>{{ mag.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { repMusician } from '@/api/find.js'
export default {
  name: 'fdMusician',
  data() {
    return {
      list: null,
    }
  },
  methods: {
    jumpRecord(musicianID) {
      this.$router.push({ path: '/musician/details', query: { musicianID } })
    },
  },
  created() {
    repMusician().then((data) => {
      this.list = data.data.list
    })
  },
}
</script>

<style lang="scss" scoped>
.fdMusician {
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .box {
    background-color: #dfdfdf;
    width: 300px;
    border-top: 8px solid #ffffff;
    .box-top {
      width: 300px;
      height: 115px;
      border-bottom: 1px solid #a7a7a7;
      display: flex;
      padding-top: 15px;
      img {
        width: 100px;
        height: 100px;
        margin-left: 15px;
        margin-right: 15px;
        border-radius: 50%;
        cursor: pointer;
      }
      .introduce {
        width: 150px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          color: #2c3e50;
          font-size: 20px;
          margin-bottom: 5px;
          cursor: pointer;
        }
        .type {
          color: #2c3e50;
        }
      }
    }
    .box-bottom {
      width: 270px;
      padding: 15px;
      p {
        width: 270px;
        height: 80px;
        line-height: 20px;
        font-size: 15px;
        color: #2c3e50;
        cursor: pointer;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
