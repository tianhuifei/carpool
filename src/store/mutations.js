import * as types from './mutation-types'

const mutations = {
  [types.SEET_PUBLISHLIST](state, list) {
    state.publishList = list
  }
}

export default mutations
