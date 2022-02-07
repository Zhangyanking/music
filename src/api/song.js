import http from '@/utlis/http.js'
import API from './API.js'
export const REQsong = (id) => {
  return http({
    url: `${API.SONG_API}?ids=${id}`,
    method: 'GET',
  })
}
