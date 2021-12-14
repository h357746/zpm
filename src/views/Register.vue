<template>
  <div id="app">
    <el-card class="login-card">
      <p class="title">用户注册</p>
      <el-form
        :model="RegisterForm"
        ref="RegisterForm"
        :rules="RegisterRules"
        style="margin-top: 30px"
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="RegisterForm.mobile"
            type="text"
            placeholder="请输入您的手机号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="RegisterForm.password"
            type="password"
            placeholder="请输入您的密码"
          />
        </el-form-item>
        <el-form-item prop="smscode">
          <el-input
            v-model="RegisterForm.smscode"
            type="text"
            placeholder="请输入验证码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit" style="width: 100%"
            >注册</el-button
          >
        </el-form-item>
        <div class="regist">
          已有账号？<router-link :to="{ name: 'Login' }">立即登录</router-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    const checkcode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      } else if (value.charAt(3) !== '9') {
        return callback(new Error('验证码错误'))
      } else {
        callback()
      }
    }
    return {
      RegisterForm: {
        mobile: '',
        password: '',
        smscode: ''
      },
      RegisterRules: {
        mobile: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          {
            min: 11,
            max: 11,
            message: '手机号长度为11个字符',
            trigger: 'blur'
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号格式不正确',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          {
            min: 6,
            max: 16,
            message: '密码长度为6到16个字符',
            trigger: 'blur'
          }
        ],
        smscode: [{ validator: checkcode, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submit (formName) {
      this.$refs.RegisterForm.validate((valid) => {
        if (valid) {
          alert('表单验证通过')
        } else {
          alert('表单验证未通过')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
  background-color: rgb(98, 165, 241);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
  width: 440px;
  height: 370px;
  .title {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .regist {
    text-align: right;
    color: #333;
    font-size: 14px;
    a{
      text-decoration: none;
    }
  }
}
</style>
