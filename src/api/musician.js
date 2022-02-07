import http from '@/utlis/http.js'
import API from './API.js'

export const REQmusiaianList = (id, by) => {
  return http({
    url: `${API.MU_LIST_API}?genre_id=${id}&price_type=&order_by=${by}&page_no=1`,
    method: 'GET',
  })
}
export const REQmusiaianLiseNo = (id, by, no) => {
  return http({
    url: `${API.MU_LIST_API}?genre_id=${id}&price_type=&order_by=${by}&page_no=${no}`,
    method: 'GET',
  })
}
