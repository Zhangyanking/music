<template>
  <div class="rdDetails">
    <h1>抱歉！唱片详情页的接口拿不到。</h1>
  </div>
</template>

<script>
export default {
  name: 'rdDetails',
  created() {
    console.log(this.$route.query.discID)
  },
}
</script>

<style lang="scss" scoped>
.rdDetails{
  width: 1000px;
   margin: 0 auto;
  h1{
    text-align: center;
    font-size: 30px;
  }
}

</style>
