<template>
  <Swiper
    :options="{
      slidesPerView: 5, // 显示几个图片
      slidesPerGroup: 5, // 每次移动几个图片
      // 前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }"
  >
    <swiper-slide>
      <img :src="detailInfo.imgUrl" alt="" />
    </swiper-slide>
    <swiper-slide>
        <img :src="detailInfo.imgUrl" alt="" />
    </swiper-slide>
    <swiper-slide>
        <img :src="detailInfo.imgUrl" alt="" />
    </swiper-slide>
    <swiper-slide>
        <img :src="detailInfo.imgUrl" alt="" />
    </swiper-slide>
    <swiper-slide>
        <img :src="detailInfo.imgUrl" alt="" />
    </swiper-slide>
    <swiper-slide>
        <img :src="detailInfo.imgUrl" alt="" />
    </swiper-slide>
    <swiper-slide>
        <img src="../images/3.jpg" alt="" />
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </Swiper>
</template>
<script>
export default {
  name: "ImageList",
  props:['detailInfo'],
  data() {
    return {
      currentIndex:0
    }
  },
  methods:{
    
  }
};
</script>
<style scoped>
Swiper{
    height: 56px;
    width: 380px;
    box-sizing: border-box;
    padding: 0 5px;
}
.swiper-container .swiper-slide img{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    padding: 2px;
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 10px;
}
.swiper-container .swiper-slide img .active{
    border: 2px solid #f60;
    padding: 1px;
}
.swiper-container .swiper-slide img :hover{
    border: 2px solid #f60;
    padding: 1px;
}
.swiper-container .swiper-button-next{
    left: auto;
    right: 0;
}
.swiper-container .swiper-button-prev{
    left: 0;
    right: auto;
}
.swiper-container .swiper-button-next
.swiper-container .swiper-button-prev{
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
}
.swiper-container .swiper-button-prev :after{
    font-size: 12px;
}
</style>