<template>
    <section class="cards">
        <Card v-for="card in getCards" :key="card.cardNumber" :data="card"/>
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
    }
}
</script>

<style>

</style>