<template>
  <el-card class="box-card">
    <img src="../assets/tup.jpg" alt="" />
    <div class="tab">
      <el-tabs v-model="activeName" :stretch="true">
        <el-tab-pane label="合格检验证明" name="first"><img src="../assets/20211021102055187.jpg" alt=""><img src="../assets/20211021102100099.jpg" alt=""></el-tab-pane>
        <el-tab-pane label="产品基本信息" name="second">
          <div class="content"> <p>电池编号： 0669407302021120320000012102</p>
      <p>蓄电池生产企业： 超威电源集团有限公司长兴郎山分公司</p>
      <p>蓄电池类型： 铅酸</p>
      <p>蓄电池容量Ah： 20</p>
      <p>蓄电池型号： 6-DZF-20</p>
      <p>生产日期： 2021-12-03</p>
      <p>企业名称： 超威电源集团有限公司长兴郎山分公司</p>
      <p>企业地址： 长兴县小浦镇郎山工业集中区</p>
      <p>企业介绍： 超威电源集团有限公司长兴郎山分公司成立于2013年04月11日，注册地位于长兴县小浦镇郎山工业集中区，法定代表人为周怡。经营范围包括蓄电池（注有酸液）生产。（依法须经批准的项目，经相关部门批准后方可开展经营活动）</p></div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'CodePreview',
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
<style lang="scss" scoped>

.box-card {
  width: 100%;
  text-align: center;
  img {
  width: 100%;
}
 .content{
    text-align: left;
  }
}

</style>
