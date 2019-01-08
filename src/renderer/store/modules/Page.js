const state = {
  page: ''
}

const mutations = {
  CHANGE_PAGE_VALUE (state, val) {
    state.page = val
  }
}

const actions = {
  CHANGE_PAGE_VALUE ({ commit }, val) {
    // do something async
    commit('CHANGE_PAGE_VALUE', val)
  }
}

export default {
  state,
  mutations,
  actions
}
