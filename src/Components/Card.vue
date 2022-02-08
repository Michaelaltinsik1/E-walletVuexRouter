<template>
    <article class="card" :class="data.vendor" @click="$emit('click')">
        <img class ="wifi" src="@/../assets/wifi.svg" alt="wifi" width="40" height="40">
        <img class="chip" src="@/../assets/chip.svg" alt="chip" width="48" height="38">
        <img class="vendor" :src="require(`../../assets/${data.vendor}.svg`)" alt="Vendor">
        <h2 class="bank-number">{{data.cardNumber}}</h2>
        <div class="cardholder-container">
            <p class="upper-case card-name">Cardholder name</p>
            <h2>{{data.cardHolder}}</h2>
        </div>
        <div class="date-container">
            <p class="upper-case date">Valid thru</p>
            <h2>{{getDate}}</h2>
        </div>
    </article>
    
</template>

<script>
export default {
    props:['data'],
    computed:{
        getDate(){
             return this.data.month + '/' + this.data.year;
        }       
    } 
}
</script>

<style lang="scss" scoped>
    $bitcoin: #FFAE34;
    $blockchain: #8B58F9;
    $evil: #F33355;
    $ninja: #222222;
    .card{
        max-width: 400px;
        height: 230px;
        background-color:#D0D0D0;
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas: 
        "wifi . . vendor" 
        "chip . . ."
        "number number number number"
        "cardholder cardholder cardholder date";
        box-sizing: border-box;
        border-radius: 0.5rem;
    }
    .wifi{
        grid-area: wifi;
    
    }
    .chip{
        grid-area: chip;
    }
    .vendor{
        grid-area: vendor;
    }
    .bank-number{
        grid-area: number;
    }
    .cardholder-container{
        grid-area: cardholder;
    }
    .date-container{
        grid-area: date;
    }
    .date,.card-name{
        font-size: 0.65rem;
    } 
    .bitcoin{
        background-color: $bitcoin;
    }
    .blockchain{
        background-color: $blockchain;
        color: #fff;
    }
    .evil{
        background-color: $evil;
         color: #fff;
    }
    .ninja{
        background-color: $ninja;
         color: #fff;
    }

</style>
