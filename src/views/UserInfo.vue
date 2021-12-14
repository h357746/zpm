<template>
  <div class="user-info">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1>编辑企业基础信息</h1>
      </div>
      <div class="from">
        <el-form ref="form" :model="userInfo" label-width="150px">
          <el-form-item label="统一社会信用代码" required>
            <el-input v-model="userInfo.uscode"></el-input>
          </el-form-item>
          <el-form-item label="企业名称" required>
            <el-input v-model="userInfo.companyName"></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="userInfo" class="demo-form-inline" label-width="150px">
          <el-form-item label="法人姓名">
            <el-input v-model="userInfo.legalPerson"></el-input>
          </el-form-item>
          <el-form-item label="联系人" required>
            <el-input v-model="userInfo.contact"></el-input>
          </el-form-item>
          <el-form-item label="联系手机" required>
            <el-input v-model="userInfo.contactPhone"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" required>
            <el-input v-model="userInfo.phoneNumber"></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="userInfo" class="demo-form-inline" label-width="150px">
          <el-form-item label="邮箱">
            <el-input v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码" required>
            <el-input v-model="userInfo.zipCode"></el-input>
          </el-form-item>
          <el-form-item label="行政区划" required>
            <el-input v-model="userInfo.administrativeArea"></el-input>
          </el-form-item>
          <el-form ref="form" :model="userInfo" label-width="150px">
            <el-form-item label="企业地址" required>
              <el-input
                type="textarea"
                :rows="3"
                v-model="userInfo.businessAddress"
              ></el-input>
            </el-form-item>
            <el-form-item label="生产地址" required>
              <el-input
                type="textarea"
                :rows="3"
                v-model="userInfo.productionAddress"
              ></el-input>
            </el-form-item>
            <el-form-item label="企业简介">
              <el-input
                type="textarea"
                :rows="4"
                v-model="userInfo.abstract"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-form>
      </div>
      <el-button type="primary" style="width:25%">保存</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userInfo: {
        uscode: '', // 统一社会信用代码
        companyName: '', // 企业名称
        legalPerson: '', // 法人姓名
        contact: '', // 联系人
        contactPhone: '', // 联系手机
        phoneNumber: '', // 联系电话
        email: '', // 邮箱
        zipCode: '', // 邮政编码
        administrativeArea: '', // 行政区划
        businessAddress: '', // 企业地址
        productionAddress: '', // 生产地址
        abstract: '' // 企业简介
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  line-height: 30px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  height: 30px;
  text-align: left;
  h1{
    margin: 0;
  }
}
.box-card {
  width: 100%;
  height: 100%;
}
.from,
.buttom {
  text-align: left;
}

.el-form-item{
    margin: 20px;
    font-weight: bold;
}
.el-textarea{
        width: 600px;
    }
</style>
