// 引入Mock
import Mock from 'mockjs'
// 引入三级分类的数据
import category from './category.json'
//引入user用户数据
import user from './user.json'
import banner from './banner.json'


// 生成随机的数据
Mock.mock('/mock/category',{code:200,data:category})
Mock.mock('/mock/user',{code:200,data:user})
Mock.mock('/mock/banner',{code:200,data:banner})


// console.log('执行了mock')


// 面试题: 根据提供的用户名和密码实现页面中的登录效果,登录成功,则提示,欢迎使用xxx公司系统,登录失败则提示帐号或者密码错误---类似这种的面试题,admin/123
// 下载脚手架工具,下载vue项目模版,搭建服务器,实现跨域,使用mockjs模拟后台数据