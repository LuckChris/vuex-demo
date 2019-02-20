// import {SET_PLAN} from './mutation-types'
// export default{
//   setPlan ({commit, data}) {
//     commit(SET_PLAN, data)
//   }
// }

const actions = {
  setPlan ({commit}, data) { // 写计划
    commit('SET_PLAN', data)
  },
  completePlan ({commit}, data) { // 计划完成
    commit('SET_YES', data)
  },
  delete ({commit}, index) { // 删除计划
    commit('DEL_PLAN', index)
  },
  delCompleteItem ({commit}, index) { // 从写下的计划中删除完成的
    commit('COMPLETE_PLAN', index)
  }
}
export default actions
