<template>
    <div class="dclist">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
    <h1>浙品码（车）管理</h1>
  </div>
  <div class="from">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="流水号">
    <el-input v-model="formInline.dcno" placeholder="流水号"></el-input>
  </el-form-item>
    <el-form-item label="制造商">
    <el-input v-model="formInline.companyName" placeholder="制造商"></el-input>
  </el-form-item>
      <el-form-item label="整车编码">
    <el-input v-model="formInline.dctype" placeholder="整车编码"></el-input>
  </el-form-item>
   <el-form-item label="绑定日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="绑定日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
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
 <TableList class="table" />
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
export default {
  name: 'CarCodeList',
  components: { TableList },
  data () {
    return {
      formInline: {
        dcno: '',
        companyName: '',
        dctype: '',
        date1: '',
        date2: ''
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
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
