<template>
  <!-- 登录 -->
  <div class="login-wrap">
    <div class="login">
      <div class="loginform">
        <ul class="tab clearFix">
          <li>
            <a href="##" style="border-right: 0">扫描登录</a>
          </li>
          <li>
            <a href="##" class="current">账户登录</a>
          </li>
        </ul>

        <div class="content">
          <form action="##">
            <div class="input-text clearFix">
              <i></i>
              <input
                type="text"
                placeholder="手机号"
                v-model="phone"
                name="phone"
                v-validate="'required|phone'"
                :class="{ valid: errors.has('phone') }"
              />
              <span class="error-msg">{{ errors.first("phone") }}</span>
            </div>

            <div class="input-text clearFix">
              <i class="pwd"></i>
              <input
                type="text"
                placeholder="请输入密码"
                v-model="password"
                name="password"
                v-validate="{ required: true, min: 6, max: 10 }"
                :class="{ valid: errors.has('password') }"
              />
              <span class="error-msg">{{ errors.first("phone") }}</span>
            </div>

            <div class="setting clearFix">
              <label class="checkbox inline">
                <input name="m1" type="checkbox" value="2" checked="" />
                自动登录
              </label>
              <span class="forget">忘记密码？</span>
            </div>
            <button class="btn" @click.prevent="login">登&nbsp;&nbsp;录</button>
          </form>
          <div class="call clearFix">
            <ul>
              <li><img src="./images/qq.png" alt="" /></li>
              <li><img src="./images/sina.png" alt="" /></li>
              <li><img src="./images/ali.png" alt="" /></li>
              <li><img src="./images/weixin.png" alt="" /></li>
            </ul>
            <!-- 去注册界面 -->
            <router-link to="/register" class="register">立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data(){
    return {
      phone:'10000000001',
      password:'123456'
    }
  },
  methods:{
    async login(){
      let phone = sessionStorage.getItem('phone')
      let password = sessionStorage.getItem('password')
      const success = await this.$validator.validateAll()
      if(success&&this.phone == phone && this.password == password){
        this.$message.success('登陆成功')
        this.$router.replace('/')
        this.$forceUpdate()
      }else{
        this.$message.error('账号或密码错误,请重新登录')
      }
      
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less"  scoped>
.login-wrap {
  height: 457px;
  background-color: #EA042A;
  margin-top:20px;
  .login {
    width: 1000px;
    height: 457px;
    margin: 0 auto;
    background: url(./images/11.jpg) no-repeat;
  }
  .loginform {
    width: 420px;
    height: 406px;
    box-sizing: border-box;
    background: #fff;
    float: right;
    top: 45px;
    position: relative;
    padding: 20px;
    .tab {
      li {
        width: 50%;
        float: left;
        text-align: center;
        a {
          width: 100%;
          display: block;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          font-weight: 700;
          color: #333;
          border: 1px solid #ddd;
          box-sizing: border-box;
          text-decoration: none;
        }
        .current {
          border-bottom: none;
          border-top-color: #28a3ef;
          color: #e1251b;
        }
      }
    }
    .content {
      width: 380px;
      height: 316px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-top: none;
      padding: 18px;
      form {
        margin: 15px 0 18px 0;
        font-size: 12px;
        line-height: 18px;
        .input-text {
          margin-bottom: 22px;
          position: relative;
          i {
            float: left;
            width: 37px;
            height: 32px;
            border: 1px solid #ccc;
            background: url(./images/icons.png) no-repeat -10px -201px;
            box-sizing: border-box;
            border-radius: 2px 0 0 2px;
          }
          .pwd {
            background-position: -72px -201px;
          }
          input {
            width: 302px;
            height: 32px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-left: none;
            float: left;
            padding-top: 6px;
            padding-bottom: 6px;
            font-size: 14px;
            line-height: 22px;
            padding-right: 8px;
            padding-left: 8px;

            border-radius: 0 2px 2px 0;
            outline: none;
          }

          .error-msg {
            position: absolute;
            top: 100%;
            left: 40px;
            color: red;
          }
        }
        .setting {
          label {
            float: left;
          }
          .forget {
            float: right;
          }
        }
        .btn {
          background-color: #e1251b;
          padding: 6px;
          border-radius: 0;
          font-size: 16px;
          font-family: 微软雅黑;
          word-spacing: 4px;
          border: 1px solid #e1251b;
          color: #fff;
          width: 100%;
          height: 36px;
          margin-top: 25px;
          outline: none;
        }
      }
      .call {
        margin-top: 30px;
        ul {
          float: left;
          li {
            float: left;
            margin-right: 5px;
          }
        }
        .register {
          float: right;
          font-size: 15px;
          line-height: 38px;
        }
        .register:hover {
          color: #4cb9fc;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>