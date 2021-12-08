import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'

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
        component: () => import(/* webpackChunkName: "Dclist" */ '../views/battry/Dclist.vue')
      },
      {
        path: '/dccodelist',
        name: 'DcCodeList',
        component: () => import(/* webpackChunkName: "DcCodeList" */ '../views/battry/DcCodeList.vue')
      },
      {
        path: '/carlist',
        name: 'CarList',
        component: () => import(/* webpackChunkName: "CarList" */ '../views/battry/CarList.vue')
      },
      {
        path: '/carcodelist',
        name: 'CarCodeList',
        component: () => import(/* webpackChunkName: "CarCodeList" */ '../views/battry/CarCodeList.vue')
      },
      {
        path: '/Annexlist',
        name: 'AnnexList',
        component: () => import(/* webpackChunkName: "AnnexList" */ '../views/battry/AnnexList.vue')
      },
      {
        path: '/AnnexDcList',
        name: 'AnnexDcList',
        component: () => import(/* webpackChunkName: "AnnexDcList" */ '../views/battry/AnnexDcList.vue')
      },
      {
        path: '/ProductInfo',
        name: 'ProductInfo',
        component: () => import(/* webpackChunkName: "ProductInfo" */ '../views/product/ProductInfo.vue')
      },
      {
        path: '/Qualified',
        name: 'Qualified',
        component: () => import(/* webpackChunkName: "Qualified" */ '../views/product/Qualified.vue')
      },
      {
        path: '/GenerateZPM',
        name: 'GenerateZPM',
        component: () => import(/* webpackChunkName: "GenerateZPM" */ '../views/product/GenerateZPM.vue')
      },
      {
        path: '/AddSpFiles',
        name: 'AddSpFiles',
        component: () => import(/* webpackChunkName: "AddSpFiles" */ '../views/product/AddSpFiles.vue')
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

// router.beforeEach((to, from, next) => {
//   const isLogin = store.state.loginState
//   if (isLogin || to.name === 'Login' || to.name === 'Register') {
//     next()
//   } else {
//     next({ name: 'Login' })
//   }
// })

export default router
