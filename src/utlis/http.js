import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'development' ? '/fxdl' : 'http://www.9sky.com'
const http = axios.create({
  baseURL,
  timeout: 5000,
})
http.interceptors.response.use(response => {
  if (response.status >= 200 && response.status < 300) {
    const data = response.data
    return data
  }
})
export default http
