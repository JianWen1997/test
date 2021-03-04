//引入Home
import Home from '../pages/Home/Home.vue'


//引入Search
import Search from '../pages/Search/Search.vue'
//引入Detail
import Detail from '../pages/Detail/Detail.vue'

//引入ShopCart
import ShopCart from '../pages/ShopCart/ShopCart.vue'

export default [
  //Home路由
  {
    path: '/',
    component: Home
  },

  //Search路由
  {
    //1 path:'/search/:keyword',
    //2 path:'search',
    /*3 path:'/search/:keyword?',
    name:'search', */
    //4path:'/search',
    path: '/search/:keyword?', //?参数可传可不传
    name: 'search',
    component: Search,
  },
  //Detail路由
  {
    path: '/detail/:skuId',
    name: 'detail',
    component: Detail,
  },

  //ShopCart路由
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart
  },


  //路由的重定向
  {
    path: '/',
    redirect: '/'
  }

]