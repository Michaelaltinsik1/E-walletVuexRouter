<template>
    <section class="add-card">
        <header>
            <h1 class="upper-case">Add a new bank card</h1>
        </header>
        <main>
            <Card v-if="getCard" class="card" :data="getCard"/>
            <CardForm/>
        </main>

        <nav>
            <router-link @click.native="addNewCard" class="upper-case nav-button" to="/" tag="button">
                    Add card
            </router-link>
        </nav>    
    </section>
</template>

<script>
import CardForm from "@/Components/CardForm"
import Card from "@/Components/Card.vue"
export default {
    components: {CardForm, Card},
    computed:{
        getCard(){
            return this.$store.state.newCard;
        }      
    },
    methods:{
        addNewCard(){
            let card = this.$store.state.newCard;
            this.$store.dispatch('getCardToAdd', card);
        }
    }
}
</script>

<style lang="scss" scoped>
    .add-card{
        min-height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 5fr 1fr;
        grid-template-areas: 
        "header"
        "main"
        "nav";   
    }
    header{
        grid-area: header;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    header h1{
        font-size: 1.8rem;
        max-width: 70%;
        text-align: center;
    }
    main{
        grid-area: main;
    }
    nav{
        grid-area: nav;
    }
    .card{
        margin-bottom: 2.2rem;
    }
    .nav-button{
        min-width: 100%;
        padding: 1.6rem 0rem;
        background-color: #000000;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        color: #FFFFFF;
        font-size: 1.2rem;
        margin-top: 1rem;
    }
</style>