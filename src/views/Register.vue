<template>
  <el-container>
    <el-main>
      <div class="title">
        <p>浙品码信息管理系统</p>
        <p>企业注册</p>
      </div>

      <el-card class="box-card">
        <div class="register">
          <el-form ref="form" :model="register" label-width="100px">
            <el-form-item label="用户名：">
              <div class="rest-input">
                <el-input
                  v-model="register.userId"
                  placeholder="请输入用户名(企业用户为统一社会信用代码)"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item label="企业名称：">
              <div class="rest-input">
                <el-input
                  v-model="register.companyName"
                  placeholder="请输入企业名称"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item label="企业类型：">
              <el-select v-model="register.companyType" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="行政区划：">
              <div class="rest-input">
                <el-input
                  v-model="register.administrativeArea"
                  placeholder="请输入行政区划"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item label="联系人：">
              <div class="rest-input">
                <el-input v-model="register.contact" placeholder="请输入联系人"></el-input>
              </div>
            </el-form-item>
            <el-form-item label="手机号：">
              <div class="rest-input">
                <el-input v-model="register.contactPhone" placeholder="请输入手机号"></el-input>
              </div>
            </el-form-item>
            <el-form-item label="密码：">
              <div class="rest-input">
                <el-input
                  v-model="register.password"
                  type="password"
                  placeholder="请输入密码："
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item label="确认密码：">
              <div class="rest-input">
                <el-input
                  v-model="register.password2"
                  type="password"
                  placeholder="请确认密码"
                ></el-input>
              </div>
            </el-form-item>
          </el-form>
          <el-button>注册</el-button>
           <div class="regist">已有账号？<router-link :to="{name: 'Login'}">立即登录</router-link></div>
        </div>
      </el-card>
    </el-main>
    <el-footer>技术支持：浙江省超威动力能源有限公司</el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      register: {
        userId: '', // 用户名
        companyName: '', // 企业名称
        companyType: '', // 企业类型
        administrativeArea: '', // 行政规划
        contact: '', // 联系人
        contactPhone: '', // 手机号
        password: '', // 密码
        password2: '' // 确认密码
      },
      options: [
        {
          value: '1',
          label: '电动车/电池生产企业'
        },
        {
          value: '2',
          label: '电动车生产企业'
        },
        {
          value: '3',
          label: '电池生产企业'
        },
        {
          value: '4',
          label: '其他生产企业'
        }
      ],
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.el-footer {
  background-color: #225e9d;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 200px;
}

.el-main {
  background-color: #69adee;
  color: #333;
  text-align: center;
  line-height: 20px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
}

body > .el-container {
  margin-bottom: 40px;
}
.box-card {
  width: 700px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  .register {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .rest-input {
      display: flex;
      width: 100%;
      text-align: center;
    }
  }
  .el-button {
    width: 428px;
  }
}
.el-form-item{
    width: 600px;
}
</style>
