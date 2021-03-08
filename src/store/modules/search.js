import ajax from '../../api/search.js'
import {SEARCHDATA} from '../mutation-types'
const state = {
  attr1: {},
  attr2: {},
  attr3: {},
  attr4: {},
  attr5: {},
  attr6: {},
  productList: [],
  advertising: []
}
const mutations = {
  [SEARCHDATA]: (state, {data, attr}) => {
    state.attr1 = attr[0]
    state.attr2 = attr[1]
    state.attr3 = attr[2]
    state.attr4 = attr[3]
    state.attr5 = attr[4]
    state.attr6 = attr[5]
    state.productList = data,
    state.advertising = data.slice(0, 10)
  }
}
const actions = {
  async getSearchData({commit},sku) {
    const re = await ajax(`/search?name=${sku}`)
    if(re.status === 200){
      commit(SEARCHDATA, re.data[0])
    }
  }
}
const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}