import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    alSiderWidth: '200px',
    dialogVisible: false,
    dialogDcCode: false,
    loginState: ''
  },
  mutations: {
    changeCollapse (state) {
      state.isCollapse = !state.isCollapse
    },
    changeSiderWidth (state) {
      state.alSiderWidth = !state.isCollapse ? '200px' : '66px'
    },
    visibleDialog (state) {
      state.dialogVisible = !state.dialogVisible
    },
    visibledialogDcCode (state) {
      state.dialogDcCode = !state.dialogDcCode
    },
    setLoginState (state, token) {
      state.loginState = token
    }
  },
  actions: {
  },
  modules: {
  }
})
