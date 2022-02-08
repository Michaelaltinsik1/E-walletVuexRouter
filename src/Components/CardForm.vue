<template>
  <form @submit.prevent="" class="card-form">
      <label class="upper-case number" for="number">Card number
          <input type="text" id="number" placeholder="XXXX XXXX XXXX XXXX" v-model="getCardNumber">
      </label>
      <label class="upper-case cardholder" for="card-holder">CardHolder name
          <input type="text" id="card-holder" placeholder="Firstname Lastname" v-model="getCardHolder">
      </label>
      <label class="upper-case month" for="month">Month
        <select id="month" @change="modifyMonth($event)">
          <option v-for="n of 12" :value="n" :key="n">{{n}}</option>
        </select>
      </label>
      <label class="upper-case year" for="year">Year
        <select id="year" @change="modifyYear($event)">
          <option v-for="n of 10" :key="n" :value="n + 21">{{n + 21}}</option>
        </select> 
      </label>
      <label class="upper-case vendor" for="vendor">Vendor
        <select id="vendor" @change="modifyVendor($event)">
          <option value="bitcoin">Bitcoin inc</option>
          <option value="blockchain">Block chain inc</option>
          <option value="evil">Evil corp</option>
          <option value="ninja">Ninja bank</option>
        </select>
      </label>
  </form>
</template>

<script>

export default {
  computed: {
    getCardNumber:{
      get(){
        return this.$store.state.newCard.cardNumber;
      },
      set(data){
        this.$store.dispatch('getNewCardNumber', data);
      }
    },
    getCardHolder:{
      get(){
        return this.$store.state.newCard.cardHolder;
      },
      set(data){
        this.$store.dispatch('getNewCardHolder', data);
      }
    }
  },
  methods:{
    modifyMonth(event){
        this.$store.dispatch('changeMonth' ,event.target.value)
    },
    modifyYear(event){
        this.$store.dispatch('changeYear' ,event.target.value)
    },
    modifyVendor(event){
        this.$store.dispatch('changeVendor' ,event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  
    .card-form{
        gap: 0.5rem;
        display: grid;
        grid-template-columns: repeat(2 ,1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas: 
        "number number"
        "cardholder cardholder"
        "month year"
        "vendor vendor";
    }
    label{
        display: flex;
        flex-direction: column;
        font-size: 0.7rem;
    }
    input,select{
        margin: 0.3rem 0rem;
        padding: 0.9rem;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        border: 1px solid black;
        outline: none;
    }
    .number{
        grid-area: number;
    }
    .cardholder{
        grid-area: cardholder;
    }
    .month{
        grid-area: month;
        margin-right: 0.5rem;
    }
    .year{
        grid-area: year;
        margin-left: 0.5rem;
    }
    .vendor{
        grid-area: vendor;
    }
    .upper-case{
        text-transform: uppercase;
    }
</style>>