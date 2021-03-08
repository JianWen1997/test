<template>
  <div class="spec-preview">
    <img :src="detailInfo.imgUrl" />
    <div class="event" ref="event" @mousemove="handlerMove"></div>
    <div class="big">
      <img :src="detailInfo.imgUrl" ref="bigImg"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>
<script>
export default {
  name: "Zoon",
  props: {
    smallImg: String, 
    bigImg: String,
    detailInfo:Object 
  },
  mounted() {
    // 遮挡层的宽度
    this.maskWidth = this.$refs.event.clientWidth / 2
  },
  methods: {
    // 鼠标移动事件
    handlerMove(event) {
      // 鼠标移动时的横纵坐标
      const { offsetX, offsetY } = event
      // 遮挡层的对象
      const mask = this.$refs.mask
      // 大图
      const bigImg = this.$refs.bigImg
      // 遮挡层的宽度
      const maskWidth = this.maskWidth
      // left和top的值
      let left = offsetX - maskWidth / 2
      let top = offsetY - maskWidth / 2
      // 限制边界
      left = left < 0 ? 0 : left > maskWidth ? maskWidth : left
      top = top < 0 ? 0 : top > maskWidth ? maskWidth : top
      // 当前遮挡层的坐标
      mask.style.left = left + 'px'
      mask.style.top = top + 'px'
      // 移动大图
      bigImg.style.left = -left * 2 + 'px'
      bigImg.style.top = -top * 2 + 'px'
    },
  },
};
</script>
<style scoped>
.spec-preview{
    position: relative;
    width: 380px;
    height: 400px;
    border: 1px solid #ccc;
}
.spec-preview img{
    width: 100%;
    height: 100%;
}
.spec-preview .event{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
}
.spec-preview .mask{
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
}
.spec-preview .big{
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;
}
.spec-preview .big img{
    width: 200%;
    max-width: 200%;
    height: 200%;
    position: absolute;
    left: 0;
    top: 0;
}
.spec-preview .event:hover~.mask,
.spec-preview .event:hover~.big{
    display: block;
}
</style>