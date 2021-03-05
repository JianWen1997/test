//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入router
import router from './router'
//引入store
import store from './store'
//引入swiper
import './plugins/swiper'
//引入mock
import './mock'

// 引入validate插件文件
import '@/plugins/validate'

//引入element-ui
import './plugins/element-ui'
import 'element-ui/lib/theme-chalk/index.css';
//引入TypeNav组件
import TypeNav from './components/TypeNav'

//引入API
import * as API from './api'
//引入懒加载的插件
import VueLazyLoad from 'vue-lazyload'
//引入懒加载的图片
import loading from './assets/images/loading.gif'
Vue.use(VueLazyLoad,{
    loading
})

//不显示浏览器端的默认信息
Vue.config.productionTip = false


// 把API接口函数暴露在每个组件的实例对象上
Vue.prototype.$API = API


//将TypeNav组件注册成全局公共组件
Vue.component('TypeNav' , TypeNav)


//实例化vue
new Vue({
  //在实例化对象之前绑定事件总线
  beforeCreate(){
    Vue.prototype.$bus = new Vue()
  },
  render: h => h(App),
  //注册路由器
  router,
  //注册store
  store
}).$mount('#app')
