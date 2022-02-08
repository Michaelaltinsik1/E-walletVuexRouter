<template>
    <dialog v-if="deletedStatus" open class="confirmationDialog">
        <h2>Confirm</h2>
        <p>Are you certain you want to delete this bank card?</p>
        <button @click="$emit('handle-deletion', 'yes')" class="confirmDeletion">Yes</button>
        <button @click="$emit('handle-deletion', 'cancel')" class="denyDelition">Cancel</button>
    </dialog>
</template>

<script>
export default {
    props:['deletedStatus'],
    data(){
        return{
            deleteCard : false
        }
    }
}
</script>

<style scoped>
    .confirmationDialog{
        padding: 1.2rem;
        border-radius: 0.8rem;
        max-width: 60%;
        display: grid;
        gap:0.2rem 2rem;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr 2fr 1fr;
        grid-template-areas: 
        "confirm confirm"
        "text text"
        "cancel yes";
        border:1px solid black;
    }
    h2{
        font-size: 1.7rem;
        grid-area: confirm;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        grid-area: text;
        padding: 0rem;
    }
    .confirmDeletion{
        grid-area: yes;
        background-color: rgb(126, 159, 252);
    }
    .denyDelition{
        grid-area: cancel;
        color: rgb(255, 0, 0);
        background-color: rgb(223, 215, 215);
    }
    button{
        background-color: transparent;
        border-radius: 0.3rem;
        border: 1px solid black;
        cursor: pointer;
        font-size:1rem;
        font-weight: 600;
        max-zoom: 80%;
    }

</style>