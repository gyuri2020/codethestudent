import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios

export default {
  async getProducts(name) {
    const url = 'https://bfwfai604e.execute-api.ap-northeast-2.amazonaws.com/default/getProducts?key=' + encodeURI(name)
    const method = 'get'
    const res = await axios({
      url,
      method,
    })
    return JSON.parse(res.data)
  },
}
