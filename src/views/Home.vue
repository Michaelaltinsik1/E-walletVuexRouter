<template>
  <section class="home">
    <header>
      <h1 class="uppger-case">E-wallet</h1>
    </header>
    <main>
      <Card class = "activeCard" v-if="getActiveCard" :data="getActiveCard"/>
      <CardList/>
    </main> 
    <nav>
      <router-link class="upper-case nav-button" to="/AddCard" tag="button">
          Add a new card
      </router-link>
    </nav>
  </section>
</template>

<script>
import Card from '@/Components/Card.vue'
import CardList from '@/Components/CardList.vue'
export default {
  components:{CardList,Card},
  computed: {
    getActiveCard(){
      return this.$store.state.activeCard;
    }
  }
}
</script>

<style>
  .nav-button{
        min-width: 100%;
        padding: 1.6rem 0rem;
        background-color: #FFFFFF;;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        color: #000000;
        font-size: 1.2rem;
        margin-top: 1rem;
        border: 1px solid black;
    }
</style>

