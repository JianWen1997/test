<template>
  <div class="foryou">
    <div class="foryouContainer">
      <h2>为你推荐</h2>
      <ul>
         <li>
          <img src="./images/03.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
         <li>
          <img src="./images/01.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
         <li>
          <img src="./images/02.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
         <li>
          <img src="./images/06.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
         <li>
          <img src="./images/05.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
      </ul>
        <ul>
         <li>
          <img src="./images/07.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
         <li>
          <img src="./images/08.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
         <li>
          <img src="./images/04.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
         <li>
          <img src="./images/06.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
         <li>
          <img src="./images/05.png" alt="">
          <p>天语P40pro 8G+128G大内存 6.55英寸高清穿孔屏 游戏拍照智能手机 侧键指纹 人脸识别 星海(全网通8G+128G)京东速发</p>
          <h4>🐏6999.00</h4>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'Foryou'
}
</script>
<style scoped lang="less"> 
  .foryou{
    background-color: #eaeaea;
    .foryouContainer{
      width:1200px;
      margin:0 auto;
      text-align: center;
      border:1px solid transparent;
      h2{
       font-size: 28px;
       margin:20px 0;
      }
      ul{
        display: flex;
        justify-content: space-between;
        
        li{
          background-color:white;
          
          width:230px;
          height:320px;
          margin:10px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          img{
            width:150px;
            height:150px;
          }
          p{
            width:140px;
            text-overflow:ellipsis; 
            overflow:hidden;
            white-space: nowrap;
            font-size:18px
          }
          h4{
            color: red;
            border:1px solid red;
            width:140px;
            height:30px;
            line-height:30px;
          }
        }
      }
    }
  }
</style>