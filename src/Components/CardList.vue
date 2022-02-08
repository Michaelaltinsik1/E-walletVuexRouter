<template>
    <section class="cards">
        <Card v-for="card in getCards" :key="card.cardNumber" :data="card" @click="changeActive(card)"/>
    </section>
</template>

<script>
import Card from './Card.vue'
export default {
    components:{Card},
    computed:{
        getCards(){
            return this.$store.state.cards;
        }
    },
    methods:{
        changeActive(activeCard){
            this.$store.dispatch('getActiveCard', activeCard);
        }
    }
}
</script>

<style>

</style>