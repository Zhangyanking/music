<template>
  <div class="mnList">
    <div class="list">
      <div class="card" v-for="data in List" :key="data.musician_id"  @click="jumpRecord(data.musician_id)">
        <img :src="data.img_url" alt="" />
        <p class="name">{{data.name}}</p>
        <p class="author">{{data.sect}}</p>
      </div>
    </div>
     <div class="bottom"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'mnList',
  computed: {
    ...mapState('musiaianModule', ['List']),
  },
  methods: {
    ...mapActions('musiaianModule', ['reqList', 'reqListNO']),
    handleScroll() {
      const scrollAmount = document.documentElement.scrollTop || document.body.scrollTop
      const higth = document.body.scrollHeight
      if (higth - scrollAmount < 680) {
        this.reqListNO()
      }
    },
    jumpRecord(musicianID) {
      this.$router.push({ path: '/musician/details', query: { musicianID } })
    },
  },
  created() {
    if (this.List.length === 0) {
      this.reqList()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
.mnList {
  width: 1000px;
  margin: 0 auto;
  .list {
    width: 1000px;
    display: flex;
    justify-content: space-evenly;
    border-top: 15px solid #ffffff;
    flex-wrap: wrap;
    .card {
      width: 210px;
      height: 260px;
      background-color: #dfdfdf;
      margin-bottom: 40px;
      cursor: pointer;
      img {
        width: 210px;
        height: 220px;
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
   .bottom {
    height: 60px;
  }
}
</style>
