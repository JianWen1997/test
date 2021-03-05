<template>
  <!-- 底部 -->
  <footer class="footer">
    <ul class="footer-top">
      <li>
        <div></div>
        <span>品类齐全,轻松购物</span>
      </li>
      <li>
        <div></div>
        <span>多仓直发,极速配送</span>
      </li>
      <li>
        <div></div>
        <span>正品行货,精致服务</span>
      </li>
      <li>
        <div></div>
        <span>天天低价,畅选无忧</span>
      </li>
    </ul>
    <div class="footer-container">
      <div class="footerList">
        <div class="footerItem">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>配送方式</h4>
          <ul class="footerItemCon">
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>支付方式</h4>
          <ul class="footerItemCon">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>售后服务</h4>
          <ul class="footerItemCon">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>特色服务</h4>
          <ul class="footerItemCon">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>京东E卡</li>
            <li>京东通信</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
          
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            联系我们
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            商家入驻
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>关于我们</li>
        </ul>
        <p>地址：北京市昌平区宏福科技园综合楼6层</p>
        <p>京ICP备19006430号</p>
      </div>
    </div>
    <ul class="footer-bottom">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="less" rel="stylesheet/less"  scoped>
.footer {
  
  background-color: #eaeaea;
  .footer-top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1200px;
    height:100px;
    line-height:100px;
    margin: 0 auto;
    
    li{
      width:220px;
      height:42px;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      div{
         width:36px;
        height:40px;
        background-image: url(./images/2.png);
      }
      &:nth-of-type(1) div{
        background-position: -0px -192px;
      }
      &:nth-of-type(2) div{
        background-position: -41px -192px;
      }
      &:nth-of-type(3) div{
        background-position: -82px -192px;
      }
      &:nth-of-type(4) div{
        background-position: -123px -192px;
      }
      span{
        font-size: 18px;
        color:#444;
        font-weight: bold;
      }
    }
  }
  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .footerItem {
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }

        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
  .footer-bottom{
    width:660px;
    height:100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    li{
      width:103px;
      height:32px;
      margin:0 3px;
      background-image: url(./images/2.png);
      &:nth-of-type(1){
        background-position: -205px -111px;
      }
      &:nth-of-type(2){
        background-position: -205px -74px;
      }
      &:nth-of-type(3){
        background-position: -205px -37px;
      }
      &:nth-of-type(4){
        background-position: -205px 0;
      }
      &:nth-of-type(5){
        background-position: 0 -155px;
      }
      &:nth-of-type(6){
        background-position: -205px -155px;
      }
    }
  }
}
</style>