<template>
    <div class="cartSuccessContainer">
         <!-- 成功加入购物车 -->
        <div class="cartSuccessWrap">
            <div class="cartSuccess">
                <div class="success-left">
                    <div class="icon">
                        <img src="./images/right.png" alt="">
                        <h3>商品已成功加入购物车!</h3>
                    </div>
                    <div class="inner">
                        <div>
                            <img class="s-img" :src="detailInfo.imgUrl" alt="">
                        </div>
                        <div class="s-right" @click="toDetail">
                            <div>
                                <!-- <a href="javescript:;" class="shop-content">小米耳机 圈铁Pro 入耳式有线耳机音乐耳机手机耳机耳麦</a> -->
                                <a class="shop-content">{{detailInfo.title}}</a>
                            </div>
                            <div>
                                <span class="txt">颜色：银黑</span>
                                <span class="txt">数量: {{detailInfo.num}}</span>
                                <span class="txt">价钱:<span style="color:red;font-size:18px">{{detailInfo.price}}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="success-right">
                    <div class="r-top" @click="toDetail">
                        <!-- <a href="javascript:;" class="shopDetail">查看商品详情</a> -->
                        <!--  -->
                        <a class="shopDetail">查看商品详情</a>
                    </div>
                    <div class="r-button" @click="toCart">
                        <a href="javascript:;">去购物车结算</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 购买该商城的用户还购买了 -->
        <div class="innerWrap">
            <div class="innerContent">
                <div>
                    <h3>购买了该商品的用户还购买了</h3>
                </div>
                <ul v-if="cartList">
                    <li class="shopList" v-for="(val) in cartList.buyShopList" :key="val.id">
                        <div class="innerItem">
                            <a href="javascript:;"><img :src="val.image" alt=""></a>
                            <div class="inner-bott">
                                <div class="inner-text"> 
                                    <a href="javascript:;" :title="val.name">{{val.name}}</a>
                                </div>
                                <div class="inner-pre">
                                    <strong>￥{{val.Price}}</strong>
                                </div>
                                <div class="inner-add">
                                    <a href="#">加入购物车</a>
                                </div>

                            </div>
                        </div>
                    </li>
                </ul>

                <!-- 分页 -->
                <!-- <div class="block" >
                    <span class="demonstration">页数较少时的效果</span>
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50"  style="text-align:center">
                    </el-pagination>
                </div> -->
                
            </div>
        </div>

        <!-- 您可能还需要 -->
        <div class="innerWrap">
            <div class="innerContent">
                <div>
                    <h3>您可能还需要</h3>
                </div>
                <ul v-if="cartList">
                    <li class="shopList" v-for="(item) in cartList.linkShopList" :key="item.id">
                        <div class="innerItem">
                            <a href="javascript:;"><img :src="item.image" alt=""></a>
                            <div class="inner-bott">
                                <div class="inner-text"> 
                                    <a href="javascript:;" :title="item.name">{{item.name}}</a>
                                </div>
                                <div class="inner-pre">
                                    <strong>￥{{item.Price}}</strong>
                                </div>
                                <div class="inner-add">
                                    <a href="#">加入购物车</a>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'cartSuccess',
    data() {
        return {
          cartList:{}
        }
    },
    computed:{
      ...mapState({
        detailInfo:(state)=>state.detail.detailInfo
      })
    },
    async mounted(){
      /* const detail = sessionStorage.getItem('detail')
      this.detail = JSON.parse(detail) */
      const skuId = this.$route.params.id
      this.$store.dispatch('getDetailInfo',skuId)
       // 调用mock数据
     const cartList = await this.$API.addCartList()
     this.cartList = cartList
    },
    methods:{
      //去详情页
      toDetail(){
        this.$router.push(`/detail/${this.detailInfo.id}`)
      },
        // 去购物车结算
        toCart(){
          const data ={
            num:this.detailInfo.num,
            idChecked:false,
            price:this.detailInfo.price,
            title:this.detailInfo.title,
            imgUrl:this.detailInfo.imgUrl,
            id:this.detailInfo.id
          }
          //console.log(data)
          this.$store.dispatch('addShop',data).then(()=>{
            this.$router.replace('/shopcart')
          })
        },
    }
}
</script>

<style scoped >
.cartSuccessWrap{
  min-width: 1200px;
  /* border:1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:10px;
  margin-bottom: 30px;
  background-color:#f5f5f5;
}

.cartSuccess {
    width:1200px;
    display:flex;
    justify-content: space-between;
    /* border:1px solid yellow; */
    vertical-align: bottom;
}

.cartSuccess .success-left {
    width:600px;
    vertical-align: bottom;
}

.cartSuccess .success-left .icon {
    display: flex;
    padding:25px 0;
    /* border:1px solid red; */
    /* color:#71B247, */
}

.cartSuccess .success-left .icon img {
    height:25px;
    width:25px;
    /* border:1px solid blue; */
}

.cartSuccess .success-left .icon h3{
    font-size:18px;
    color:#71B247;
    margin-left: 10px;
}

.cartSuccess .success-left .inner {
    display: flex;
}

.cartSuccess .success-left .inner .s-right{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left:10px;
}

.cartSuccess .success-left .inner .s-right  .shop-content {
    font-size: 14px;
    color:#333;
}

.cartSuccess .success-left .inner .s-right span{
    font-size:12px;
    color:#aaa;
    margin-left:5px;
}

.cartSuccess .inner .s-img {
    height:60px;
    width:60px;
    /* border: 1px solid red; */
}

.cartSuccess .success-right{
    width:400px;
    /* border:1px solid burlywood; */
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

}

.cartSuccess .success-right .r-top {
    height:36px;
    width:136px;
    /* border:1px solid red; */
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cartSuccess .success-right .r-top .shopDetail {
    color:red;
}

.cartSuccess .success-right .r-button {
    height:36px;
    width:136px;
    /* border:1px solid red; */
    font-size: 16px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cartSuccess .success-right .r-button a {
    color:white;
}

.innerWrap{
    min-width: 1200;
    display: flex;
    justify-content: center;
    margin-bottom:20px;
    /* border:1px solid red; */
}

.innerWrap .innerContent{
    width:1200px;
    /* border: 1px solid yellow */
}

.innerWrap .innerContent ul{
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    /* border: 1px solid red; */
}

.innerWrap .innerContent h3{
    color:#666;
}

.innerWrap .innerContent .shopList {
    width: 300px;
    margin-bottom: 25px;
}

.innerWrap .innerContent .shopList .innerItem{
    width: 270px;
    height:100px;
    display: flex;
    /* border:1px solid skyblue; */
    margin-top:6px;
}

.innerWrap .innerContent .shopList .innerItem img{
    height: 98px;
    width:98px;
    /* border:1px solid blue; */
}

.innerWrap .innerContent .shopList .innerItem .inner-bott {
    margin-left:10px;
}

.innerWrap .innerContent .shopList .innerItem .inner-bott .inner-text{
    width: 160px;
    height:36px;
    line-height: 18px;
    font-size: 12px;
    color:#333;
    margin-bottom:4px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical
}

.innerWrap .innerContent .shopList .innerItem .inner-pre{
    font-size: 14px;
    color:red;
    margin-bottom: 11px;
}

.innerWrap .innerContent .shopList .innerItem .inner-add {
    height: 30px;
    width: 105px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}

.innerWrap .innerContent .shopList .innerItem .inner-add:hover {
    background-color:red;
}


.innerWrap .innerContent .shopList .innerItem .inner-add a{
    font-size:12px;
    color:#333;
    text-align: center;
}

.innerWrap .innerContent .shopList .innerItem .inner-add a:hover{
    color:#fff !important;
    /* border:1px solid red; */
}

.block {
    display:flex;
}

/* 分页居中 */
el-pagination {
    text-align: center; 
}

</style>>