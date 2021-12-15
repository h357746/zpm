<template>
  <div class="cpwd">
    <el-dialog
      title="密码重置"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="visibleDialog"
      center
    >
    <el-card class="login-card">
      <el-form
        :model="RegisterForm"
        ref="RegisterForm"
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
          <el-button type="primary" @click="visibleDialog" style="width: 100%"
            >重置密码</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      RegisterForm: {
        mobile: '',
        password: '',
        smscode: ''
      }
    }
  },
  computed: {
    dialogVisible () {
      return this.$store.state.dialogVisible
    }
  },
  methods: {
    visibleDialog () {
      this.$store.commit('visibleDialog')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
