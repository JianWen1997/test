
import {reqDetail} from '../../api'
const state = {
  detailInfo:{}
  
}
const mutations = {
  RECEIVE_DETAIL(state,detailInfo){
    state.detailInfo=detailInfo
  }
  
}
const actions = {
  async getDetailInfo({commit},id){
    const result = await reqDetail(id)
    //console.log(result)
    commit('RECEIVE_DETAIL',result)
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