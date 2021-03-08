<template>
  <div class="detail">
    <!-- 商品分类导航栏 -->
    <section>
      <div class="detailList">
        <ul class="conList">
          <li class="itemList">
            <div>
              <a href="javascripr:;">电脑、办公</a>
            </div>
            <div class="itemSep">></div>
          </li>
          <li class="itemList">
            <div>
              <a href="javascripr:;">电脑组件</a>
            </div>
            <div class="itemSep">></div>
          </li>
          <li class="itemList">
            <div>
              <a href="javascripr:;">组装电脑</a>
            </div>
            <div class="itemSep">></div>
          </li>
          <li class="itemList head">
            <div class="border">
              <div>
                <a href="javascripr:;" @mouseenter='handleWj' @mouseleave="handlelk"> 武极 </a>
              </div>
              <div>^</div>
              <div class="borderListHidden" v-show="isShow">
                <ul class="borderList">
                  <li class="fore">
                    <div class="p-img">
                      <a href="javascript:;">
                        <img width="65" height="65"  src="./images/1.jpg" alt="武极 i5 10400F/GTX1050Ti/240G游戏台式办公电脑主机DIY组装机"/>
                      </a>
                    </div>
                    <div class="p-right">
                        <div class="p-name">
                        <a href="javascript:;">武极 i5 10400F/GTX1050Ti/240G游戏台式办公电脑主机DIY组装机</a>
                      </div>
                      <div class="p-price">
                        <strong>￥3799.00</strong>
                      </div>
                    </div>
                  </li>
                  <li class="fore">
                    <div class="p-img">
                      <a href="javascript:;">
                        <img width="65" height="65" src="./images/2.jpg" alt="武极星冠 十代英特尔酷睿i5 10400F游戏直播设计赛博朋克台式机电脑主机组装电脑 十代i5 GTX1650 16G 240G"/>
                      </a>
                    </div>
                    <div class="p-right">
                        <div class="p-name">
                        <a href="javascript:;">武极星冠 十代英特尔酷睿i5 10400F游戏直播设计赛博朋克台式机电脑主机组装电脑 十代i5 GTX1650 16G 240G</a>
                      </div>
                      <div class="p-price">
                        <strong>￥4199.00</strong>
                      </div>
                    </div>
                  </li>
                  <li class="fore">
                    <div class="p-img">
                      <a href="javascript:;">
                        <img width="65" height="65" src="./images/1.jpg" alt="武极武神 i5 10400F/华硕GTX1660SUPER  直播吃鸡游戏台式电脑主机DIY组装机"/>
                      </a>
                    </div>
                    <div class="p-right">
                        <div class="p-name">
                        <a href="javascript:;" >武极武神 i5 10400F/华硕GTX1660SUPER直播吃鸡游戏台式电脑主机DIY组装机</a>
                      </div>
                      <div class="p-price">
                        <strong>￥5699.00</strong>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="br-list">
                  <div class="br-itemList first">
                     <li class="itemOne">
                      <a href="javascript:;" title="武极">武极</a>
                    </li>
                    <li>
                      <a href="javascript:;" title="逆世界">逆世界</a>
                    </li>
                  </div>
                  <div class="br-itemList">
                    <li>
                      <a href="javascript:;" title="硕扬">硕扬</a>
                    </li>
                    <li>
                      <a href="javascript:;" title="振平" >振平</a>
                    </li>
                  </div>
                  <div class="br-itemList"> 
                    <li>
                      <a href="javascript:;" title="攀升（IPASON）">攀升（IPASON）</a>
                    </li>
                    <li>
                      <a href="javascript:;" title="华橙">华橙</a>
                    </li>
                  </div>
                  <div class="br-itemList">
                     <li>
                      <a href="javascript:;" title="京天（KOTIN）">京天（KOTIN）</a>
                    </li>
                    <li>
                      <a href="javascript:;" title="紫客">紫客</a>
                    </li>
                  </div>
                  <div class="br-itemList">
                    <li>
                      <a href="javascript:;" title="航向者">航向者</a>
                    </li>
                    <li>
                      <a href="javascript:;" title="更多">更多</a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div class="itemSep">></div>
          </li>
          <li class="itemList">
            <div class="ellipsis">
              武极剑星 i7 10700F/GTX1660Ti-6G/2060S游戏台式吃鸡电脑主机/DIY组装机
            </div>
          </li>
        </ul>
        <ul class="conListRight">
          <!-- 店铺名称 -->
          <li class="shopname list">
            <a href="javascript:;">武极电脑DIY旗舰店</a>
          </li>
          <!-- 等级星数图标 -->
          <li class="Evaluation list"></li>
          <li class="contact list">
            <!-- 对话框图标 -->
            <div class="dialogBox"></div>
            <div>
              <a href="javascript:;">联系客服</a>
            </div>
          </li>
          <li class="attention list">
            <!-- 关注图标 -->
            <div class="star"></div>
            <div class="attentionShop">
              <a href="javascript:;">关注店铺</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- 主要内容区域 -->
    <div class="maincon">
      <!-- 左侧放大镜区域 -->
      <div class="previewWrap">
        <!-- 放大镜效果 -->
        <Zoon class="zoom" :detailInfo="detailInfo"/>
        <!-- 小图列表 -->
        <ImageList :detailInfo="detailInfo" />
      </div>
      <!-- 右侧选择区域 -->
      <div class="InfoWrap">
        <div class="goodsDetail">
          <h3 class="InfoName">
            <img src="./images/4.png" alt="京东电脑">
            {{detailInfo.title}}
          </h3>
          <p class="news">【限升十代新旗舰，实力输出，CPU性能提升约45%】一线品质板卡套装、全一线品牌！京东DIY行业机皇、销量20万台！升级产品加量不加价》
            <a href="javascript:;">查看></a>
          </p>
          <!-- 商品价格区域 -->
          <div class="priceArea">
            <div class="spike">
              <div class="title">秒杀价:</div>
              <div class="price">
                <strong>¥</strong>
                <em>{{detailInfo.price}}</em>
              </div>
              <div class="underlinePrice">[￥7299]</div>
              <div class="cutPrice">降价通知</div>
              <div class="goBargain">
                <div class="a">去砍价&gt;</div>
              </div>
            </div>
            <div class="priceArea1">
              <div class="handPrice">
                <!-- 图标 -->
                <div class="priceArea1Icon"></div>
                <div class="title">到手价:</div>
                <div class="price">
                  <strong>¥</strong>
                  <em>{{detailInfo.price}}</em>
                </div>
              </div>
              <div class="promotion">促销满5000减600</div>
            </div>
            <!-- 活动区 -->
            <div class="activity">
              <div class="activityLeft">
                <div class="promotion">
                  <strong class="cu">促</strong>
                  <a href="javascript:;">先领券，再下单！</a>
                </div>
                <div class="promotion">
                  <strong class="cu">减</strong>
                  <a href="javascript:;">电脑桌 满188减20元</a>
                </div>
              </div>
              <div class="activityRight">
                  <div class="promotion">
                  <strong class="cu">减</strong>
                  <a href="javascript:;">保温杯 满99减5元 满199减15元</a>
                </div>
                <div class="promotion">
                  <strong class="cu">减</strong>
                  <a href="javascript:;">机箱 满169减10元</a>
                </div>
              </div>
            </div>
            <!-- 促销 -->
            <div class="activityWrap">
              <div class="fl title">
                <i>促 销</i>
              </div>
              <div class="fl fix-width">
                <div class="gift">
                  <div>
                    <i class="red-bg">赠品</i>
                  </div>
                  <div class="giftImg">
                    <a href="javascript:;" title="赠品不单独出售，图片仅供参考，请以实物为准 赠送武极定制鼠标垫 （单拍不发) 红色（条件：购买1件及以上，赠完即止）">
                      <img src="./images/5.png" width="25" height="25" alt="">
                    </a>
                  <em class="giftNumber">x1</em>
                  </div>
                  <div class="giftLimit">（条件：购买1件及以上，赠完即止）</div>
                </div>
                <div>
                  <i class="red-bg">满减</i>
                  <em class="t-gray">满20000减1100元</em>
                </div>
              </div>
            </div>
          </div>
          <div class="support">
            <div class="supportArea">
              <div class="title">增值业务</div>
              <div class="fixWidth">
                <!-- 图标 -->
                <em class=""></em>
                <a class="recycle">高价回收，极速到账</a>
              </div>
            </div>
            <div class="supportArea">
              <div class="title">配 送 至</div>
              <div class="fixWidth">广东深圳市宝安区新安街道 有货 免运费
                <div class="statement">由武极电脑DIY旗舰店从 湖北武汉市 发货, 并提供售后服务. 今日14:00前完成下单，预计3月6日23:00前发货，3月8日24:00前送达</div>
              </div>
            </div>
          </div>
        </div>
        <div class="choose">
          <div class="cartWrap">
            <div class="controls">
              <input autocomplete="off" class="itxt" value="1" />
              <a href="javascript:" class="plus">+</a>
              <a href="javascript:" class="mins">-</a>
            </div>
            <div class="add" @click="toSuccessCart">
              <a href="javascript:">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 看了又看 -->
      <div class="dableWatch">
        <h4>看了又看</h4>
        <div class="content">
          <a href="javascript:;">
            <img src="./images/6.jpg" alt="" width="150" height="150">
            <div>武极 十代i7 10700/250G/16G游戏台式家用学习工作电脑主机DIY组装机</div>
            <p>￥3999.00</p>
          </a>
        </div>
        <div class="content">
          <a href="javascript:;">
            <img src="./images/6.jpg" alt="" width="150" height="150">
            <div>武极 十代i7 10700/250G/16G游戏台式家用学习工作电脑主机DIY组装机</div>
            <p>￥3999.00</p>
          </a>
        </div>
        <div class="content">
          <a href="javascript:;">
            <img src="./images/6.jpg" alt="" width="150" height="150">
            <div>武极 十代i7 10700/250G/16G游戏台式家用学习工作电脑主机DIY组装机</div>
            <p>￥3999.00</p>
          </a>
        </div>
      </div>
    </div>
    <!-- 店长推荐 -->
    <div class="like">
      <div class="py-container">
        <div class="title">
          <h3 class="fl">店长推荐</h3>
        </div>
        <div class="bd">
          <ul class="favourate">
            <li>
              <img src="./images/6.jpg" alt="" />
              <div class="like-text">
                <h3>¥116.00</h3>
              </div>
            </li>
            <li>
              <img src="./images/6.jpg" alt="" />
              <div class="like-text">
                <h3>¥116.00</h3>
              </div>
            </li>
            <li>
              <img src="./images/6.jpg" alt="" />
              <div class="like-text">
                <h3>¥116.00</h3>
              </div>
            </li>
            <li>
              <img src="./images/6.jpg" alt="" />
              <div class="like-text">
                <h3>¥116.00</h3>
              </div>
            </li>
            <li>
              <img src="./images/6.jpg" alt="" />
              <div class="like-text">
                <h3>¥116.00</h3>
              </div>
            </li>
            <li>
              <img src="./images/6.jpg" alt="" />
              <div class="like-text">
                <h3>¥116.00</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 商品详情信息 -->
    <div class="shopContent">
      <div class="shopContentLeft">
        <!-- 店铺名称 -->
        <div class="store">
          <div class="storeName">
            <a href="javascript:;" title="武极电脑DIY旗舰店">武极电脑DIY旗舰店</a>
          </div>
          <!-- 联系卖家图标 -->
          <div title="联系卖家" class=""></div>
        </div>
        <!-- 店铺评分 -->
        <div class="sp">
          <div class="s">
            <!-- 店铺评分 -->
            <div class="storeEvaluation">
            <div class="storeLevel">店铺等级</div>
              <div></div>
            </div>
            <!-- 商品评分 -->
            <div class="s-commodity item">商品评分
              <em>8.76 低</em>
            </div>
            <!-- 物流服务 -->
            <div class="s-logistics item">物流服务
              <em class="two">9.09 中</em>
            </div>
            <!-- 售后服务 -->
            <div class="s-sale item">售后服务
              <em>8.89 低</em>
            </div>
            <div class="btn">
              <!-- 进店逛逛 -->
              <button>
                <div></div>
                进店逛逛
              </button>
              <!-- 关注店铺 -->
              <button>
                <div></div>
                关注店铺
              </button>
            </div>
          </div>
        </div>
        <!-- 店内搜索 -->
        <div class="spSearch">
          <h5>店内搜索</h5>
          <div class="keyword">
            <span>关键字：</span>
            <input type="text"  class="kSearch">
            <div class="spSearchPrice">
              <span>价  格:</span>
              <span class="text1">
                <input type="text" class="pdSearch">
                <span>到</span>
                <input type="text" class="pdSearch">
              </span>
            </div>
            <input type="submit" value="搜索" class="ss">
          </div>
        </div>
        <!-- 店内分类 -->
        <div class="classification">
          <h5>店内分类</h5>
          <div class="sort">
            <div>
              <a href="javascript::">按CPU分类</a>
            </div>
            <div>
              <a href="javascript::">按用途分类</a>
            </div>
            <div>
              <a href="javascript::">显示器</a>
            </div>
            <div>
              <a href="javascript::">DIY硬件</a>
            </div>
            <div>
              <a href="javascript::">外设</a>
            </div>
            <div>
              <a href="javascript::" style="border-bottom:none">一体机</a>
            </div>
          </div>
        </div>
        <!-- Tab切换 -->
        <aside class="aside">
          <div class="tabWraped">
            <h4 class="active">店铺热销</h4>
            <h4>热门关注</h4>
          </div>
          <div class="tabContent">
            <div class="tab-pane active">
              <ul class="goodsList">
                <li>
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="./images/3.jpg" />
                    </div>
                    <div class="attr">
                      <i>1</i>
                      <em>热销37301件</em>
                    </div>
                    <div class="price">
                      <em>¥</em>
                      <i>5699.00</i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="./images/3.jpg" />
                    </div>
                    <div class="attr">
                      <i>2</i>
                      <em>热销26490件</em>
                    </div>
                    <div class="price">
                      <strong>
                        <em>¥</em>
                        <i>3799.00</i>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="./images/3.jpg" />
                    </div>
                    <div class="attr">
                      <i>3</i>
                      <em>热销21163件</em>
                    </div>
                    <div class="price">
                      <strong>
                        <em>¥</em>
                        <i>275</i>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="./images/3.jpg" />
                    </div>
                    <div class="attr">
                      <i>4</i>
                      <em>热销17036件</em>
                    </div>
                    <div class="price">
                      <strong>
                        <em>¥</em>
                        <i>39.00</i>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="./images/3.jpg" />
                    </div>
                    <div class="attr">
                      <i>5</i>
                      <em>热销15375件</em>
                    </div>
                    <div class="price">
                      <strong>
                        <em>¥</em>
                        <i>969.00</i>
                      </strong>
                    </div>
                  </div>  
                </li>
              </ul>
              <!-- 店铺新品 --> 
              <div class="newList">
                <h3 class="newListName">
                  店铺新品
                </h3>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/3.jpg" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>39999.00</i>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane">
              <p>热门关注</p>
            </div>
          </div>
        </aside>
      </div>
      <div class="shopContentRight">
        <!-- 商品介绍 -->
        <ul class="tab-wraped">
          <button class="addshopcar" >加入购物车</button>
          <li class="active">
            <a href="###">商品介绍</a>
          </li>
          <li>
            <a href="###">规格与包装</a>
          </li>
          <li>
            <a href="###">售后保障</a>
          </li>
          <li>
            <a href="###">商品评价(10万+)</a>
          </li>
          <li>
            <a href="###">本店好评商品</a>
          </li>
        </ul>
        <!-- 商品相关 -->
        <div class="sp-related">
          <div class="sp-b">
            <div class="brand">
              <span>品牌：
                <a href="javascript:;">武极</a>
              </span>
            </div>
            <ul class="brandList">
              <li title="武极剑星 i7 10700F/GTX1660Ti-6G/2060S游戏台式吃鸡电脑主机/DIY组装机">商品名称：武极剑星 i7 10700F/GTX1660Ti-6G/2060S游戏台式吃鸡电脑主机/DIY组装机</li>
              <li title="1555771170">商品编号：1555771170</li>
              <li title="武极电脑DIY旗舰店">
                店铺：
                <a href="javascript:;">武极电脑DIY旗舰店</a>
              </li>
              <li title="7.0kg">商品毛重：7.0kg</li>
              <li title="XJWi75699">货号：XJWi75699</li>
              <li title="酷睿i7">处理器：酷睿i7</li>
              <li title="GTX1660Ti">显卡：GTX1660Ti</li>
              <li title="固态硬盘">硬盘：固态硬盘</li>
              <li title="吃鸡游戏">胜任游戏：吃鸡游戏</li>
              <li title="游戏发烧">类别：游戏发烧</li>
            </ul>
            <p>
              <a href="javascript:;">更多参数</a>
              <span>>></span>
            </p>
          </div>
        </div>
        <!-- 详情界面 -->
        <div class="dt-quality">
          <!-- 品质生活 -->
          <div class="quality-life">
            <img src="./images/8.jpg" alt="品质生活">
            <div class="certificate">
              <img src="./images/9.png" alt="CCC证书">
              <div class="certificateName">
                <a href="javascript:;">CCC证书</a>
              </div>
            </div>
          </div>
        </div>
        <!--图片详情 -->
          <div class="detail-p">
            <div class="p-item">
              <img src="./images/10.jpg" alt="">
            </div>
            <div class="p-item">
              <img src="./images/11.jpg" alt="">
            </div>
            <div class="p-item">
              <img src="./images/12.jpg" alt="">
            </div>
            <div class="p-item">
              <img src="./images/13.jpg" alt="">
            </div>
            <div class="p-item">
              <img src="./images/14.jpg" alt="">
            </div>
            <div class="p-item">
              <img src="./images/15.jpg" alt="">
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Zoon from './Zoon/Zoon'
import ImageList from './ImageList/imageList'
import {mapState} from 'vuex'
export default {
  name: "Detail",
  components:{
    Zoon,
    ImageList
  },
  data(){
    return{
      isShow:false,

    }
  },
  mounted(){
    const skuId = this.$route.params.id
    //console.log(skuId)
    this.$store.dispatch('getDetailInfo',skuId)
  },
  methods:{
    //鼠标移入
    handleWj(){
      this.isShow = true
    },
    //鼠标离开
    handlelk(){
      this.isShow = false
    },
    //558
    toSuccessCart(){
      /* const {imgUrl,title,price} = this.detailInfo
      console.log(imgUrl,title,price)
      const data ={
        imgUrl,
        title,
        price
      }
      sessionStorage.setItem('detail',JSON.stringify(data)) */
      const skuId = this.$route.params.id
      // this.$router.push(`/cartsuccess/${skuId}`)
      this.$router.push(`/cartsuccess/${skuId}`)
      
    }
  },
  computed:{
    ...mapState({
      detailInfo:(state)=>state.detail.detailInfo
    })
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.detail {
  width: 1200px;
  margin: 0 auto;
  height: 7150px;
  margin-top:20px;
}
.detail .detailList {
  display: flex;
  justify-content: space-between;
}
.detail .conList {
  display: flex;
  padding: 13px 0 9px;
}
.detail .conList .itemList {
  display: flex;
  position: relative;
}
.detail .conList .itemList .itemSep {
  padding: 0 10px;
}
.detail .conList .itemList .ellipsis {
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.detail .conList .head .border {
  border: 1px solid #ccc;
  width: 60px;
  display: flex;
  justify-content: space-around;
}
.detail .detailList .conListRight {
  display: flex;
  margin-top: 13px;
}
.detail .detailList .conListRight .list {
  margin-left: 15px;
}
.detail .borderListHidden{
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 150px;
  left: 0;
  top:18px;
  background-color: #ededed;
  border: 1px solid #ccc;
  z-index: 100;
}
.detail .borderListHidden .borderList{
  display: flex;
  width: 660px;
  margin-top: 20px;
  margin-left: 10px;
}
.detail .borderListHidden .br-list{
  display: flex;
  width: 660px;
  flex-direction: column;
  margin-top: 15px;
}
.detail .borderListHidden .br-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
}
.detail .borderListHidden .br-list .br-itemList:last-child {
  margin-right: 120px;
}
.detail .borderListHidden .fore{
  display: flex;
  width: 220px;
  
}
.detail .borderListHidden .fore .p-right .p-name{
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
  margin-bottom: 10px;
}
.detail .borderListHidden .fore .p-right .p-price{
  color: red;
}

.maincon{
  display: flex;
  margin: 10px 0;
}
.previewWrap{
  float: left;
  width: 380px;
  position: relative;
  margin-right: 25px;
}
.previewWrap .zoom{
  margin-bottom: 20px;
}


.InfoWrap{
  width: 590px;
  float: right;
}
.InfoWrap .InfoName{
  font-size: 16px;
  color:#666;
  padding-top: 10px;
  /* line-height: 21px; */
  margin-bottom: 5px;
}
.InfoWrap .news{
  color: #e4393c;
  margin: 0 0 5px;
}
.InfoWrap .news p{
  color: #5e69ad;
}
.InfoWrap .priceArea{
  background: #fee9eb;
  padding: 7px;
  margin: 13px 0;
}
.InfoWrap .priceArea .spike{
  display: flex;
  line-height: 28px;
}
.InfoWrap .priceArea .spike .title{
  font-size: 12px;
  color: #999;
  margin-right: 15px;
}
.InfoWrap .priceArea .spike .price{
  color: #e4393c;
  margin-right: 15px;
}
.InfoWrap .priceArea .spike .price strong{
  font-size: 16px;
}
.InfoWrap .priceArea .spike .price em{
  font-size: 22px;
}
.InfoWrap .priceArea .spike .underlinePrice{
  text-decoration: line-through;
  /* line-height: 28px; */
}
.InfoWrap .priceArea .spike .cutPrice{
  color: #005aa0;
  font-size: 12px;
  padding-left: 5px;
  margin-right: 20px;
}
.InfoWrap .priceArea .spike .goBargain{
  background-color: #f0999b;
  color: #fff;
  font-size: 12px;
  width: 50px;
  height: 22px;
  margin: 5px 2px 0 0;
}
.InfoWrap .priceArea .spike .goBargain .a{
  line-height: 22px;
  text-align: center;
}
.InfoWrap .priceArea .priceArea1{
  overflow: hidden;
  line-height: 28px;
  /* margin-top: 10px;
  margin-right: 15px; */
  display: flex;
}
.InfoWrap .priceArea .priceArea1 .handPrice{
  margin-right: 20px;
}
.InfoWrap .priceArea .priceArea1 .title{
  float: left;
  color: #e4393c;
  font-size: 13px;
  margin-right: 5px;
}
.InfoWrap .priceArea .priceArea1 .price{
  float: left;
  color: #e4393c;
  font-size: 12px;
}
.InfoWrap .priceArea .priceArea1 .price em{
  font-weight: 700;
}
.InfoWrap .priceArea .priceArea1 .price span{
  font-size: 12px;
}
.InfoWrap .priceArea .priceArea1 .remark{
  float: right;
}
.InfoWrap .priceArea .priceArea2{
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.InfoWrap .priceArea .priceArea2 .title{
  margin-right: 15px;
  float: left;
}
.InfoWrap .priceArea .priceArea2 .fixWidth{
  width: 520px;
  float: left;
}
.InfoWrap .priceArea .priceArea2 .fixWidth .red-bg{
  background: #c81623;
  color: #fff;
  padding: 3px;
}
.InfoWrap .priceArea .priceArea2 .fixWidth .t-gray{
  color: #999;
}
.InfoWrap .priceArea .couponWrap,
.InfoWrap .priceArea .activityWrap{
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.InfoWrap .priceArea .activityWrap .fl{
  float: left;
}
.InfoWrap .priceArea .activityWrap .title{
  margin-right: 15px;
  float: left;
}
.InfoWrap .priceArea .activityWrap .fix-width{
  width: 520px;
  float: left;
  color: #999;
}
.InfoWrap .priceArea .activityWrap .fix-width .i-coupon{
  background: #ffdedf;
  border: 1px solid #df3033;
  font-size: 12px;
  color: #df3033;
  padding: 3px 12px;
  margin-right: 12px;
}
.InfoWrap .priceArea .activityWrap .red-bg{
  /* background: #c81623;
  color: #fff; */
  background-color: #fff;
  color:#df3033;
  border:1px solid #df3033;
  padding: 3px;
}
.InfoWrap .priceArea .activityWrap .t-gray{
  margin-left: 5px;
  color: #999;
}
.InfoWrap .priceArea .activityWrap .gift{
  display: flex;
  position: relative;
  height: 30px;
}
.InfoWrap .priceArea .activityWrap .gift .giftImg{
  margin-left: 8px;
  margin-top: 3px;
}
.InfoWrap .priceArea .activityWrap .gift .giftNumber{
  position:absolute;
  color: #e4393c;
  font-size: 12px;
  font-family: arial;
  margin-left: 5px;
  line-height: 30px;
}
.InfoWrap .priceArea .activityWrap .gift .giftLimit{
  margin-left: 25px;
  color:#999;
  line-height: 30px;
}
.InfoWrap .priceArea .activity{
  display: flex;
  margin-top: 10px;
}
.InfoWrap .priceArea .activity .a{
  color: #7d7e80;
}
.InfoWrap .priceArea .activityLeft{
  margin-right: 50px;
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.InfoWrap .priceArea .activityRight{
  width:170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.InfoWrap .priceArea .promotion .cu{
  display:inline-block;
  width: 16px;
  height: 16px;
  background-color: #f15672;
  border-radius: 3px;
  text-align: center;
  line-height: 16px;
  color: #fff;
  margin-right: 11px;
  margin-bottom: 5px;
}
.InfoWrap .support{
   border-bottom: 1px solid #ededed;
   padding-bottom: 5px;
   margin-top: 8px;
}
.InfoWrap .support .supportArea .title{
  margin-right: 15px;
  float: left;
  color: #999;
  font-size: 12px;
}
.InfoWrap .support .supportArea .recycle{
  color: #5E9BD7;
  font-size: 12px;
}
.InfoWrap .support .supportArea .statement{
  font-size: 12px;
  color: #999;
}
.InfoWrap .support .supportArea .fixWidth{
  width: 520px;
  float: left;
  color: #999;
  margin-bottom: 10px;
}
.InfoWrap .choose .cartWrap .controls{
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;
}
.InfoWrap .choose .cartWrap .controls .itxt{
  width: 38px;
  height: 37px;
  border: 1px solid #ddd;
  color: #555;
  float: left;
  border-right: 0;
  text-align: center;
}
.InfoWrap .choose .cartWrap .controls .plus,
.InfoWrap .choose .cartWrap .controls .mins{
  width: 15px;
  text-align: center;
  height: 17px;
  line-height: 17px;
  background: #f1f1f1;
  color: #666;
  position: absolute;
  right: -8px;
  border: 1px solid #ccc;
}
.InfoWrap .choose .cartWrap .controls .mins{
  right: -8px;
  top: 19px;
  border-top: 0;
}
.InfoWrap .choose .cartWrap .controls .plus{
  right: -8px;
}
.InfoWrap .choose .cartWrap .add{
  float: left;
}
.InfoWrap .choose .cartWrap .add a{
  background-color: #e1251b;
  padding: 0 25px;
  font-size: 16px;
  color: #fff;
  height: 36px;
  line-height: 36px;
  display: block;
}
.detail .dableWatch{
  display: flex;
  width: 180px;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
}
.detail .dableWatch h4{
  width: 150px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.detail .dableWatch .content{
  display: flex;
  align-items: center;
  text-align: center;
}
.detail .dableWatch .content div{
  font-size: 12px;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
  /* margin-bottom: 10px; */
  font-family: arial;
}
.detail .dableWatch .content p{
  color: #c81623;
}


.detail .like{
  margin-top: 15px;
}
.detail .like .py-container{
  width: 1200px;
  margin: 0 auto;
}
.detail .like .py-container .title{
  overflow: hidden;
  border-bottom: 1px solid #E4393C;
  margin-bottom: 20px;
  height:30px;
  color: #fff;
}
.detail .like .py-container .title .fl{
  float: left;
  font-size: 14px;
  line-height: 30px;
  width: 100px;
  background-color: #E4393C;
  text-align: center;
}
.detail .like .py-container .bd .favourate{
  border: 1px solid #e4e4e4;
  overflow: hidden;
  padding: 0 10px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.detail .like .py-container .bd li{
  height: 180px;
  margin: 0 -1px;
  overflow: hidden;
  background: #fff;
  position: relative;
  width: 16.667%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.detail .like .py-container .bd li img{
  width: 142px;
  height: 142px;
  transition: all 400ms;
}
.detail .like .py-container .bd .like-text{
  padding: 0;
  width: 142px;
  border-right: 1px solid #e4e4e4;
}
.detail .like .py-container .bd .like-text h3{
  color: #df3033;
  font-size: 14px;
  line-height: 30px;
  margin: 9px 0;
  font-weight: 700;
  text-align: center;
}

/* 商品详情部分 */
.detail .shopContent{
  display: flex;
  height: 6000px;
}
.detail .shopContent .shopContentLeft{
  width: 200px;
}
.detail .shopContent .storeName{
  font-size: 14px;
  color: #666;
  padding: 10px;
}
.detail .shopContent .sp{
  padding: 0 10px;
}
.detail .shopContent .sp .s{
  padding: 10px 0 0;
}
.detail .shopContent .sp .s .storeEvaluation{
  margin-bottom: 8px  ;
}
.detail .shopContent .sp .s .item{
  margin:0 0 5px;
  font-size: 12px;
  color: #999;
}
.detail .shopContent .sp .s .item em{
  padding-left: 10px;
  color: #33BB44;
}
.detail .shopContent .sp .s .item .two{
  color: #E2231A;
}
.detail .shopContent .sp .s .btn{
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-bottom: 10px;
}
.detail .shopContent .sp .s .btn button{
  width: 85px;
  height: 36px;
  font-size: 12px;
  color: #666;
  background-color: #F8F8F8;
  border: 1px solid #DDDDDD;
}
.detail .shopContent .spSearch{
  width: 200px;
  position: relative;
}
.detail .shopContent .spSearch h5{
  color: #666;
  font-size: 14px;
  width: 180px;
  padding: 10px;
}
.detail .shopContent .spSearch .keyword{
  position: relative;
  width: 200px;
  height: 80px;
  padding: 8px;
  color: #666;
  right:-20px;
}
.detail .shopContent .spSearch .keyword .kSearch{
  width:110px; 
  height:15px;
  margin-bottom: 2px;
  border: 1px solid #CCCCCC;
}
.detail .shopContent .spSearch .keyword .pdSearch{
  width: 46px;
  height: 16px;
  border: 1px solid #CCCCCC;
  margin: 2px;
}
.detail .shopContent .spSearch .keyword .spSearchPrice{
  margin-bottom: 2px;
}
.detail .shopContent .spSearch .keyword .spSearchPrice .text1{
  margin-left: 16px;
}
.detail .shopContent .spSearch .keyword .ss{
  position:absolute;
  right: 114px;
  width: 45px;
  height: 25px;
  border: 1px solid #CCCCCC;
}
.detail .shopContent .classification h5{
  width: 188px;
  height: 19px;
  color: #666;
  font-size: 14px;
  padding: 10px;
}
.detail .shopContent .classification .sort a{
  display: inline-block;
  width: 170px;
  height: 18px;
  line-height: 22px;
  border-bottom: 1px solid #CCCCCC;
  color: #666;
  padding: 5px;
  margin-left: 10px;
}
.detail .shopContent .aside{
  width: 210px;
  float: left;
  /* border: 1px solid #ccc; */
  padding-top: 15px;
}
.detail .shopContent .aside .tabWraped {
  height: 40px;
}
.detail .shopContent .aside .tabWraped h4{
  border-top: 3px solid #fff;
  float: left;
  line-height: 37px;
  width: 105px;
  text-align: center;
  border-bottom: 1px solid #E4393C;
}
.detail .shopContent .aside .tabWraped h4.active{
  background-color: #E4393C;
  /* border-top: 3px solid #e1251b; */
  color: #FFFFFF;
  border-bottom: 0;
  font-weight: normal;
}
.detail .shopContent .aside .tabContent{
  padding: 10px;
}
.detail .shopContent .aside .tabContent .tab-pane{
  display: none;
}
.detail .shopContent .aside .tabContent .tab-pane.active{
  display: block;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .partList{
  overflow: hidden;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .partList li{
  width: 50%;
  float: left;
  border-bottom: 1px dashed #ededed;
  line-height: 28px;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .goodsList> li{
  margin: 5px 0 15px;
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px; 
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .goodsList> li .list-wrap{
  padding-bottom: 8px;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .goodsList> li .list-wrap .p-img{
  text-align: center;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .goodsList> li .list-wrap .p-img img{
  width: 160px;
  height: 160px;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .goodsList> li .list-wrap .price{
  float: right;
  font-size: 14px;
  color: #e4393c;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .goodsList> li .list-wrap .attr{
  float: left;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .goodsList> li .list-wrap .attr i{
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #e4393c;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: #fff;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .goodsList> li .list-wrap .attr em{
  margin: 0 0 0 2px;
  font-size: 12px;
  color: #999;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .newList{
  width: 188px;
  height: 19px;
  color: #666;
  font-size: 14px;
  margin-top: 40px;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .newList .p-img{
  text-align: center;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .newList .p-img img{
  width: 160px;
  height: 160px;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .newList .newListName{
  padding: 10px;
}
.detail .shopContent .aside .tabContent .tab-pane:nth-child(1) .newList .price{
  font-size: 14px;
  color: #e4393c;
  text-align: center;
}

.detail .shopContent .shopContentRight .tab-wraped{
  /* position: relative; */
  width: 990px;
  background: #ededed;
  overflow: hidden;
  padding-top: 10px;
  border-bottom: 1px solid #E4393C;
  
}
.detail .shopContent .shopContentRight .tab-wraped li{
  float: left;
}
/* .detail .shopContent .shopContentRight .tab-wraped li+ li > a{
  border-left: 1px solid #ddd;
} */
.detail .shopContent .shopContentRight .tab-wraped li.active a{
  background: #e1251b;
  color: #fff;
}
.detail .shopContent .shopContentRight .tab-wraped li a{
  display: block;
  height: 40px;
  line-height: 40px;
  padding: 0 25px;
  text-align: center;
  color: #666;
  background: #fcfcfc;
  /* border-top: 1px solid #ddd; */
  border-bottom: 1px solid #ddd;
}
.detail .shopContent .shopContentRight .tab-wraped .addshopcar{
  float: right;
  position: relative;
  background-color: #e1251b;
  border: 1px solid #e1251b;
  padding: 6px 20px;
  font-size: 12px;
  color: #fff;
  display: inline-block;
  box-sizing: border-box;
  top: 8px;
  margin-right: 15px;
}
.detail .sp-related{
  width: 990px;
}
.detail .sp-related .sp-b{
  padding: 0 0 10px;
  margin: 0 10px 25px;
}
.detail .sp-related .brand{
  padding: 20px 0 0;
  margin: 0 0 5px;
}
.detail .sp-related .brand span{
  padding-left: 42px;
  color: #666;
  font-size: 12px;
}
.detail .sp-related .brand span a{
  color: #5E69AD;
}
.detail .sp-related .brandList{
  padding: 20px 0 15px;
  display: flex;
  flex-wrap: wrap;
}
.detail .sp-related .brandList li{
  width: 200px;
  padding-left: 42px;
  margin: 0 0 5px;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
  font-size: 12px;
}
.detail .sp-related .brandList li a{
  color: #5E69AD;
}
.detail .sp-related p{
  float: right;
  padding: 0 20px 0 0;
}
.detail .sp-related p a{
  color: #5E69AD;
  font-size: 12px;
}
.detail .sp-related span{
  color: #5E69AD;
  font-size: 12px;
}
.detail .dt-quality{
  display: flex;
  position: relative;
  color: #666;
}
.detail .dt-quality .certificate{
  /* float: right; */
  position:absolute;
  left: 250px;
  top: 10px;
}
.detail .dt-quality .quality-life{
  width: 100%;
  height: 80px;
  border: 1px solid #E3DDDD;
}
.detail .dt-quality .certificate a{
  color: #5E69AD;
}
.detail .detail-p{
  width: 990px;
  display: flex;
  flex-direction: column;
}
.detail .detail-p .p-item{
  margin: 0 auto;
}
.detail .detail-p .p-item img{
  width: 750px;
}
</style>