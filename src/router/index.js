
//引入vue
import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'

//引入路由组件
import routes from './routes'



//声明使用插件
Vue.use(VueRouter)

//重写router原型对象的push和replace方法
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location,onComplete=()=>{},onAbort){
    return originPush.call(this,location,onComplete,onAbort)
}
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(location,onComplete=()=>{},onAbort){
    return originReplace.call(this,location,onComplete,onAbort)
}

//实例化VueRouter
const router =  new VueRouter({
  mode:'history',//无#模式
  routes,
    //设置滚动的位置
  scrollBehavior () {
    //设置初始位置
    return { x: 0, y: 0 }
  }
})



//并且暴露出去
export default router