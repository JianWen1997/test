<template>
  <!-- header -->
  <header class="header">
    <div class="header-img">
            <swiper class="swiper"
            :options="{
              loop: true, // 循环模式选项

              autoplay:true,
              delay: 500,

            }"
          >
            <swiper-slide class="swiper-slide">
              <img style="height:66px;" src="./images/110.png" />
             
            </swiper-slide>
            <swiper-slide class="swiper-slide">
  
              <img style="height:66px;" src="./images/1.jpg" alt="">
            </swiper-slide>
            </swiper>
      
    </div>
    
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p style="color:red">广东</p>
          <!-- <p v-if="userInfo.name">
            <span>{{ userInfo.nickName }}</span>
            <a href="javascipt:;" style="margin-left: 15px" @click="logout"
              >退出</a
            >
          </p>
          <p v-else>
            <span>请</span>
            
            <router-link to="/login">登录</router-link>
            
            <router-link to="/register" class="register">免费注册</router-link>
          </p> -->
        </div>
        <div class="typeList">
          <span v-if="userInfo.name" style="color:red">{{ userInfo.name }}</span>
          <router-link v-else style="color:red" to="/login">你好, 请 登录</router-link>
          
          
          <router-link to="/register">免费注册</router-link>
          <a href="###">我的订单</a>

          
          <a href="###">我的京东</a>
          <a href="###">京东会员</a>
          <a href="###">企业采购</a>
          <a href="###">客户服务</a>
          <a href="###">网站导航</a>
          <a href="###">手机京东</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- 点击图片跳转到首页 -->
        <router-link class="logo" title="京东" to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button 
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="toSearch"
            
          >
            搜索
          </button>
          <button @click="toShopcart" type="button" class="shopcar">我的购物车</button>
        </form>
        <ul class="first-ul">
          <li style="color:#e02209ec;font-weight:bold">外交官箱包</li>
          <li style="color:#e02209ec;font-weight:bold">女性健康</li>
          <li>她的家装</li>
          <li>开学季</li>
          <li>星巴克</li>
          <li>京东生活</li>
          <li>电脑数码</li>
        </ul>
        <ul class="second-ul">
          <li style="color:#e02209ec;font-weight:bold">秒杀</li>
          <li style="color:#e02209ec;font-weight:bold">优惠券</li>
          <li>PLUS会员</li>
          <li>品牌闪购</li>
          <li>星巴克</li>
          <li>拍卖</li>
          <li>京东家电</li>
          <li>京东超市</li>
          <li>京东生鲜</li>
          <li>京东国际</li>
          <li>京东金融</li>
        </ul>
      </div>
      <div style="width:190px;height:120px">
        <swiper class="swiper"
            :options="{
              loop: true, // 循环模式选项

              autoplay:true,
              delay: 500,

            }"
          >
            <swiper-slide class="swiper-slide">
            <img style="width:190px;height:120px;" src="./images/111.png" />
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img  src="./images/b5e2865e409f1979.png" alt="">
            
             </swiper-slide>
            </swiper>
        
      </div>
    </div>
  </header>
</template>
<script>

export default {
  name: "Header",
  data() {
    return {
      keyword: "", //获取搜索文本框的值
      userInfo:''
    };
  },
  methods:{
    toSearch(){
      if(this.keyword ==="空调"||this.keyword==="电视"){
        this.$router.push(`/search?name=${this.keyword}`)
      }
      this.keyword=''
      
    },
    toShopcart(){
      this.$router.push('/shopcart')
    },
    async getUserInfo(){
      let phone = sessionStorage.getItem('phone')
      let password = sessionStorage.getItem('password')
      //console.log(phone,password)
      if(phone&&password){
      const userInfo = await this.$API.reqUser()
      console.log(userInfo)
      this.userInfo = userInfo
      
      }
    },

  },
  mounted(){
    console.log(1)
    this.$nextTick(()=>{
      this.getUserInfo()
    })
   
  },


};
</script>
<style lang="less" rel="stylesheet/less"  scoped>
.header {
  .header-img{
    position:fixed;
    top:0;
    width:100%;
    height:66px;
    background-color: rgb(94, 31, 236);
    text-align: center;
    z-index:1111;
    img{
     
      height:66px;
      background-size: cover;
      
    }
  }
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;
    margin-top:66px;
    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      display: flex;
      flex-direction: column;
      
      
      .searchForm {
        overflow: hidden;
        margin-top:20px;
        input {
          box-sizing: border-box;
          width: 450px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #e02209ec;
          float: left;

          &:focus {
            outline: none;
          }
        }

        .sui-btn {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
        .shopcar{
          width:85px;
          height:32px;
          border:1px solid #ccc;
          background-color:white;
          color:red;
          margin-left: 10px;
        }
      }
      .first-ul{
        display: flex;
        margin:10px 0px ;
        li{
          font-size: 12px;
          margin-right:10px;
        }
      }
      .second-ul{
        display: flex;
        flex-wrap: nowrap;
        margin-left:-20px;
        li{
          font-size: 14px;
          margin-right:10px;
          margin-top:10px
        }
      }
    }
  }
}
</style>