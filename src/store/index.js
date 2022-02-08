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
    modifyNewCardNumber(state, cardNumber){
      state.newCard.cardNumber = cardNumber;
    },
    modifyNewCardHolder(state, cardHolder){
      state.newCard.cardHolder = cardHolder;
    },
    modifyNewCardMonth(state, month){
      state.newCard.month = month;
    },
    modifyNewCardYear(state, year){
      state.newCard.year = year;
    },
    modifyNewCardVendor(state, vendor){
      state.newCard.vendor = vendor;
    },
    addNewCard(state, newCard){
      state.cards.push(newCard);
      state.newCard = {
        cardNumber : "",
        cardHolder : "",
        month : 1,
        year : 22,
        vendor : "bitcoin"
    }
    }
  },
  actions: {
    getNewCardNumber(context, cardNumber){
      context.commit('modifyNewCardNumber', cardNumber);
    },
    getNewCardHolder(context, cardHolder){
      context.commit('modifyNewCardHolder', cardHolder);
    },
    changeMonth(context, month){
      context.commit('modifyNewCardMonth', month);
    },
    changeYear(context, year){
      context.commit('modifyNewCardYear', year);
    },
    changeVendor(context, vendor){
      context.commit('modifyNewCardVendor', vendor);
    },
    getCardToAdd(context, newCard){
      context.commit('addNewCard' ,newCard);
    }
  },
  modules: {
  }
})
