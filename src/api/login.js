import http from '@/utlis/http.js'
export const reqLog = ({ user, password }) => {
  return http({
    url: 'http://rap2api.taobao.org/app/mock/297970/user/login',
    method: 'POST',
    data: {
      user,
      password,
    },
  })
}
