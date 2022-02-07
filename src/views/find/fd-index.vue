<template>
  <div class="find">
    <banner></banner>
    <div class="nav">
      <router-link to="/find/recommend" active-class="active"><span>推荐音乐</span></router-link> |
      <router-link to="/find/musician" active-class="active"><span>推荐音乐人</span></router-link> |
      <router-link to="/find/record" active-class="active"><span>推荐唱片</span></router-link>
    </div>
    <div>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <ranking></ranking>
    <mv></mv>
    <div class="bottom"></div>
  </div>
</template>

<script>
import banner from '@/components/banner.vue'
import ranking from './fd-ranking.vue'
import mv from './fd-mv.vue'
export default {
  name: 'find',
  components: {
    banner,
    ranking,
    mv,
  },
}
</script>

<style lang="scss" scoped>
.find {
  width: 1000px;
  margin: 0 auto;
  .nav {
    height: 20px;
    padding-top: 50px;
    border-bottom: 2px solid #a7a7a7;
    padding-bottom: 10px;
    span {
      font-size: 12px;
      margin-right: 10px;
      margin-left: 10px;
    }
    .active {
      span {
        font-size: 20px;
        color: #db3f2b;
        font-weight: bold;
      }
    }
  }
  .bottom {
    height: 60px;
  }
}
</style>
