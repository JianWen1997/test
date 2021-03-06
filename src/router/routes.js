//引入Home
//import Home from '../pages/Home/Home.vue'
const Home =()=>import ('../pages/Home/Home.vue')


//引入Search
//import Search from '../pages/Search/Search.vue'
const Search =()=>import ('../pages/Search/Search.vue')

//引入Detail
//import Detail from '../pages/Detail/Detail.vue'
const Detail =()=>import ('../pages/Detail/Detail.vue')


//引入ShopCart
//import ShopCart from '../pages/ShopCart/ShopCart.vue'
const ShopCart =()=>import ('../pages/ShopCart/ShopCart.vue')
const Login =()=>import ('../pages/Login')
const Register =()=>import ('../pages/Register')

// 动态引入CartSuccess
const CartSuccess =() => import ('../pages/CartSuccess/CartSuccess.vue')

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
    path: '/detail',
    name: 'detail',
    component: Detail,
  },

  //ShopCart路由
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true //隐藏Footer组件
    },
    //路由独享守卫
    // beforeenter:(to,from,next)=>{
    //   //判断是不是已经登录过 如果已经登录过,直接跳转到首页
    //   const userInfo = store.state.user.userInfo
    //   if(userInfo.name){
    //     next('/')
    //   }else{
    //     next()
    //   }
    // }
  },
  //Register路由
  {
    path: '/register',
    component: Register,
    meta: {
      isHideFooter: true //隐藏Footer组件
    }
  },
    // cartSuccess
    {
      path:'/cartsuccess',
      name:'cartsuccess',
      component:CartSuccess
    },
  


  //路由的重定向
  {
    path: '/',
    redirect: '/'
  }

]