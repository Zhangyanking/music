<template>
  <div class="fdList">
    <div class="list">
      <div class="card" v-for="data in List" :key="data.disc_id" @click="jumpRecord(data.disc_id)">
        <img :src="data.disc_img_url" alt="" />
        <p class="name">{{data.disc_name}}</p>
        <p class="author">{{data.user_name}}</p>
      </div>
    </div>
     <div class="bottom"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'fdList',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('recordModule', ['List']),
  },
  methods: {
    ...mapActions('recordModule', ['rdList', 'rdListNO']),
    handleScroll() {
      const scrollAmount = document.documentElement.scrollTop || document.body.scrollTop
      const higth = document.body.scrollHeight
      if (higth - scrollAmount < 680) {
        this.rdListNO()
      }
    },
    jumpRecord(discID) {
      this.$router.push({ path: '/record/details', query: { discID } })
    },
  },
  created() {
    if (this.List.length === 0) {
      this.rdList()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
.fdList {
  width: 1000px;
  margin: 0 auto;
  .list {
    width: 1000px;
    display: flex;
    justify-content: space-evenly;
    border-top: 15px solid #ffffff;
    flex-wrap: wrap;
    .card {
      width: 160px;
      height: 200px;
      background-color: #dfdfdf;
      margin: 20px;
      cursor: pointer;
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
   .bottom {
    height: 60px;
  }
}
</style>
