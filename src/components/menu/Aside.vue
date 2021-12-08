<template>
  <div class="menu">

<el-menu default-active="/" :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#212a4d" text-color="#fff">
  <el-submenu index="/dclist">
    <template slot="title">
      <i class="el-icon-s-grid"></i>
      <span slot="title">电动自行车赋码管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/carlist">电动自行车信息管理</el-menu-item>
      <el-menu-item index="/carcodelist">浙品码（车）管理</el-menu-item>
       <el-menu-item index="/dclist">电池信息管理</el-menu-item>
      <el-menu-item index="/dccodelist">浙品码（电池）管理</el-menu-item>
       <el-menu-item index="/Annexlist">电动自行车附件管理</el-menu-item>
      <el-menu-item index="/AnnexDcList">电池附件管理</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
 <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-truck"></i>
      <span slot="title">产品信息管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/ProductInfo">产品信息管理</el-menu-item>
      <el-menu-item index="/Qualified">产品合格管理</el-menu-item>
       <el-menu-item index="/GenerateZPM">生成浙品码</el-menu-item>
      <el-menu-item index="/AddSpFiles">赋码情况反馈</el-menu-item>

    </el-menu-item-group>
  </el-submenu>
</el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
