<template>
  <div class="musician">
    <mn-title></mn-title>
    <mn-list></mn-list>
  </div>
</template>

<script>
import mnTitle from './mn-title.vue'
import mnList from './mn-list.vue'
export default {
  name: 'musician',
  components: {
    mnTitle,
    mnList,
  },
}
</script>

<style lang="scss">

</style>
