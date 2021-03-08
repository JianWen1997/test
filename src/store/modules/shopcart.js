
import {reqShopCart,reqDeleteCartItem,reqAddCartItem} from "../../api"
const state = {
  shopcartList:[]
  
}
const mutations = {
  RECEIVE_SHOP_CART(state,shopcartList){
    state.shopcartList = shopcartList
  }
  
}
const actions = {
  //购物车页面
  async getShopCart({commit}){
    const result = await reqShopCart()
    //console.log(result)
    //通知mutations
    commit('RECEIVE_SHOP_CART',result)   
  },
  //删除选中的商品
  async deleteCartItem({commit,dispatch},skuId){
    await reqDeleteCartItem(skuId)
    dispatch('getShopCart')
    
  },
  async addShop({commit,dispatch},data){
    
    const flag = state.shopcartList.some(item=>{
      
      return item.id === data.id
    })  
    console.log(flag)
    if(!flag){
      await reqAddCartItem(data)
    }                                           
    dispatch('getShopCart')
  }

}
const getters = {
  //计算购物的总数量
  totalNumber(state){
    return state.shopcartList.reduce((preTotal,itemCart)=>{
      return preTotal+itemCart.num
    },0)
  },
  //计算购物的总价格
  totalPrice(state){
    return state.shopcartList.reduce((preTotal,itemCart)=>{
      return preTotal+(itemCart.num*itemCart.price)
    },0)
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}