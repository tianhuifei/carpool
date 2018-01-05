import * as types from './mutation-types'

const mutations = {
  [types.SET_PUBLISINFO](state, info) {
    state.publishInfo = info
  },
  [types.SET_XHEADER](state, obj) {
    state.xHeader = Object.assign({}, state.xHeader, obj)
  }
}

export default mutations
