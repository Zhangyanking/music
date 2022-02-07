<template>
  <div class="App">
    <title-component></title-component>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <music-player></music-player>
  </div>
</template>

<script>
import titleComponent from './components/titleComponent.vue'
import musicPlayer from './components/musicPlayer.vue'
export default {
  name: 'APP',
  components: {
    titleComponent,
    musicPlayer,
  },
}
</script>

<style lang="scss">
</style>
