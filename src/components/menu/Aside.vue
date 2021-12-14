<template>
  <div class="menu">

<el-menu default-active="/" :router="true" class="el-menu-vertical-demo" :collapse-transition="true" :collapse="isCollapse" background-color="#212a4d" text-color="#fff">
  <el-submenu :index="item.id" v-for="item in routerPath" :key="item.id">
    <template slot="title">
      <i :class="item.icon"></i>
      <span slot="title" style="font-size:13px">{{item.name}}</span>
    </template>
    <el-menu-item-group>
      <el-menu-item :index="i.url" v-for="i in item.children" :key="i.id">{{i.name}}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</el-menu>

  </div>
</template>

<script>
import { get } from '../../utils/requset'
export default {
  data () {
    return {
      routerPath: []
    }
  },
  mounted () {
    const getMenu = async () => {
      const result = await get('/api/menu')
      console.log(result)
      this.routerPath = result.menu
    }
    getMenu()
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
    text-align: left;
    float: left;
}
</style>
