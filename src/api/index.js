import ajaxMock from './ajaxMock'

import ajax from './ajax'

export const reqCategoryList = () =>ajaxMock.get('/category')



export const reqUser = ()=>ajax.get('/user')

//购物车页面
export const reqShopCart = ()=>ajax.get(`/shopcart`)
//删除购物车商品
export const reqDeleteCartItem = (skuId) =>ajax.delete(`/shopcart/${skuId}`)




//添加到购物车
export const reqAddCartItem = (data) =>ajax.post(`/shopcart`,data)

//获取轮播图
export const reqBanner = ()=>ajax.get('/banner')

//获取search
export const reqDetail = (id)=>ajax.get(`/detail/${id}`)
//修改商品选中状态
export const reqChangeShop = (id,data)=>ajax.patch(`/shopcart/${id}`,data)
//修改商品的数量详情页
export const reqChangeDetailShop = (id,data)=>ajax.patch(`/detail/${id}`,data)
// 成功添加购物车页面
export const addCartList =() => ajax.get('/cartList')