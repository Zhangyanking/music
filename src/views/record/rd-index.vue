<template>
  <div class="record">
    <rd-title></rd-title>
    <rd-list></rd-list>
  </div>
</template>

<script>
import rdTitle from './rd-title.vue'
import rdList from './rd-list.vue'
export default {
  name: 'record',
  components: {
    rdTitle,
    rdList,
  },
}
</script>

<style lang="scss">

</style>
