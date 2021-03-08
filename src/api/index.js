import ajaxMock from './ajaxMock'

import ajax from './ajax'

export const reqCategoryList = () =>ajaxMock.get('/category')



export const reqUser = ()=>ajaxMock.get('/user')

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