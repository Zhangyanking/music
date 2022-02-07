<template>
<!-- 标题 -->
  <div class="titleComponent">
    <div class="logo">
      <img src="../assets/logos.png" />
      <p class="title">音乐是色彩最多的颜色</p>
    </div>
    <div class="text">
      <p class="subtitle">This is the color Party of music</p>
      <!-- <img src="../assets/search.png" /> -->
    </div>
    <!-- 导航 -->
    <div class="navigation">
      <ul>
        <li>
          <router-link to="/find" custom v-slot="{ navigate,isActive }">
            <span @click="navigate" :class="isActive? 'active':''" >发现</span>
          </router-link>
        </li>
        <li>
          <router-link to="/record" custom v-slot="{ navigate,isActive }">
           <span @click="navigate" :class="isActive? 'active':''" >唱片</span>
          </router-link>
        </li>
        <li>
          <router-link to="/mnIndex" custom v-slot="{ navigate,isActive }">
           <span @click="navigate" :class="isActive? 'active':''" >音乐人</span>
          </router-link>
        </li>
        <li>
          <router-link to="/my" custom v-slot="{ navigate,isActive }">
           <span @click="navigate" :class="isActive? 'active':''" >我的音乐</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'titleComponent',
  data() {
    return {
      list: [],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.titleComponent {
  min-width: 1000px;
  .logo {
    //logo标题
    display: flex;
    justify-content: center;
    height: 80px;
    align-items: center;
    background-color: #979797;
    img {
      width: 60px;
      margin-right: 10px;
      margin-left: 10px;
    }
    p {
      font-weight: bold;
      font-size: 30px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
  .text {
    //副标题
    background-color: #979797;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

    p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 15px;
    }
    img {
      width: 20px;
      margin-left: 10px;
      cursor: pointer;
      cursor: hand;
    }
  }
  .navigation {
    background-color: #d3d3d3;
    height: 37px;
    border-bottom: 2px solid #db3f2b;
    // margin-bottom: 0px;
    ul {
      display: flex;
      justify-content: center;
      li {
        margin-left: 30px;
        margin-right: 30px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        cursor:pointer;
        span {
          font-weight: bold;
          font-size: 20px;
          color: #2c3e50;
          padding-bottom: 5px;
        }
        .active {
            color: #db3f2b;
            border-bottom: 6px solid #db3f2b;
          }
      }
    }
  }
}
</style>
