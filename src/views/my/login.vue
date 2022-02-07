<template>
  <div class="login">
    <div class="box">
      <div class="user">
        <input type="text" placeholder="请输入账号" v-model="text" />
      </div>
      <div class="password">
        <input type="password" placeholder="请输入密码" v-model="word"/>
      </div>
      <div class="but">
        <button @click="but()">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      text: '',
      word: '',
    }
  },
  computed: {
    ...mapState('loginModule', ['sw']),
  },
  methods: {
    ...mapMutations('loginModule', ['user']),
    ...mapActions('loginModule', ['sing']),
    but() {
      const por = {
        user: this.text,
        password: this.word,
      }
      this.user(por)
      this.sing()
      if (this.sw) {
        this.$router.push({ path: '/my/myMusic' })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  width: 1000px;
  margin: 0 auto;
  padding-top: 50px;
  .box {
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    width: 500px;
    height: 200px;
    background-color:#dfdfdf;
    input{
      width: 200px;
    }
    button{
      width: 80px;
      border-radius: 5px;
      color:#fff;
      background-color:#db3f2b;
      border-color: #fff;
    }
  }
}
</style>
