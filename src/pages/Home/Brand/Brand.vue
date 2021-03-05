<template>
  <div class="brand">
    <div class="brand-outer">
      <div class="brandContainer">
        <div>京东秒杀</div>
        <div>还有两天结束</div>
      </div>
      <ul>
        <li>
          <img src="./images/02.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
        <li>
          <img src="./images/03.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
        <li>
          <img src="./images/04.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
        <li>
          <img src="./images/05.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
        <li>
          <img src="./images/06.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'Brand'
}
</script>
<style scoped lang="less" rel="stylesheet/less"> 
.brand{
  display:flex;
  width:100%;
  background-color: #eaeaea;
  .brand-outer{
    width:1200px;
    margin:0 auto;
    height:260px;
    display: flex;
    .brandContainer{
      width:190px;
      height:100%;
      background: url(./images/01.png);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      div{
        font-size: 20px;
        font-weight: bold;
        color: white;
      }
    }
    ul{
      display: flex;
    li{
      width:200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: white;
      img{
        width:140px;
        height:140px;
      }
      p{
        width:140px;
        text-overflow:ellipsis; 
        overflow:hidden;
        white-space: nowrap;
        font-size:12px
      }
      h4{
        width:140px;
        text-align: center;
        font-size: 16px;
        border:1px solid red;
        color: red;
        font-weight: bold;
      }
    }
  }
  }
  
}
  
</style>