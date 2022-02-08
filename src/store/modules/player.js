import { REQsong } from '@/api/song.js'
const playerModule = {
  namespaced: true,
  state: {
    song_id: '',
    song_url: '',
    img_url: '',
    song_name: '',
    song_ather: '',
    collection_list: [],
    data: '',
    a: '',
  },
  getters: {
  },
  mutations: {
    songID(state, id) {
      state.song_id = id
    },
    changeSong(state, data) {
      state.song_url = data.data[0].song_url
      state.img_url = data.data[0].disc_img_url
      state.song_name = data.data[0].song_name
      state.song_ather = data.data[0].musician_name
      state.data = data.data[0]
      state.song_id++
    },
    collection(state) {
      var arr = state.collection_list.some(function(x) {
        return x.song_id === state.data.song_id
      })
      if (state.data.song_id) {
        if (!arr) {
          state.collection_list.push(state.data)
        }
      }
    },
    collection_dele(state, id) {
      state.collection_list = state.collection_list.filter(it => it.song_id !== id)
    },
  },
  actions: {
    reqSong(store) {
      if (store.state.song_id) {
        REQsong(store.state.song_id).then(data => {
          store.commit('changeSong', data)
        })
      }
    },
  },
}
export default playerModule
