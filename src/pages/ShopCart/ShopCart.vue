<template>
    <div class="cartContiner">
        <div class="cart">
            <div class="cart-top">
                <h4>全部商品 {{totalNumber}}</h4>
                <div>配送至：广东省深圳市宝安区</div>
            </div>
            
            <div class="cart-main">
                <div class="cart-content">
                    <div class="cart-co1">全选</div>
                    <div class="cart-co2">商品</div>
                    <div class="cart-co3">单价</div>
                    <div class="cart-co4">数量</div>
                    <div class="cart-co5">小计</div>
                    <div class="cart-co6">操作</div>
                </div>

                <div class="cartAll" v-for="(item) in shopcartList" :key="item.id">
                    <div class="cart-inner"  >
                        <input type="checkbox">
                        <div>
                            <a href="javascript:;">京东自营</a>
                        </div>
                    </div>
                    <div class="cart-body"> 
                      <ul class="cart-list">
                        <li class="cart-list-con1" >
                            <input type="checkbox" >
                        </li>
                        <li class="cart-list-con2">
                            <img :src="item.imgUrl">
                            <a class="item-msg">{{item.title}}</a>
                        </li>
                        <li class="cart-list-con3">
                            <div class="item-txt">银黑 3.5</div>
                        </li>
                        <li class="cart-list-con4">
                            <span class="price">￥{{item.price}}</span>
                        </li>
                        <li class="cart-list-con5">
                            <a href="javascript:;" class="mins">-</a>

                            <input autocomplete="off" type="text" :value="item.num" minnum="1" class="itxt">

                            <a href="javascript:;" class="mins">+</a>
                        </li>
                            <li class="cart-list-con6">
                            <span class="sum" style="color:red;font-size:20px;">￥{{item.price}}</span>
                        </li>
                        <li class="cart-list-con7">
                            <a href="javascript:;" class="sindelet" @click="deleteItem(item.id)">删除</a>
                            <br>
                            <a href="javascript:;">移入关注</a>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>

            <!-- 付款，结算 -->
            <div class="cart-tool">
                <div class="tool-left">
                    <div class="select-all">
                        <input class="chooseAll" type="checkbox">
                        <span>全选</span>
                    </div>
                    <div class="option">
                        <a href="javascript:;">删除选中的商品</a>
                        <a href="javascript:;">移入关注</a>
                        <a href="javascript:;">清理购物车</a>
                    </div>
                </div>
                
                <div class="money-box">
                    <div class="chosed">已选择
                        <span>3</span>件商品</div>
                    <div class="sumprice">
                        <em>总价 ：</em>
                        <i class="summoney" style="font-size:22px">￥{{totalPrice}}</i>
                    </div>
                    <div class="sumbtn">
                        <a class="sum-btn" href="javascript:;">结算</a>
                    </div>
                </div>
            </div>

            <!-- 猜你喜欢 -->
            <div class="cart-footer">
              <ul>
                <li class="active"><a href="javascript:;">猜你喜欢</a></li>
                <li><a href="javascript:;">随手购</a></li>
              </ul>

              <div class="cartList">
                <div class="cartItem">
                  <div class="shopSingle">
                       <a href="javascript:;" title="蒙牛 酸酸乳乳此汽质 乳酸菌气泡水原味风味饮料PET瓶330ml×15瓶 礼盒装"    class="cartFooterImg">
                       <img src="./images/294d8218e0153a91.jpg" alt="蒙牛 酸酸乳乳此汽质 乳酸菌气泡水原味风味饮料PET瓶330ml×15瓶    礼盒装">
                     </a>
   
                     <a href="javascript:;" class="cartFooterText">蒙牛 酸酸乳乳此汽质 乳酸菌气泡水原味风味饮料PET瓶330ml×15瓶 礼   盒装</a>
                     <div class="cartFooterPre">
                       <strong>￥90.00</strong>
                     </div>
                     <div class="addC">
                       <a href="javascript:;">加入购物车</a>
                     </div>
                  </div>
                  
                </div>

                <div class="cartItem">
                  <div class="shopSingle">
                       <a href="javascript:;" title="海岛大亨 夹心海苔休闲儿童零食好吃的小食品 40g*2罐"    class="cartFooterImg">
                       <img src="./images/062fda8cf52448d0.jpg" alt="海岛大亨 夹心海苔休闲儿童零食好吃的小食品 40g*2罐">
                     </a>
   
                     <a href="javascript:;" class="cartFooterText">海岛大亨 夹心海苔休闲儿童零食好吃的小食品 40g*2罐</a>
                     <div class="cartFooterPre">
                       <strong>￥150.00</strong>
                     </div>
                     <div class="addC">
                       <a href="javascript:;">加入购物车</a>
                     </div>
                  </div>
                  
                </div>

                <div class="cartItem">
                  <div class="shopSingle">
                       <a href="javascript:;" title="小米（MI） 圈铁耳机2代 入耳式手机耳机有线 游戏耳塞运动有线蓝牙运动跑步吃鸡线控原装耳机 圈铁Pro 3.5mm"    class="cartFooterImg">
                       <img src="./images/fba5d381d687303d.jpg" alt="小米（MI） 圈铁耳机2代 入耳式手机耳机有线 游戏耳塞运动有线蓝牙运动跑步吃鸡线控原装耳机 圈铁Pro 3.5mm">
                     </a>
   
                     <a href="javascript:;" class="cartFooterText">小米（MI） 圈铁耳机2代 入耳式手机耳机有线 游戏耳塞运动有线蓝牙运动跑步吃鸡线控原装耳机 圈铁Pro 3.5mm</a>
                     <div class="cartFooterPre">
                       <strong>￥188.00</strong>
                     </div>
                     <div class="addC">
                       <a href="javascript:;">加入购物车</a>
                     </div>
                  </div>
                  
                </div>

                <div class="cartItem">
                  <div class="shopSingle">
                       <a href="javascript:;" title="【周黑鸭_锁鲜】气调盒装卤豆干香干280g 武汉特产休闲零食小吃"    class="cartFooterImg">
                       <img src="./images/b1c7acd17c526b7b.jpg" alt="【周黑鸭_锁鲜】气调盒装卤豆干香干280g 武汉特产休闲零食小吃">
                     </a>
   
                     <a href="javascript:;" class="cartFooterText">【周黑鸭_锁鲜】气调盒装卤豆干香干280g 武汉特产休闲零食小吃</a>
                     <div class="cartFooterPre">
                       <strong>￥269.00</strong>
                     </div>
                     <div class="addC">
                       <a href="javascript:;">加入购物车</a>
                     </div>
                  </div>
                  
                </div>

              </div>

            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "ShopCart",
  data(){
    return {
      // shopCartList:[]
    }
  },

  // 计算属性
  computed:{
    ...mapState({
      shopcartList:(state) => state.shopcart.shopcartList
    }),
    ...mapGetters(['totalNumber','totalPrice']),
  },

  async mounted() {
    // mock购物车数据
    this.$store.dispatch('getShopCart')
    
  },

  methods:{




    // 数量操作
    updateNum(){},

    // 数量操作-Input框中的正则匹配
    validInput(event){
      // 获取后赋值
      const value = event.target.value
      event.target.value = value.replace(/^0+|\D+0*/,'')
    },

    // 删除操作
    deleteItem(skuId){
      this.$confirm('您确定要删除此项吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          // 删除
          this.$store.dispatch('deleteCartItem',skuId)
          .then(()=>{
              this.$message.success('删除成功')
            })
            .catch((error)=>{
              this.$message.error(error.message)
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    }

  }
}
</script>

<style scoped>
.cartContiner{
    min-width: 1200px;
}

.cart {
  width: 1200px;
  margin: 0 auto;
}

.cart .cart-top {
    display: flex;
    /* border:1px solid red; */
    height: 21px;
    line-height: 21px;
    /* vertical-align: middle; */
    justify-content: space-between;
    margin:5px 0;
}
.cart h4 {
  color:red;
  font-size: 14px;
  height:21px;
  line-height: 21px;
}
.cart .cart-main .cart-content {
  background: #f5f5f5;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 10px;
  overflow: hidden;
}
.cart .cart-main .cart-content > div {
  float: left;
}

.cart .cart-main .cart-inner {
    height:30px;
    display:flex;
    align-items:center;
    padding-left:10px;
    /* border:1px solid red; */
}

.cart .cart-main .cart-inner div a {
    color:red;
    margin-left:10px;
}

.cart .cart-main .cart-content .cart-co1 {
  width: 15%;
}
.cart .cart-main .cart-content .cart-co1 input {
  vertical-align: middle;
}
.cart .cart-main .cart-content .cart-co1 span {
  vertical-align: middle;
}
.cart .cart-main .cart-content .cart-co2 {
  width: 32%;
}
.cart .cart-main .cart-content .cart-co3,
.cart .cart-main .cart-content .cart-co4,
.cart .cart-main .cart-content .cart-co5,
.cart .cart-main .cart-content .cart-co6 {
  width: 13%;
}
.cart .cart-main .cart-body {
  margin-bottom: 15px;
  border: 1px solid #ddd;
}
.cart .cart-main .cart-body .cart-list {
  padding: 10px;
  background-color:#fff4E8;
  border-bottom: 1px solid #ddd;
  overflow: hidden;

}

.cart .cart-main .cart-body .cart-list > li {
  float: left;
}

.cart .cart-main .cart-body .cart-list .cart-list-con1 {
  width: 4.1667%;
}

.cart .cart-main .cart-body .cart-list .cart-list-con2 {
  width: 25%;
}

.cart .cart-main .cart-body .cart-list .cart-list-con2 img {
  width: 82px;
  height: 82px;
  float: left;
}

.cart .cart-main .cart-body .cart-list .cart-list-con2 .item-msg {
  float: left;
  width: 150px;
  margin: 0 10px;
  line-height: 18px;
}

.cart .cart-main .cart-body .cart-list .cart-list-con3 {
  width: 15%;
}

.cart .cart-main .cart-body .cart-list .cart-list-con3 .item-txt {
  text-align: center;
}

.cart .cart-main .cart-body .cart-list .cart-list-con4 {
    font-size:12px;

    width: 15%;
}

.cart .cart-main .cart-body .cart-list .cart-list-con5 {
  width: 15%;
}

.cart .cart-main .cart-body .cart-list .cart-list-con5 .mins {
  border: 1px solid #ddd;
  border-right: 0;
  float: left;
  background-color: rgb(230, 230, 230);
  width: 20px;
  height:20px;
  line-height: 20px;
  text-align: center;
  
}

.cart .cart-main .cart-body .cart-list .cart-list-con5 input {
  border: 1px solid #ddd;
  width: 30px;
  height: 20px;
  float: left;
  text-align: center;
  font-size: 12px;
}

.cart .cart-main .cart-body .cart-list .cart-list-con5 .plus {
  border: 1px solid #ddd;
  border-left: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}

.cart .cart-main .cart-body .cart-list .cart-list-con6 {
  width: 12.5%;
}

.cart .cart-main .cart-body .cart-list .cart-list-con6 .sum {
  font-size: 16px;
}

.cart .cart-main .cart-body .cart-list .cart-list-con7 {
  width: 12.5%;
}

.cart .cart-main .cart-body .cart-list .cart-list-con7 a {
  color: #666;
}

.cart .cart-tool {
  overflow: hidden;
  border: 1px solid #ddd;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
}

/* .cart .cart-tool .tool-left{
    display: flex;
    align-items: center;
} */

.cart .cart-tool .select-all {
  padding: 10px;
  overflow: hidden;
  float: left;
}

.cart .cart-tool .select-all span {
  vertical-align: middle;
}

.cart .cart-tool .select-all input {
  vertical-align: middle;
}

.cart .cart-tool .option {
  padding: 10px;
  overflow: hidden;
  float: left;
}

.cart .cart-tool .option a {
  float: left;
  padding: 0 10px;
  color: #666;
}

.cart .cart-tool .money-box {
  float: right;
}

.cart .cart-tool .money-box .chosed {
  line-height: 26px;
  float: left;
  padding: 0 10px;
}

.cart .cart-tool .money-box .sumprice {
  width: 200px;
  line-height: 22px;
  float: left;
  padding: 0 10px;
}

.cart .cart-tool .money-box .sumprice .summoney {
  color: #c81623;
  font-size: 16px;
}

.cart .cart-tool .money-box .sumbtn {
  float: right;
}

.cart .cart-tool .money-box .sumbtn a {
  display: block;
  position: relative;
  width: 96px;
  height: 52px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  background: #e1251b;
  overflow: hidden;
}

.cart-footer {
  width:1200px;
  margin:30px 0;
}

.cart-footer ul {
  display:flex;
  margin-bottom:10px
}


.cart-footer ul li a{
  font-weight: bold;
  display: block;
  margin-right:35px;
}

.cart-footer ul li:nth-of-type(1) a {
  color:red;
  font-size :12px;
}

.cart-footer ul li:nth-of-type(1) a::after{
  content: "";
  border-bottom:2px solid red;
  height:1px;
  width:50px
}

.cartList {
  width:1200px;
  display: flex;
}

.cartList .cartItem{
  height:300px;
  width:300px;
  border:1px dashed  #ccc;
  display: flex;
  justify-content:center;
  align-items:center;
}

.cartList .cartItem .shopSingle{
  height: 266px;
  width:206px;
  /* border:1px solid red; */
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-around
}

.cartList .cartItem .shopSingle .cartFooterImg img{
  height:160px;
  width:160px;
  /* border:1px solid red; */
}

.cartList .cartItem .shopSingle .cartFooterText {
  font-size:12px;
  color: #333;
  height: 36px;
  line-height: 18px;
  overflow: hidden;
  margin:5px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.cartList .cartItem .shopSingle  .cartFooterPre strong {
  font-size:14px;
  color:red;
}

.cartList .cartItem .shopSingle .addC{
  height:30px;
  width:145px;
  border:1px solid #ccc;
  display: flex;
  justify-content:center;
  align-items:center;
}

.cartList .cartItem .shopSingle .addC:hover{
  background-color: red;
}

.cartList .cartItem .shopSingle .addC a{
  color:#666;
  font-size:12px;
}

.cartList .cartItem .shopSingle .addC a:hover {
  color:white !important;
}


</style>