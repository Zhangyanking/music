import { REQmusiaianList, REQmusiaianLiseNo } from '@/api/musician.js'
const musiaianModule = {
  namespaced: true,
  state: {
    switch: true,
    genre_id: '',
    order_by: '',
    page_no: 1,
    List: [],
  },
  getters: {

  },
  mutations: {
    changeGenre_id(state, id) {
      state.genre_id = id
    },
    changeOrder_by(state, by) {
      state.order_by = by
    },
    changeList(state, data) {
      state.List = data
      state.page_no = 1
    },
    changeListNo(state, data) {
      state.page_no++
      state.List = [...state.List, ...data]
      state.switch = true
    },
  },
  actions: {
    reqList(store) {
      REQmusiaianList(store.state.genre_id, store.state.order_by).then(data => {
        store.commit('changeList', data.data.list)
      })
    },
    reqListNO(store) {
      if (store.state.switch) {
        store.state.switch = false
        REQmusiaianLiseNo(store.state.genre_id, store.state.order_by, store.state.page_no + 1).then(data => {
          store.commit('changeListNo', data.data.list)
        })
      }
    },
  },
}
export default musiaianModule
