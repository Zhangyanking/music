<template>
  <div class="rdTitle">
    <div class="box">
      <p>流派</p>
      <ul>
        <li
          v-for="itme in box1"
          :key="itme.id"
          @click="(box1Act = itme.id), sendGenre(itme.id)"
          :class="box1Act == itme.id ? 'active' : ''"
        >
          {{ itme.type }}
        </li>
      </ul>
    </div>
    <div class="box">
      <p>排序</p>
      <ul>
        <li
          v-for="itme in box2"
          :key="itme.id"
          @click="box2Act = itme.id,sendOrder(itme.id)"
          :class="box2Act == itme.id ? 'active' : ''"
        >
          {{ itme.type }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'rdTitle',
  data() {
    return {
      box1: [
        {
          type: '全部',
          id: '',
        },
        {
          type: '流行',
          id: 1,
        },
        {
          type: '民谣',
          id: 3,
        },
        {
          type: '电子',
          id: 9,
        },
        {
          type: '摇滚',
          id: 2,
        },
        {
          type: '金属',
          id: 7,
        },
        {
          type: '说唱',
          id: 12,
        },
        {
          type: 'R＆B',
          id: 10,
        },
        {
          type: '爵士',
          id: 4,
        },
        {
          type: '蓝调',
          id: 6,
        },
        {
          type: '纯音乐',
          id: 5,
        },
        {
          type: '新世纪',
          id: 16,
        },
        {
          type: '电台',
          id: 17,
        },
        {
          type: '儿童',
          id: 18,
        },
      ],
      box2: [
        {
          type: '最热',
          id: 0,
        },
        {
          type: '最新',
          id: 1,
        },
      ],
      box1Act: 0,
      box2Act: 0,
    }
  },
  methods: {
    ...mapActions('recordModule', ['rdList']),
    ...mapMutations('recordModule', ['changeGenre_id', 'changeOrder_by']),
    sendGenre(id) {
      this.changeGenre_id(id)
      this.rdList()
    },
    sendOrder(by) {
      this.changeOrder_by(by)
      this.rdList()
    },
  },
}
</script>

<style lang="scss" scoped>
.rdTitle {
  width: 1000px;
  margin: 0 auto;
  .box {
    display: flex;
    width: 1000px;
    height: 50px;
    justify-content: flex-start;
    align-items: center;
    p {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 18px;
      background-color: #db3f2b;
      color: #ffff;
      padding: 5px;
    }
    ul {
      display: flex;
      flex-direction: row;
      li {
        margin-left: 30px;
        cursor: pointer;
        color: #2c3e50;
      }
      li:hover {
        color: #db3f2b;
      }
      .active {
        color: #db3f2b;
      }
    }
  }
}
</style>
