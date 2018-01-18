import * as types from './mutation-types'

const mutations = {
  [types.SET_PUBLISINFO](state, info) {
    state.publishInfo = info
  },
  [types.SET_XHEADER](state, obj) {
    state.xHeader = Object.assign({}, state.xHeader, obj)
  },
  [types.SET_USER](state, user) {
    state.user = user
  }
}

export default mutations
