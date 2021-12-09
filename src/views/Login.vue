<template>
  <el-container>
    <el-header><h1>浙品码信息管理系统</h1></el-header>
    <el-main>
      <div class="toast">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>通知文件</span>
          </div>
          <div class="text item">
            <p>
              <a href=""
                >1、关于组织开展浙江省备案非标电动自行车淘汰置换“平安e行”活动的通知
              </a>
            </p>
            <p><a href="">2、关于电动自行车和电池的操作手册 </a></p>
            <p><a href="">3、电动自行车和电池生产企业赋码操作视频</a></p>
            <p><a href="">4、接口规范文件 </a></p>
          </div>
        </el-card>
      </div>
      <div class="login">
        <el-card class="box-card">
          <div class="text item">
            <div class="login-logo">
              <img src="../assets/user.png" alt="" />
            </div>
            <div class="user-input">
              <i class="el-icon-s-custom"></i
              ><input v-model="username" type="text" placeholder="请输入用户名" />
            </div>
            <div class="pwd-input">
              <i class="el-icon-lock"></i
              ><input v-model="password" type="password" placeholder="请输入密码" />
            </div>
            <div class="btn">
              <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary" @click="visibleDialog">密码重置</el-button>

            </div>
            <div class="regist">没有账号？<router-link :to="{name: 'Register'}">立即注册</router-link></div>
          </div>
        </el-card>
      </div>
    </el-main>
    <el-footer>
      <div class="footer">
        <p>- 我们建议您使用Chrome浏览器或使用IE10以上等主流浏览器运行环境 前往下载</p>
        <p>- 主办单位：浙江省市场监督管理局 技术支持：浙江省方大标准信息有限公司 -</p>
        <p>备案/许可证号：浙ICP备16023589号-9 技术支持：关工 0571-85786946 -</p>
        <p>建议分辨率：1440×900</p>
      </div>
    </el-footer>
    <ChangePwd />
  </el-container>
</template>

<script>
// import { post } from '../utils/requset'
import ChangePwd from '../components/ChangePwd.vue'
export default {
  name: 'Logon',
  components: { ChangePwd },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    visibleDialog () {
      this.$store.commit('visibleDialog')
    },
    login () {
      localStorage.isLogin = true
      this.$router.push({ name: 'Home' })
      // const getLogin = async () => {
      //   const result = await post('http://localhost:8081/api/login/user', { username: this.username, password: this.password })
      //   console.log(result)
      //   if (result.success) {
      //     this.$store.commit('setLoginState', result.success)
      //     this.$router.push({ name: 'Home' })
      //   }
      // }
      // getLogin()
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.el-header {
  background-color: #fff;
  color: #333;
  text-align: left;
  height: 100px;
  margin-bottom: 30px;
  padding-left: 300px;
}
.el-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: center;
  color: #333;
  height: 200px;
  font-size: 12px;
}

.el-main {
  position: relative;
  background: url("../assets/bg1.png") no-repeat center center;
  background-size: 100% 100%;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 600px;
}

body > .el-container {
  margin-bottom: 40px;
}
.toast .text {
  font-size: 12px;
}

.toast .item {
  line-height: 24px;
  text-align: left;
  p {
    border-bottom: 1px dashed #fff;
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
  }
}
.toast .item p {
  margin: 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.toast .clearfix {
  line-height: 10px;
  font-size: 18px;
}
.clearfix:after {
  clear: both;
}

.toast .box-card {
  position: absolute;
  top: 20%;
  right: 45%;
  background-color: #9abedf;
  width: 235px;
  height: 295px;
  color: #fff;
  font-weight: bold;
  border-radius: 15px;
}
.login {
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    position: absolute;
    top: 10%;
    right: 15%;
    background: #aac2d9;
    width: 400px;
    height: 500px;
    border-radius: 15px;
    line-height: 40px;
    .login-logo {
      margin-bottom: 15px;
    }
    .user-input,
    .pwd-input {
      background: #fff;
      border-radius: 8px;
      margin-bottom: 30px;
      i {
        font-size: 25px;
        margin-right: 10px;
        color: #dcdcde;
      }
      input {
        outline: none;
        border: none;
        width: 80%;
      }
    }
    .btn {
      .el-button {
        margin: 20px 15px 10px 15px;
        width: 150px;
        height: 50px;
      }
    }
    .regist {
      text-align: right;
    }
  }
}
.footer {
    padding-top: 100px;
  width: 500px;
}
</style>
