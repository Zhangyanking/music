import Vue from 'vue'
import Vuex from 'vuex'
import recordModule from './modules/record'
import musiaianModule from './modules/musician'
import playerModule from './modules/player'
import loginModule from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginModule,
    recordModule,
    musiaianModule,
    playerModule,
  },
})
