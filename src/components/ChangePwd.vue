<template>
  <div class="cpwd">
    <el-dialog
      title="密码重置"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="visibleDialog"
      center
    >
      <div class="rest-pwd">
        <el-form ref="form" :model="restPwd" label-width="80px">
          <el-form-item label="用户名：">
            <div class="rest-input">
              <el-input
                v-model="restPwd.userId"
                placeholder="请输入用户名(企业用户为统一社会信用代码)"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item label="手机号：">
            <div class="rest-input">
              <el-input v-model="restPwd.contact" placeholder="请输入手机号"></el-input
              ><el-button>获取验证码</el-button>
            </div>
          </el-form-item>
          <el-form-item label="验证码：">
            <div class="rest-input">
              <el-input v-model="restPwd.smsCode" placeholder="请输入验证码"></el-input>
            </div>
          </el-form-item>
        </el-form>
        <el-button @click="visibleDialog">密码重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      restPwd: {
        userId: '',
        contact: '',
        smsCode: ''
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
.rest-pwd {
  width: 80%;
  text-align: center;
  .rest-input {
    display: flex;
    width: 100%;
    text-align: center;
  }
}
</style>
