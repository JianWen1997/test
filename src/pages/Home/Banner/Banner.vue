<template>
    <div id="home">
      <div id="banner">
        <div id="banner-absolute">
          <img class="banner-absolute-img-one" src="./images/01.png" alt="">
          <img class="banner-absolute-img-two" src="./images/15.png" alt="">
        </div>
        <ul id="banner-left"  @mouseleave="hideFirst" @mouseenter="showFirst">
            <li @mouseenter="showSubCategory(index)" :class="currentIndex === index?'active':''" v-for="(category,index) in categoryList" :key="category.id">
                <a href="#">{{category.name}}</a>
                <div>
                    <dl v-for="item in category.two" :key="item.id">
                        <dt><span><a href="#">{{item.name}}</a></span></dt>
                        <dd v-for="(value,index) in item.three" :key="index">
                            <span><a href="#">{{value.name}}</a></span>
                        </dd>
                    </dl>
                </div>
            </li>

        </ul>
        <div id="banner-pic">
          <swiper class="swiper"
            :options="{
              loop: true, // 循环模式选项
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
              autoplay:true,
              delay: 500,
              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              
            }"
          >
            <swiper-slide class="swiper-slide">
              <img src='./images/03.png' style="width:590px;height:460px;" alt="" />
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="./images/04.png" style="width:590px;height:460px;" alt="" />
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="./images/05.png" style="width:590px;height:460px;" alt="" />
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="./images/06.png" style="width:590px;height:460px;" alt="" />
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="./images/07.png" style="width:590px;height:460px;" alt="" />
            </swiper-slide>
           
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div id="banner-img">
          <img src="./images/08.png" alt="">
          <img src="./images/09.png" alt="">
          <img src="./images/10.png" alt="">
        </div>
        <div id="banner-right">
          <div class="banner-right-top">
            <div class="banner-right-top-one">
              <img src="./images/11.gif" alt="">
              <div>
                <p>Hi~欢迎逛京东</p>
                <p><router-link to="/login">登录|</router-link><router-link to="/register">注册</router-link></p>
              </div>
            </div>
            <div class="banner-right-top-two">
              <button>新人福利</button>
              <button>PLUS会员</button>
            </div>
          </div>
          <div class="banner-right-center">
            <div>
              <h3>京东快报</h3>
              <p>更多>></p>
            </div>
            
            <ul>
              <li>
                <span>热评</span>
                <a>政协开幕会上的这一幕让人感动委员建议高考调至6月首个周末热</a>
              </li>
              <li>
                <span>热门</span>
                <a href="#">委员建议高考调至6月首个周末热委员建议高考调至6月首个周末热</a>
              </li>
              <li>
                <span>热评</span>
                <a href="#">天问一号拍摄到高清火星影像图天问一号拍摄到高清火星影像图</a>
              </li>
              <li>
                <span>HOT</span>
                <a href="#">央视评货拉拉女用户坠亡案央视评货拉拉女用户坠亡案</a>
              </li>
              <li>
                <span>HOT</span>
                <a href="#">央视评货拉拉女用户坠亡案央视评货拉拉女用户坠亡案</a>
              </li>
            </ul>
          </div>
          <div class="banner-right-bottom">
            <div id="outer">
                <div></div>
                <div></div>
                <div></div>
                <span>话费</span>
                <span>机票</span>
                <span>酒店</span>
                <div></div>
                <div></div>
                <div></div>
                <span>游戏</span>
                <span>加油卡</span>
                <span>火车票</span>
                <div></div>
                <div></div>
                <div></div>
                <span>众筹</span>
                <span>理财</span>
                <span>白条</span>
                <div></div>
                <div></div>
                <div></div>
                <span>电影票</span>
                <span>企业购</span>
                <span>礼品卡</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
// 引入lodash库,按需引入
import throttle from 'lodash/throttle'
export default {
  name: "Home",
  props:['categoryList'],
  data(){
    return{
      currentIndex:-2,
      bannerList:[]
    }
  },
/*   async mounted(){

    let bannerList = await this.$API.reqBanner()
    this.bannerList = bannerList.data[0].banner
    console.log(this.bannerList)
  }, */
  methods:{
    showSubCategory:throttle(function (index) {
      if(this.currentIndex !==-2){
        this.currentIndex = index
      }
      
    }, 200),
    showFirst(){
      this.currentIndex = -1
    },
    hideFirst(){
      this.currentIndex = -2
    }
  }
  
}
</script>
<style scoped lang="less" rel="stylesheet/less">
#home{
  
  background-color:#EAEAEA;
  
}
.active{
  background-color:rgb(57, 114, 235)
}
#banner{
    width:1200px;
    position: relative;
    margin:0 auto;
    display: flex;
    padding:20px 0;
    /* border:1px solid red; */
    #banner-absolute{
      width: 275px;
      position: absolute;
      top:0;
      left:-275px;
      z-index: 1000;
      transition: width 1s;
      display: flex;
      overflow: hidden;
    }
    .banner-absolute-img-one{
      height:480px
    }
    .banner-absolute-img-two{
      width:805px;
      height:480px;
      
    }
    #banner-absolute:hover{
      width:1075px;
      
    }
}
#banner #banner-left{
    float:left;
    width:210px;
    height:461px;
    position:relative;
    margin:0;
    padding:0;
    list-style-type:none;
      /*  border:1px solid red; */
    background-color:#FAFAFA;
}
#banner #banner-left li{
    line-height:30px;
    padding:0;
    /* border:1px solid green; */
}
#banner #banner-left li a{
    display:block;
    padding:0 20px;
    text-decoration:none;
    font-size:14px;
    color:#333;
    /*  border:1px solid green; */
}
#banner #banner-left li a:hover{
    color:lightgreen !important;
}
#banner #banner-left li div{
    display:none;
    width:735px;
    position:absolute;
    top:0;
    bottom:0;
    left:210px;
    margin:0;
    padding:0;
    background-color:#FAFAFA;
    /* border:1px solid red; */
    
}
#banner #banner-left li:hover div{
    display:block;
    z-index:999;
}
#banner #banner-left li div dl{
    width:600px;
    /* border:1px solid green; */
}
#banner #banner-left li div dl,dl dt,dd{
    display:inline-block;
    margin:0;
    padding:0;
}
#banner #banner-left li dt{
    width:60px;
    line-height:22px;
    margin-top:8px;
    /* border:1px solid blue; */
    vertical-align:top;
    text-align:right;
}
#banner #banner-left li dt span a{
    display:inline;
    padding:0;
    font-size:12px;
    font-weight:bold;
    /*  border:1px solid red; */
}
#banner #banner-left li dd{
    /*  border:1px solid blue; */
    line-height:14px;
    margin-top:8px;
}
#banner #banner-left li dd span{
    display:inline-block;
    padding:0 8px;
    margin-top:4px;
    border-left:1px solid #ccc;
}
#banner #banner-left li dd span a{
    display:inline;
    padding:0;
    font-size:12px;
    /* border:1px solid green; */
}
#banner-pic{
  width:590px;
 .swiper{
  width:590px;
  height:460px;
 }

}
#banner-img{
  width:190px;
  margin:0 10px;
  img{
    width:190px;
    height:150px;
  }
}
#banner-right{
  width:190px;
  background-color: white;
  .banner-right-top{
    
    .banner-right-top-one{
      display: flex;
      justify-content: center;
      align-items: center;
      height:75px;
      img{
        width:40px;
        height:40px;
        
      }
      p{
        margin-left: 5px;
        font-size: 12px;
        a:hover{
          color:red !important
        }
      }
    }
    .banner-right-top-two{
      height:25px;
      display: flex;
      justify-content: space-around;
      padding: 0 10px;
      button{
        width:70px;
        border-radius:10px;
        border: 0;
        color:white;
        font-weight: bold;
        &:nth-of-type(1){
          background-color: red;
        }
        &:nth-of-type(2){
          background-color: #363636;
        }
      }
    }
  }
  .banner-right-center{
    
    width: 150px;
    margin: 10px auto;
    height:130px;
   
    div{
      width:150px;
      display: flex;
      justify-content: space-between;
    }
    ul{
      margin-top:10px;
      li{
        display: flex;
        justify-content: space-between;
        height:16px;
        line-height: 16px;
        margin:3px 0;
        span{
         
          margin-right:10px;
          white-space: nowrap;
          background-color:#ccc;
          color:red
        }
        a{
          text-overflow:ellipsis; 
          overflow:hidden;
          white-space: nowrap
        }
      }
    }
  }
  .banner-right-bottom{
     #outer{
            width: 180px;
            background-color:white ;
           /*  border: 1px solid red; */
            font-size: 0;
            text-align: center;
            margin: 0 auto;
            margin-top:-10px;
        }
        #outer div{
            display:inline-block;
            width: 28px;
            height: 28px;
            margin: 5px 16px;
            background-image: url(./images/img/sprite.png);
        }
        span{
            display: inline-block;
            font-size: 12px;
            width: 60px;
        }
        #outer div:nth-of-type(1){
            background-position:-168px 0;
        }
        #outer div:nth-of-type(2){
            background-position:-84px 0;
        }
        #outer div:nth-of-type(3){
            background-position:-588px 0;
        }
        #outer div:nth-of-type(4){
            background-position:0px 0;
        }
        #outer div:nth-of-type(5){
            background-position:-196px 0;
        }
        #outer div:nth-of-type(6){
            background-position:-336px 0;
        }
        #outer div:nth-of-type(7){
            background-position:-476px 0;
        }
        #outer div:nth-of-type(8){
            background-position:-56px 0;
        }
        #outer div:nth-of-type(9){
            background-position:-308px 0;
        }
        #outer div:nth-of-type(10){
            background-position:-280px 0;
        }
        #outer div:nth-of-type(11){
            background-position:-252px 0;
        }
        #outer div:nth-of-type(12){
            background-position:-560px 0;
        }
        #outer div:nth-of-type(1):hover{
            background-position:-420px 0;
        }
        #outer div:nth-of-type(2):hover{
            background-position:-616px 0;
        }
        #outer div:nth-of-type(3):hover{
            background-position:-140px 0;
        }
        #outer div:nth-of-type(4):hover{
            background-position:-448px 0;
        }
        #outer div:nth-of-type(5):hover{
            background-position:-532px 0;
        }
        #outer div:nth-of-type(6):hover{
            background-position:-224px 0;
        }
        #outer div:nth-of-type(7):hover{
            background-position:-28px 0;
        }
        #outer div:nth-of-type(8):hover{
            background-position:-364px 0;
        }
        #outer div:nth-of-type(9):hover{
            background-position:-112px 0;
        }
        #outer div:nth-of-type(10):hover{
            background-position:-644px 0;
        }
        #outer div:nth-of-type(11):hover{
            background-position:-504px 0;
        }
        #outer div:nth-of-type(12):hover{
            background-position:-392px 0;
        }
  }

}



  
</style>