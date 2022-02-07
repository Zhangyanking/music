<template>
  <div class="banner">
    <div class="swiper-container" >
      <div class="swiper-wrapper" >
        <div
          class="swiper-slide"
          v-for="(item, index) in list"
          :key="index + item.skip_id"
        >
          <!-- image_url,,,,skip_id -->
          <img :src="item.image_url" v-if="!list_wht"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
  </div>
</template>
<script>
import 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import { repBannerData } from '@/api/find.js'
export default {
  data() {
    return {
      list: null,
      list_wht: false,
    }
  },
  created() {
    repBannerData().then((data) => {
      this.list = data.data.list
    })
  },
  mounted() {

  },
  updated() {
    // 因为数据是异步加载，所以要在更新之后再配置Swiper
    // Swiper设置
    new Swiper('.swiper-container', {
      effect: 'coverflow',
      slidesPerView: 1,
      centeredSlides: true,
      obsever: true,
      // 是否循环
      loop: true,
      autoplay: {
        // swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
        disableOnInteraction: false,
        // 自动播放时间：毫秒
        delay: 5000,
      },
      pagination: {
        // 小圆点
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
}
</script>
<style lang="scss" scoped>
.banner {
  .swiper-container {
    width: 1000px;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
