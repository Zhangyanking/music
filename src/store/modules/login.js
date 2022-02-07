import { reqLog } from '@/api/login.js'
const loginModule = {
  namespaced: true,
  state: {
    por: {},
    sw: null,
    userData: null,
  },
  mutations: {
    user(state, por) {
      state.por = por
    },
    changesw(state, data) {
      state.userData = data.list
      state.sw = data.total
    },
  },
  actions: {
    sing(store) {
      const a = store.state.por
      reqLog(a).then(data => {
        console.log(data)
        store.commit('changesw', data)
      })
    },
  },
}
export default loginModule
