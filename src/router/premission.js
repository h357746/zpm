import store from '../store/index'
import router from './index'
import { setMenu, getMenu } from '../utils/sessionStorage'
import { get } from '../utils/requset'

export const getSlideMenu = async () => {
  const result = await get('/api/menu')
  store.commit('setMenu', result.menu)
  setMenu(JSON.stringify(result.menu))
}

const asyncRouter = [{
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
  path: '/annexlist',
  name: 'AnnexList',
  component: () => import(/* webpackChunkName: "AnnexList" */ '../views/battry/AnnexList.vue'),
  title: '电动自行车附件管理'
},
{
  path: '/annexDcList',
  name: 'AnnexDcList',
  component: () => import(/* webpackChunkName: "AnnexDcList" */ '../views/battry/AnnexDcList.vue'),
  title: '电池附件管理'
},
{
  path: '/productInfo',
  name: 'ProductInfo',
  component: () => import(/* webpackChunkName: "ProductInfo" */ '../views/product/ProductInfo.vue'),
  title: '产品信息管理'
},
{
  path: '/qualified',
  name: 'Qualified',
  component: () => import(/* webpackChunkName: "Qualified" */ '../views/product/Qualified.vue'),
  title: '产品合格(车)管理'
},
{
  path: '/generateZPM',
  name: 'GenerateZPM',
  component: () => import(/* webpackChunkName: "GenerateZPM" */ '../views/product/GenerateZPM.vue'),
  title: '生成浙品码'
},
{
  path: '/addSpFiles',
  name: 'AddSpFiles',
  component: () => import(/* webpackChunkName: "AddSpFiles" */ '../views/product/AddSpFiles.vue'),
  title: '赋码情况反馈'
}]

export const generateRouter = () => {
  const newRouter = []
  const menu = JSON.parse(getMenu())
  menu.forEach(element => {
    if (element.children.length > 0) {
      element.children.forEach(item => {
        asyncRouter.forEach(list => {
          if (item.name === list.title) {
            newRouter.push(list)
          }
        })
      })
    }
  })
  newRouter.forEach(element => {
    router.addRoute('Home', {
      path: element.path,
      name: element.name,
      component: element.component,
      title: element.title
    })
  })
}
