import vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getter'

vue.use(Vuex)

const state = {
  home: localStorage['home'] ? JSON.parse(localStorage['home']) : [],
  completeData: localStorage['yes'] ? JSON.parse(localStorage['yes']) : []

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})
