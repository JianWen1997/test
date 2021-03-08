
import {reqShopCart,reqDeleteCartItem,reqAddCartItem,reqChangeShop} from "../../api"
const state = {
  shopcartList:[]
  
}
const mutations = {
  RECEIVE_SHOP_CART(state,shopcartList){
    state.shopcartList = shopcartList
  }
  
}
const actions = {
  allChange({commit,dispatch},flag){


    state.shopcartList.forEach(item=>{
      reqChangeShop(item.id,{idChecked:flag})
    })
    dispatch('getShopCart')

  },
  //购物车页面
  async getShopCart({commit}){
    const result = await reqShopCart()
    //console.log(result)
    //通知mutations
    commit('RECEIVE_SHOP_CART',result)   
  },
  //删除商品
  async deleteCartItem({commit,dispatch},skuId){
    await reqDeleteCartItem(skuId)
    dispatch('getShopCart')
    
  },
  //删除选中的商品
  deleteShop({commit},dispatch){
    state.shopcartList.forEach(item=>{
      if(item.idChecked){
        reqDeleteCartItem(item.id)
      }
    })
  },
  addShop({commit,dispatch},data){
    dispatch('getShopCart').then(async ()=>{
      const flag = state.shopcartList.some(item=>{
        return item.id == data.id
      })  
      console.log(flag)
      if(!flag){
        await reqAddCartItem(data)
      }                                           
      dispatch('getShopCart')
    })
    
    
  },
  //清空购物车
  deleteAllShop({commit,dispatch}){
    state.shopcartList.forEach(item=>{
      reqDeleteCartItem(item.id)
    })
  }
}
const getters = {
  //计算购物的总数量
  totalNumber(state){
    return state.shopcartList.reduce((preTotal,itemCart)=>{
      return preTotal+(itemCart.idChecked?itemCart.num:0)
    },0)
  },
  //计算购物的总价格
  totalPrice(state){
    return state.shopcartList.reduce((preTotal,itemCart)=>{
      return preTotal+(itemCart.idChecked?itemCart.num*itemCart.price:0)
    },0)
  },
  //是否全选
  isAllChecked(state,getters){
    return state.shopcartList.every(cariItem=>{
      return cariItem.idChecked
    })&&getters.totalNumber>0
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}