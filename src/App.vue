<template>
  <div>
    <Header />
    <!-- 展示路由组件 -->
    <router-view />
    <Footer v-show="!$route.meta.isHideFooter" />
  </div>
</template>
<script>
//引入Header组件
import Header from './components/Header'
//引入Footer组件
import Footer from './components/Footer'

export default {
  name:'App',
  //注册组件
  components:{
    Header,
    Footer
  },
  //页面加载完毕
 
}
</script>
<style lang="less" rel="stylesheet/less"  scoped>

</style>