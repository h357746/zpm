import nprogress from 'nprogress'
import Vue from 'vue'
import VueRouter from 'vue-router'

import { getUserToken } from '../utils/sessionStorage'

Vue.use(VueRouter)

const beforeRouteEnter = (to, from, next) => {
  const isLogin = getUserToken('userToken')
  if (isLogin) next({ name: 'Home' })
  else (next())
}

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
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
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    beforeRouteEnter: beforeRouteEnter
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue'),
    beforeRouteEnter: beforeRouteEnter
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = getUserToken('userToken')
  if (isLogin) {
    if (to.name === 'Login' || to.name === 'Register') {
      next('/home')
    } else {
      nprogress.start()
      next()
    }
  } else {
    if (to.name === 'Login' || to.name === 'Register') {
      nprogress.start()
      next()
    } else {
      next('/login')
    }
  }
})
router.afterEach(() => {
  nprogress.done()
})

export default router
