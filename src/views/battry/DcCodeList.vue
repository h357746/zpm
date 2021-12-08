<template>
    <div class="dclist">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
    <h1>浙品码（电池）管理</h1>
  </div>
  <div class="from">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="蓄电池唯一编号">
    <el-input v-model="formInline.dcno" placeholder="蓄电池唯一编号"></el-input>
  </el-form-item>
    <el-form-item label="企业名称">
    <el-input v-model="formInline.companyName" placeholder="企业名称"></el-input>
  </el-form-item>
   <el-form-item label="绑定时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-date-picker placeholder="选择时间" v-model="formInline.date2" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
  </div>
  <div class="buttom">
    <el-button type="primary" icon="el-icon-download">导出</el-button>
</div>
 <TableList class="table" >        <el-button slot="btn" type="text" size="small" @click="()=> {this.$store.commit('visibledialogDcCode')}"> 预览 </el-button>
 <el-dialog slot="preview" width="40%" title="预览" :visible="dialogDcCode" center :lock-scroll="true" :before-close="()=> {this.$store.commit('visibledialogDcCode')}"><code-preview /></el-dialog></TableList>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>

</el-card>

    </div>

</template>

<script>
import TableList from '../../components/Table.vue'
import CodePreview from '../../components/CodePreview.vue'
export default {
  name: 'DcCodeList',
  components: { TableList, CodePreview },
  data () {
    return {
      formInline: {
        dcno: '',
        companyName: '',
        date1: '',
        date2: ''
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  computed: {
    dialogDcCode () {
      return this.$store.state.dialogDcCode
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/componet.scss'

</style>
