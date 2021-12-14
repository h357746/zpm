import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'
import { getUserToken } from '../utils/sessionStorage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: '/dclist',
        name: 'Dclist',
        component: () => import(/* webpackChunkName: "Dclist" */ '../views/battry/Dclist.vue'),
        title: '电动自行车信息管理'
      },
      {
        path: '/dccodelist',
        name: 'DcCodeList',
        component: () => import(/* webpackChunkName: "DcCodeList" */ '../views/battry/DcCodeList.vue'),
        title: '浙品码(车)管理'
      },
      {
        path: '/carlist',
        name: 'CarList',
        component: () => import(/* webpackChunkName: "CarList" */ '../views/battry/CarList.vue'),
        title: '电池信息管理'
      },
      {
        path: '/carcodelist',
        name: 'CarCodeList',
        component: () => import(/* webpackChunkName: "CarCodeList" */ '../views/battry/CarCodeList.vue'),
        title: '浙品码(电池)管理'
      },
      {
        path: '/Annexlist',
        name: 'AnnexList',
        component: () => import(/* webpackChunkName: "AnnexList" */ '../views/battry/AnnexList.vue'),
        title: '电动自行车附件管理'
      },
      {
        path: '/AnnexDcList',
        name: 'AnnexDcList',
        component: () => import(/* webpackChunkName: "AnnexDcList" */ '../views/battry/AnnexDcList.vue'),
        title: '电池附件管理'
      },
      {
        path: '/ProductInfo',
        name: 'ProductInfo',
        component: () => import(/* webpackChunkName: "ProductInfo" */ '../views/product/ProductInfo.vue'),
        title: '产品信息管理'
      },
      {
        path: '/Qualified',
        name: 'Qualified',
        component: () => import(/* webpackChunkName: "Qualified" */ '../views/product/Qualified.vue'),
        title: '产品合格(车)管理'
      },
      {
        path: '/GenerateZPM',
        name: 'GenerateZPM',
        component: () => import(/* webpackChunkName: "GenerateZPM" */ '../views/product/GenerateZPM.vue'),
        title: '生成浙品码'
      },
      {
        path: '/AddSpFiles',
        name: 'AddSpFiles',
        component: () => import(/* webpackChunkName: "AddSpFiles" */ '../views/product/AddSpFiles.vue'),
        title: '赋码情况反馈'
      },
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import(/* webpackChunkName: "UserInfo" */ '../views/UserInfo.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: { name: 'Login' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = getUserToken('userToken')
  if (isLogin || to.name === 'Login' || to.name === 'Register') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
