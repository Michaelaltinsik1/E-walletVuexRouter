import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards : [],
    activeCard : null,
    newCard : {
        cardNumber : "",
        cardHolder : "",
        month : 1,
        year : 22,
        vendor : "bitcoin"
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
