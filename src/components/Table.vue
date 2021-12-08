<template>
<div class="codepre">
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%"
    max-height="500"
  >
    <el-table-column
      v-for="(item, index) in nameList"
      :key="index"
      :prop="item.title"
      :label="item.name"
      width="260"
    >
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <slot name="btn"></slot>

        <el-button type="text" size="small"
         @click.native.prevent="deleteRow(scope.$index, tableData)"
        > 移除 </el-button>
      </template>
    </el-table-column>
  </el-table>
<slot name="preview"></slot>

</div>

</template>

<script>
import { get } from '../utils/requset'

export default {

  data () {
    return {
      nameList: [],
      tableData: [],
      loading: true
    }
  },
  created () {
    const getContentData = async () => {
      const result = await get('/api/dclist')
      if (result) {
        console.log(result)
        this.nameList = result.dcInfoName
        this.tableData = result.dcList
      }
      this.loading = false
    }
    getContentData()
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
      this.$message({
        message: '移除成功',
        type: 'success'
      })
    }
  }
}

</script>
<style lang="scss" scoped>

</style>
