<template>
  <div class="fdRecord" v-if="list">
    <div class="card" v-for="disc in list" :key="disc.disc_id" @click="jumpRecord(disc.disc_id)">
      <img :src="disc.disc_img_url" />
      <p class="name">{{ disc.disc_name }}</p>
      <p class="author">{{ disc.musician_name }}</p>
    </div>
  </div>
</template>

<script>
import { repRecord } from '@/api/find.js'
export default {
  name: 'fdRecord',
  data() {
    return {
      list: null,
    }
  },
  methods: {
    jumpRecord(discID) {
      this.$router.push({ path: '/record/details', query: { discID } })
    },
  },
  created() {
    repRecord().then((data) => {
      this.list = data.data.free_disclist
    })
  },
}
</script>

<style lang="scss" scoped>
.fdRecord {
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  border-top: 15px solid #ffffff;
  .card {
    width: 160px;
    height: 200px;
    background-color: #dfdfdf;
    cursor:pointer;
    img {
      width: 160px;
      height: 160px;
    }
    .name {
      font-size: 15px;
      color: #2c3e50;
      margin-top: 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .author {
      margin-top: 2px;
      color: #2c3e50;
    }
  }
}
</style>
