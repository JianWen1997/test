<template>
    <div class="searchContainer">
      <div class="allResult">
        <div class="resultItem">
          <a href="javascript:;">全部结果</a>
        </div>
        <i class="resultXX">></i>
        <div class="resultNav">
          "空调"
        </div>
      </div>
      <div class="attrContainer">
        <div class="attrItem">
          <div class="attrTitle">
            <strong>{{attr1.title}}:</strong>
          </div>
          <div class="attrValue">
            <ul class="trademarkContainer">
              <li class="trademarkImg" v-for="item in attr1.attrList" :key="item.id">
                <a href="javascript:;">
                  <img :src="item.imgUrl" alt="" :title="item.tmName">
                </a>
              </li>
            </ul>
          </div>
          <div class="attrOption">
            <a href="javascript:;" class="more">
              更多
              <i></i>
            </a>
            <a href="javascript:;" class="plus">
              <i></i>
              多选
            </a>
          </div>
        </div>
        <div class="attrItem">
          <div class="attrTitle">
            <strong>{{attr2.title}}:</strong>
          </div>
          <div class="attrValue">
            <ul class="categoryContainer">
              <li class="categoryList" v-for="(item, index) in attr2.attrList" :key="index">
                <a href="javascript:;">
                  {{item}}
                </a>
              </li>
            </ul>
          </div>
           <div class="attrOption">
            <a href="javascript:;" class="more" style="visibility: hidden;">
              更多
              <i></i>
            </a>
            <a href="javascript:;" class="plus" style="visibility: hidden;">
              <i></i>
              多选
            </a>
          </div>
        </div>
        <div class="attrItem">
          <div class="attrTitle">
            <strong>{{attr3.title}}:</strong>
          </div>
          <div class="attrValue">
            <ul class="categoryContainer">
              <li class="categoryList" v-for="(item, index) in attr3.attrList" :key="index">
                <a href="javascript:;">
                  {{item}}
                </a>
              </li>
            </ul>
          </div>
           <div class="attrOption">
            <a href="javascript:;" class="more">
              更多
              <i></i>
            </a>
            <a href="javascript:;" class="plus" style="visibility: hidden;">
              <i></i>
              多选
            </a>
          </div>
        </div>
        <div class="attrItem">
          <div class="attrTitle">
            <strong>{{attr4.title}}:</strong>
          </div>
          <div class="attrValue">
            <ul class="lineContainer">
              <li class="lineList"  v-for="(item, index) in attr4.attrList" :key="index">
                <a href="javascript:;">
                  {{item}}
                </a>
              </li>
            </ul>
          </div>
          <div class="attrOption">
            <a href="javascript:;" class="more" style="visibility: hidden;">
              更多
              <i></i>
            </a>
            <a href="javascript:;" class="plus">
              <i></i>
              多选
            </a>
          </div>
        </div>
        <div class="attrItem">
          <div class="attrTitle">
            <strong>{{attr5.title}}:</strong>
          </div>
          <div class="attrValue">
            <ul class="lineContainer">
              <li class="lineList" v-for="(item, index) in attr5.attrList" :key="index">
                <a href="javascript:;">
                  {{item}}
                </a>
              </li>
            </ul>
          </div>
          <div class="attrOption">
            <a href="javascript:;" class="more" style="visibility: hidden;">
              更多
              <i></i>
            </a>
            <a href="javascript:;" class="plus">
              <i></i>
              多选
            </a>
          </div>
        </div>
        <div class="attrItem gjOption">
          <div class="attrTitle">
            <strong>{{attr6.title}}:</strong>
          </div>
          <div class="attrValue">
            <div class="optionList">
              <a href="javascript:;" class="options" v-for="(item, index) in attr6.attrList" :key="index">
                {{item}}
                <i></i>
              </a>
            </div>
          </div>
        </div>

      </div>
      <div class="commodityContainer">
        <div class="left">
          <div class="leftTitle">
            <h3>商品精选</h3>
            <span></span>
          </div>
          <div class="advertising" v-for="(item, index) in advertising" :key="index">
            <img :src="item.imgUrl" alt="" @click="goDetail(item.id)">
            <p class="price">
              <span>￥{{item.price}}</span>
            </p>
            <p class="desc">
              <em @click="goDetail(item.id)">{{item.title}}</em>
            </p>
            <p class="comm">已有<em>{{item.eva}}</em>人评价</p>
          </div>
        </div>
        <div class="right">
          <div class="filter">
            <div class="line-top">
              <div class="sort">
                <a href="javascript" class="active">
                  综合
                  <i class="arrow"></i>
                </a>
                <a href="javascript">
                  销量
                  <i class="arrow"></i>
                </a>
                <a href="javascript">
                  评论数
                  <i class="arrow"></i>
                </a>
                <a href="javascript">
                  新品
                  <i class="arrow"></i>
                </a>
                <a href="javascript">
                  价格
                  <em class="up">
                    <i class="upTop"></i>
                    <i class="upBottom"></i>
                  </em>
                </a>
              </div>
              <div class="pages">
                <span class="allComm">共<em>90万+</em> 件商品</span>
                <span class="limt"><em style="color: red;font-weight: bold;">1</em> / 100</span>
                <div class="arrowLeft">&lt;</div>
                <div class="arrowRight">&gt;</div>
              </div>
            </div>
            <div class="line">
              <div class="site">
                配送至:
                <div>
                  广东深圳市宝安区
                  <i></i>
                </div>
              </div>
              <div class="checkeds">
                <ul>
                  <li>
                    <a href="javascript:;">
                      <i></i>
                      京东物流
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i></i>
                      211限时达
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i></i>
                      货到付款
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="active"></i>
                      仅显示有货
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i></i>
                      京东国际
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i></i>
                      可配送全球
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i></i>
                      新品
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i></i>
                      PLUS专享
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i></i>
                      拍拍二手
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div class="goodsList">
            <ul class="wrap">
              <li v-for="(item,index) in productList" :key="index">
                <div class="goodsWrap">
                  <div class="img">
                    <img :src="item.imgUrl" alt="" @click="goDetail(item.id)">
                  </div>
                  <div class="price">
                    <em>￥</em>
                    <span>{{item.price}}</span>
                  </div>
                  <div class="title"><em @click="goDetail(item.id)">{{item.title}}</em></div>
                  <div class="commit"><em>{{item.eva}}</em>条评价</div>
                  <div class="shop">
                    <span>美的京东自营官方旗舰店</span>
                  </div>
                  <div class="addCart">
                    <a href="javascript:;">
                      <i class="con"></i>
                      对比
                    </a>
                    <a href="javascript:;">
                      <i class="guanzhu"></i>
                      关注
                    </a>
                    <a href="javascript:;" class="shopCar">
                      <i ></i>
                      <em>加入购物车</em>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "Search",
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      attr1: state => state.search.attr1,
      attr2: state => state.search.attr2,
      attr3: state => state.search.attr3,
      attr4: state => state.search.attr4,
      attr5: state => state.search.attr5,
      attr6: state => state.search.attr6,
      productList: state => state.search.productList,
      advertising: state => state.search.advertising
    })
  },
  mounted() {
    const {name} = this.$route.query
    this.$store.dispatch('getSearchData', name)
  },
  methods:{
    goDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .searchContainer
    width 1210px
    margin 0 auto
    .allResult
      display  flex
      font 12px
      padding-top 15px
      height 29px
      .resultItem
        color #666
        a:hover
            color #f30213 !important
      .resultXX
        margin 0 5px
        font-family "Helvetica Neue","Hiragino Sans GB",SimSun,serif
      .resultNav
        margin-left 5px
        color #666
        font-weight bold
    // 平台属性
    .attrContainer
      border-top 1px solid #ddd
      .attrItem
        border-bottom 1px solid #ddd
        display flex
        a
          color #005aa0
          &:hover
            color #e4393c !important
        .attrTitle
          // float left
          flex-shrink 0
          overflow hidden
          width 100px
          padding-left 10px
          background-color #f3f3f3
          color #666
          line-height 34px
          strong
            font-weight bold
        .attrValue
          flex-shrink 0
          width 960px
          // margin-left 110px
          // padding-right 130px
          padding-left 10px
          .trademarkContainer
            display flex
            flex-wrap wrap
            padding 10px 0
            li
              border 1px solid #ddd
              margin-top -1px
              margin-left -1px
            img
              width 102px
              height 36px
              margin 5px 6px
          .categoryContainer
            display flex
            .categoryList
              width 130px
              line-height 34px
          .lineContainer
            display flex
            .lineList
              margin-right 50px
              line-height 34px
        &.gjOption
          .attrValue
            width auto
            .optionList
              margin-top 5px
            .options
              float left
              border 1px solid #ddd
              line-height 23px
              padding 0 4px 0 6px
              margin-right 10px
              &:hover
                color #005aa0 !important
              i
                display inline-block
                margin-bottom -5px
                width 20px
                height 20px
                background url(http://misc.360buyimg.com/product/search/1.0.8/css/i/search.ele.png) no-repeat 4px 7px
      .attrOption
        flex-shrink 0
        padding-top 5px
        a
          display inline-block
          border 1px solid #ddd
          color black
          height 23px
          line-height 23px
          position relative
          i
            position absolute
            width 20px
            height 20px
            background url(http://misc.360buyimg.com/product/search/1.0.8/css/i/search.ele.png) no-repeat
            transition background-position .15s ease-in-out
          &.more
            width 39px
            padding 0 7px 0 4px
            margin-right 10px
            i
              background-position 4px 7px
            &:hover
              i
                background-position 4px -10px
          &.plus
            width 24px
            padding 0 4px 0 15px
            i
              width 13px
              background-position 0 -63px
              top 1px
              left 1px
          &.plus:hover
            border-color #e4393c
            i
              background-position 0 -84px
    // 商品展示
    .commodityContainer
      padding-top 10px
      overflow hidden
      .left
        float left
        width 180px
        border 1px solid #ddd
        .leftTitle
          display flex
          justify-content space-between
          align-items center
          margin 0 10px
          line-height 36px
          h3
            color #666
          span
            width 20px
            height 11px
            color #ddd
            background url(http://misc.360buyimg.com/product/search/1.0.8/css/i/u-ad.gif) no-repeat
        .advertising
          padding 10px
          img
            width 160px
            height 160px
            cursor pointer
          .price
            color #e3393c
            font-size 14px
            padding 10px
            span
              font-weight bold
          .desc
            line-height 18px
            height 36px
            overflow hidden
            padding 0 10px
            color #666
            cursor pointer
          .comm
            padding 10px
            color #666
            em
              color #005aa0
      .right 
        margin-left 190px
        .filter
          border-top 1px solid #ddd
          .line-top
            border-bottom 1px solid #ddd
            background #f1f1f1
            display flex
            padding 5px 10px
            justify-content space-between
            .sort
              a
                float left
                height 23px
                line-height 23px
                padding 0 9px
                border 1px solid #ddd
                background-color white
                color #333
                margin-right -1px
                &:hover
                  color #e4393c !important
                  border-color #e4393c
                  position relative
                &.active
                  border-color #e4393c
                  background #e4393c
                  color white !important
                  .arrow
                    background-position 0 -120px
                .arrow
                  display inline-block
                  width 7px
                  height 11px
                  margin 3px 0 0 4px
                  background url(http://misc.360buyimg.com/product/search/1.0.8/css/i/sprite-arrow.png) no-repeat 0 -100px
                .up
                  display inline-block
                  padding-top 3px
                  margin-left 5px
                  width 7px
                  line-height 4px
                  vertical-align top
                  i
                    display inline-block
                    width 7px
                    height 4px
                    background url(http://misc.360buyimg.com/product/search/1.0.8/css/i/sprite-arrow.png) no-repeat
                    &.upTop
                      background-position -10px -100px
                    &.upBottom
                      background-position -10px -110px
            .pages
              display flex
              line-height 25px
              .allComm
                margin-right 10px
                color #999
                em
                 color #666
              .limt
                color black
                margin-right 10px
              .arrowLeft,
              .arrowRight
                width 50px
                height 25px
                text-align center
                border 1px solid #ddd
                box-sizing border-box
                font-family: "\5b8b\4f53"
                color #ddd
                font-size 18px
              .arrowRight
                background white
                margin-left -1px
          .line
            display flex
            background-color #f9f9f9
            border-bottom 1px solid #ddd
            padding 6px 8px
            .site
              color #ddd
              display flex
              align-items center
              div
                background white
                margin-left 5px
                position relative
                border 1px solid #ddd
                padding 0 24px 0 4px
                line-height 23px
                color #999
                // height 23px
                i
                  // display inline-block
                  position absolute
                  width 20px
                  height 20px
                  background url(http://misc.360buyimg.com/product/search/1.0.8/css/i/search.ele.png) no-repeat 4px 7px
            .checkeds
              margin-left 10px
              ul
                display flex
                line-height 25px
                a
                  position relative
                  padding-left 20px
                  margin-right 5px
                  &:hover
                    color #e4393c !important
                    i
                      border-color #e4393c
                  i
                    position absolute
                    top 1px
                    left 3px
                    width 15px
                    height 15px
                    border 1px solid #ddd
                    box-sizing border-box
                    &.active
                      border-color #e4393c
                      background url(http://misc.360buyimg.com/product/search/1.0.8/css/i/search.ele.png) no-repeat -1px -107px
        .goodsList
          padding-top 5px
          .wrap
            display flex
            flex-wrap wrap
            width 1040px
          li
            margin 10px 20px 0 0
            .goodsWrap
              width 220px
              padding 38px 9px  10px
              border 1px solid transparent
              transition border-color .1s
              &:hover
                border-color #ddd
                box-shadow 0px 0px 3px #ddd
              .img
                margin-bottom 15px
                img
                  width 220px
                  height 220px
                  cursor pointer
              .price
                margin-bottom 8px
                color #e4393c
                em
                  font-size 16px
                span
                  font-size 20px
              .title
                height 40px
                margin-bottom 8px
                overflow hidden
                color #666
                em
                  line-height 20px
                  cursor pointer
              .commit
                margin-bottom 8px
                color #666
                em
                  color #646fb0
                  font-weight bold
              .shop
                width 122px
                margin-bottom 10px
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                color #666
              .addCart
                margin-bottom 10px
                overflow hidden
                a
                  float left
                  position relative
                  height 25px
                  line-height 25px
                  padding 0 6px 0 24px
                  border 1px solid #ddd
                  margin-right -1px
                  color #999
                  &:hover
                    color #e4393c !important
                    border-color #e4393c
                    z-index 2
                    .con
                      border-color #e4393c
                    .guanzhu
                      background-position 0 -436px
                  i
                    position absolute
                    background url(http://misc.360buyimg.com/product/search/1.0.8/css/i/search.ele.png) no-repeat
                    &.con
                      border 1px solid #ddd
                      background url()
                      width 14px
                      height 14px
                      top 5px
                      left 4px
                    &.guanzhu
                      background-position 0 -413px
                      transition background-position .15s
                      width 16px
                      height 16px
                      top 3px
                      left 4px
                  &.shopCar
                    color #e4393c
                    i
                      background-position 0 -272px
                      width 18px
                      height 18px
                      top 3px
                      left 3px
</style>