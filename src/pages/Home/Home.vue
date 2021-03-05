<template>
  <div>
    <Banner :categoryList="categoryList" :bannerList="bannerList" />
    <Brand />
    <Today />
    <Brand />
    <Foryou />
  </div>
</template>
<script>
import Banner from './Banner/Banner.vue'
import Brand from './Brand/Brand.vue'
import Today from './Today/Today.vue'
import Foryou from './Foryou/Foryou.vue'
export default {
  name:'Home',
  components:{
    Banner,
    Brand,
    Today,
    Foryou
  },
      data(){
    return {
      categoryList:[],
      bannerList:[]
    }
    
  },
  async mounted(){
    
    const category = await this.$API.reqCategoryList()
    

    this.categoryList = category.data
    //console.log(this.categoryList)
    
    
    
    
  }
}
</script>