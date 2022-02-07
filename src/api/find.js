import http from '@/utlis/http.js'
import API from './API.js'
export const repBannerData = () => {
  return http({
    url: API.BANNER_API,
    method: 'GET',
  })
}
export const repRcommend = () => {
  return http({
    url: API.RECOMMEND_API,
    method: 'GET',
  })
}
export const repMusician = () => {
  return http({
    url: API.MUSICIAN_API,
    method: 'GET',
  })
}
export const repRecord = () => {
  return http({
    url: API.RECORD_API,
    method: 'GET',
  })
}
export const repRanking = () => {
  return http({
    url: API.RANKING_API,
    method: 'GET',
  })
}
export const repMV = () => {
  return http({
    url: API.MV_API,
    method: 'GET',
  })
}
