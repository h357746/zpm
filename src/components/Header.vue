<template>
    <div class="header">
        <div class="header__title">浙品码信息管理系统</div>
         <div class="header__buttom"><el-button type="primary"   @click="emitCollapse" icon="el-icon-s-fold" :style="{'background': !isCollapse ? 'white' : '#409eff', 'color': isCollapse ? 'white' : 'blue'}"></el-button></div>
     <div class="header__userinfo"><i class="el-icon-user"></i>欢迎

     <el-dropdown>
  <span class="el-dropdown-link">
    超威电源集团有限公司长兴郎山分公司<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item><router-link :to="{name: 'UserInfo'}">企业信息</router-link></el-dropdown-item>
    <el-dropdown-item>修改密码</el-dropdown-item>
    <el-dropdown-item>退出登录</el-dropdown-item>

  </el-dropdown-menu>
</el-dropdown>

     </div>

    </div>
</template>

<script>
export default {
  name: 'Header',
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
    emitCollapse () {
      this.$store.commit('changeCollapse')
    }
  }
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: #9a9a9a;
}
.header {
    display: flex;
    flex-direction: row;
    line-height: .3rem;
    width: 100%;
      &__title{
          flex-grow: 1;
    }
      &__buttom{
          flex-grow: 1;
          text-align: left;
          transform: translateX(-70%);
    }
    &__userinfo{
        flex-grow: 2;
        text-align: right;
        font-size: 14px;
        color: #9a9a9a;
    }
}
  .el-dropdown-link {
    cursor: pointer;
    color: #9a9a9a;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown-menu__item{
    color: #9a9a9a;
  }
</style>
