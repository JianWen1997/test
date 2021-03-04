<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideFirst" @mouseenter="showFirst">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" @click="toSearch" v-show="isShowFirst">
          <div class="all-sort-list2">
            <!-- 遍历三级分类的数据 动态渲染 -->
            <div
              class="item"
              v-for="(c1, index) in baseCategoryList"
              :key="c1.categoryId"
              :class="{ item_on: currentIndex === index }"
              @mouseenter="showSubCategory(index)"
            >
              <h3>
                <!-- 一级分类的信息 -->
                <a href="javascript:;" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                <!-- <a href="javascript:;">{{ c1.categoryName }}</a> -->
                <!-- <router-link
                  :to="{
                    path: '/search',
                    query: {
                      categoryName: c1.categoryName,
                      categoryId: c1.categoryId,
                    },
                  }"
                  >{{ c1.categoryName }}</router-link
                > -->
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <!-- 二级分类的信息 -->
                      <a href="javascript:;" :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                      <!-- <a href="javascript:;">{{ c2.categoryName }}</a> -->
                     <!--  <router-link
                        :to="{
                          path: '/search',
                          query: {
                            categoryName: c2.categoryName,
                            categoryId: c2.categoryId,
                          },
                        }"
                        >{{ c2.categoryName }}</router-link
                      > -->
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <!-- 三级分类的信息 -->
                        <a href="javascript:;" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                        <!-- <a href="javascript:;">{{ c3.categoryName }}</a> -->
                        <!-- <router-link
                          :to="{
                            path: '/search',
                            query: {
                              categoryName: c3.categoryName,
                              categoryId: c3.categoryId,
                            },
                          }"
                          >{{ c3.categoryName }}</router-link
                        > -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
//引入vuex的辅助函数
import { mapState } from "vuex";
//引入lodash 按需引入throttle
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  computed: {
    //获取三级分类的数据
    ...mapState({
      baseCategoryList: (state) => state.home.baseCategoryList,
    }),
  },
  data() {
    return {
      currentIndex: -2, //用来存储高亮的索引
      isShowFirst:true //一级目录是否显示
    };
  },
  methods: {
    //鼠标进入
    showSubCategory: throttle(function (index) {
      if(this.currentIndex !== -2){
        this.currentIndex = index
      }
      
    }, 200),
    //点击一级目录/二级目录/三级目录跳转search并传参
    toSearch(event){
      //获取标签对象
      const nodeTarget = event.target
      //点击的是a标签
      if(nodeTarget.nodeName === 'A'){
        //console.log(1)
        const {category1id,category2id,category3id,categoryname} = nodeTarget.dataset
        //路由跳转,并传参
        const  query = {categoryName:categoryname}
        //判断一二三
        if(category1id){
          query.category1Id = category1id
        }else if(category2id){
          query.category2Id = category2id
        }else if(category3id){
          query.category3Id = category3id
        }
        //路由跳转并传参
        //判断当前的路径是不是/search,同时确定params是不是存在
        const {path,params} = this.$route
        if(path.indexOf('/search') === 0){
          
          this.$router.replace({path,query,params})
        }else{
          //console.log(path)
          this.$router.push({path:'/search',query})
        }
        
        //隐藏高亮效果
        this.currentIndex = -2
        this.isShowFirst = false
      }
    },
    //鼠标移入显示一级菜单
    showFirst(){
      this.isShowFirst = true
      this.currentIndex = -1
    },
    //鼠标移出隐藏一级菜单
    hideFirst(){
      this.currentIndex = -2
      if(this.$route.path!=='/'){
        this.isShowFirst = false
      }

    }
  },
  //页面渲染完毕之后生命周期钩子
  mounted(){
    //判断当前的路由是不是根路径
    if(this.$route.path!=='/'){
      this.isShowFirst = false
    }
  }

};
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: green;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>