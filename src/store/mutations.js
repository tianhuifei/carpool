import * as types from './mutation-types'

const mutations = {
  [types.SET_PUBLISINFO](state, info) {
    state.publishInfo = info
  }
}

export default mutations
