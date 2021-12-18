<template>
  <div class="home">

<el-container>
  <el-header><Header/></el-header>
  <el-container>
    <el-aside width="alSiderWidth" ><Aside  /></el-aside>
    <el-container>
      <el-main><router-view /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </el-container>
</el-container>
  </div>
</template>
<script>
import Aside from '../components/menu/Aside.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { generateRouter } from '../router/premission'
export default {
  name: 'Home',
  components: { Aside, Header, Footer },
  data () {
    return {
    }
  },
  created () {
    generateRouter()
  },

  computed: {
    alSiderWidth () {
      return this.$store.state.alSiderWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  z-index: 999;
  background-color: #ffffff;
  color: #333;
  line-height: 60px;
}
.el-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeef3;
  color: #333;
  text-align: center;

}

.el-aside {
  background-color: #212a4d;
  color: #333;
  text-align: center;
  line-height: 200px;
  min-height: 800px;
  overflow: hidden;
  transition:width 0.6s;
}

.el-main {
  background-color: #eef1f5;
  color: #333;
  text-align: center;
  line-height: 160px;
  min-height: 800px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
