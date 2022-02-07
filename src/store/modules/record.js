import { REQrecorddList, REQrecordLiseNo } from '@/api/record.js'
const recordModule = {
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
    rdList(store) {
      REQrecorddList(store.state.genre_id, store.state.order_by).then(data => {
        store.commit('changeList', data.data.list)
      })
    },
    rdListNO(store) {
      if (store.state.switch) {
        store.state.switch = false
        REQrecordLiseNo(store.state.genre_id, store.state.order_by, store.state.page_no + 1).then(data => {
          store.commit('changeListNo', data.data.list)
        })
      }
    },
  },
}
export default recordModule
