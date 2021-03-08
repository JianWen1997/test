
import {reqBanner} from '../../api'
const state = {
  bannerList:[],
  userInfo:{}
  
}
const mutations = {
  RECEIVE_BANNERS(state,bannerList){
    state.bannerList = bannerList
  },

}
const actions = {
  //轮播图信息
  async getBanners({commit}){
    const result = await reqBanner()
    //console.log(result)
    commit('RECEIVE_BANNERS',result)  
  },


}
const getters = {
 
}

export default {
  state,
  mutations,
  actions,
  getters
}