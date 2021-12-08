<template>
    <div class="dclist">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
    <h1>赋码情况反馈</h1>
  </div>
  <div class="from">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="产品名称">
    <el-input v-model="formInline.companyName" placeholder="产品名称"></el-input>
  </el-form-item>
      <el-form-item label="批次号">
    <el-input v-model="formInline.dctype" placeholder="批次号"></el-input>
  </el-form-item>
     <el-form-item label="产品类型">
      <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
     <el-form-item label="企业名称">
    <el-input v-model="formInline.dctype" placeholder="企业名称"></el-input>
  </el-form-item>
   <el-form-item label="提交日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="提交日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
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
 <TableList class="table" ><el-button slot="btn" type="text" >上传</el-button><el-button slot="btn" type="text" >查看</el-button>
</TableList>
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
  name: 'AddSpFiles',
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
      currentPage4: 4,
      options: [{
        value: '1',
        label: '全部'
      }, {
        value: '2',
        label: '工许产品'
      }, {
        value: '3',
        label: '能效水效'
      }, {
        value: '4',
        label: 'CCC'
      }, {
        value: '5',
        label: '其他'
      }],
      value: ''
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
