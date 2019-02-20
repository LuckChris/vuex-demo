import {SET_PLAN, SET_YES, DEL_PLAN, COMPLETE_PLAN} from './mutation-types'

export default {
  // 计划
  [SET_PLAN] (state, data) {
    state.home.push(data)
    localStorage.setItem('home', JSON.stringify(state.home))
  },
  // 完成
  [SET_YES] (state, data) {
    state.completeData.push(data)
    localStorage.setItem('yes', JSON.stringify(state.completeData))
  },
  [DEL_PLAN] (state, index) {
    state.completeData.splice(index, 1)
    localStorage.setItem('yes', JSON.stringify(state.completeData))
  },
  [COMPLETE_PLAN] (state, index) {
    state.home.splice(index, 1)
    localStorage.setItem('home', JSON.stringify(state.home))
  }

}
