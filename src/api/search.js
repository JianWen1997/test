import axios from 'axios'
export default function (url, data={},method='get') {
  return axios({
    url: 'http://localhost:3000' + url,
    method,
    data
  })
}