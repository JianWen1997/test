<template>
  <div class="today">
    <div class="todayContainer">
      <div class="everyday">
        <div class="everyday-one">
          <h3>每日特价</h3>
          <ul>
            <li>精选</li>
            <li style="color:red;text-decoration:underline">美食</li>
            <li>百货</li>
            <li>个护</li>
            <li>预告</li>
          </ul>
        </div>
        <div class="everyday-two">
          <div class="every-two-left">
            <p>329天最低价</p>
            <img src="./images/01.png" alt="">
            <span>品质苹果10斤装</span>
            <span style="color:red">¥29.8.00</span>
            <span>已抢144件</span>
          </div>
          <ul>
            <li>
              <img src="./images/02.png" alt="">
              <div>
                <p>苹果</p>
                <p style="color:red;font-size:14px;"> 9.9</p>
                <p>已抢244件</p>
              </div>
            </li>
            <li>
              <img src="./images/01.png" alt="">
              <div>
                <p>苹果</p>
                <p style="color:red;font-size:14px;"> 9.9</p>
                <p>已抢244件</p>
              </div>
            </li>
            <li>
              <img src="./images/03.png" alt="">
              <div>
                <p>苹果</p>
                <p style="color:red;font-size:14px;"> 9.9</p>
                <p>已抢244件</p>
              </div>
            </li>
            <li>
              <img src="./images/05.png" alt="">
              <div>
                <p>苹果</p>
                <p style="color:red;font-size:14px;"> 9.9</p>
                <p>已抢244件</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="everyday">
        <div class="everyday-one">
          <h3>每日特价</h3>
          <ul>
            <li>精选</li>
            <li style="color:red;text-decoration:underline">美食</li>
            <li>百货</li>
            <li>个护</li>
            <li>预告</li>
          </ul>
        </div>
        <div class="everyday-two">
          <div class="every-two-left">
            <p>329天最低价</p>
            <img src="./images/01.png" alt="">
            <span>品质苹果10斤装</span>
            <span style="color:red">¥29.8.00</span>
            <span>已抢144件</span>
          </div>
          <ul>
            <li>
              <img src="./images/02.png" alt="">
              <div>
                <p>苹果</p>
                <p style="color:red;font-size:14px;"> 9.9</p>
                <p>已抢244件</p>
              </div>
            </li>
            <li>
              <img src="./images/01.png" alt="">
              <div>
                <p>苹果</p>
                <p style="color:red;font-size:14px;"> 9.9</p>
                <p>已抢244件</p>
              </div>
            </li>
            <li>
              <img src="./images/03.png" alt="">
              <div>
                <p>苹果</p>
                <p style="color:red;font-size:14px;"> 9.9</p>
                <p>已抢244件</p>
              </div>
            </li>
            <li>
              <img src="./images/05.png" alt="">
              <div>
                <p>苹果</p>
                <p style="color:red;font-size:14px;"> 9.9</p>
                <p>已抢244件</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Today'
}
</script>
<style scoped lang="less"> 
.today{
  background-color: #eaeaea;
  display: flex;
  justify-content: space-between;
  height:400px;
  margin-top:20px;
  
  .todayContainer{
    width:1200px;
    height:350px;
    margin:20px auto;
    display: flex;
    justify-content: space-between;
    
    .everyday{
      width:590px;
      background-color: white;
      height:350px;
      .everyday-one{
        height:60px;
        padding:0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3{
          font-size: 24px;

        }
        ul{
          display: flex;
          li{
            font-size: 14px;
            margin:0 15px;
          }
        }
      }
      .everyday-two{
        height:290px;
        padding:0 15px 15px;
        display: flex;
        .every-two-left{
          width:170px;
          height:250px;
          background-color:#eaeaea;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: column;
          p{
            background-color:rgb(221, 189, 9);
            color:white
          }
          img{
            width:120px;
            height:120px;
          }
          span{
            font-size: 14px;
            
          }
        }
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            width:170px;
            height:90px;
            display: flex;
            justify-content: flex-end;
            img{
              width:84px;
              height:84px;
            }
            div{
              p{
                margin:8px 0
              }
            }
          }
        }
      }
    }
    
    
  }
}
</style>